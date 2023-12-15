# views.py
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Recipe,RecipeReview,RecipeRating,RecipeImages
from .serializer import RecipeSerializer,RecipeRatingSerializer,RecipeReviewSerializer,RecipeImageSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from django.db.models import Q,Avg
from rest_framework.parsers import MultiPartParser, FormParser


  
class RecipeListCreateView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        # Get query parameters for search and filters
        query = request.query_params.get('query', '')
        ingredients = request.query_params.getlist('ingredients', [])
        cuisine = request.query_params.get('cuisine', '')
        dietary_restrictions = request.query_params.getlist('dietary_restrictions', [])
        max_cook_time = request.query_params.get('max_cook_time', None)

        # Filter recipes based on query parameters
        recipes = Recipe.objects.all()

        if query:
            recipes = recipes.filter(title__icontains=query)

      
        for ingredient in ingredients:
            recipes = recipes.filter(ingredients__icontains=ingredient)

        if cuisine:
            recipes = recipes.filter(cuisine__icontains=cuisine)

        
        if dietary_restrictions:
            # Ensure dietary_restrictions is a single comma-separated string
            dietary_restrictions_str = ','.join(dietary_restrictions)

            # Split the dietary_restrictions string into a list
            dietary_restrictions_list = [item.strip() for item in dietary_restrictions_str.split(',')]

            # Create a Q object to combine multiple conditions with OR
            filter_condition = Q()
            
            # Check if any of the provided dietary restrictions are present in the stored list
            for restriction in dietary_restrictions_list:
                filter_condition |= Q(dietary_restrictions__icontains=restriction)

            # Apply the filter to the queryset
            recipes = recipes.filter(filter_condition)
        

        if max_cook_time is not None:
            recipes = recipes.filter(cook_time__lte=max_cook_time)
            
            
        #  filer the recipe by category
        # Filter by category
        # Get category and tags for filtering
        category = request.query_params.get('category', None)
        tags = request.query_params.getlist('tags', [])
        print(category)
        if category:
            # recipes = recipes.filter(categories__name__icontains=category)
            recipes= recipes.filter(category__id=category)

        # Filter by tags
        if tags:
            print(tags)
            recipes = recipes.filter(tags__id__in=tags)
          
            
        serializer = RecipeSerializer(recipes, many=True, context={'request': request})
        
        # Fetch ratings and reviews related to each recipe
        recipe_ids = [recipe.id for recipe in recipes]
        ratings = RecipeRating.objects.filter(recipe__in=recipe_ids)
        reviews = RecipeReview.objects.filter(recipe__in=recipe_ids)

        # Calculate average rating for each recipe
        average_ratings = RecipeRating.objects.filter(recipe__in=recipe_ids).values('recipe').annotate(avg_rating=Avg('rating'))

        # Create a dictionary to map recipe_id to its corresponding average rating
        avg_rating_map = {rating['recipe']: rating['avg_rating'] for rating in average_ratings}

        # Add ratings and reviews data to each recipe in the serializer
        for recipe_data in serializer.data:
            recipe_id = recipe_data['id']
            recipe_data['ratings'] = RecipeRatingSerializer(ratings.filter(recipe=recipe_id), many=True).data
            recipe_data['reviews'] = RecipeReviewSerializer(reviews.filter(recipe=recipe_id), many=True).data
            recipe_data['average_rating'] = avg_rating_map.get(recipe_id, 0.0)
            
            
            
        return Response({
            'message': 'Recipes retrieved successfully',
            'data': serializer.data
        })

    
    
    
    def post(self, request, format=None):
        serializer = RecipeSerializer(data=request.data)
        
       
        if serializer.is_valid():
            # images = serializer.validated_data.get('images', [])
            # serializer.save(user=self.request.user, images=images)
            # images = serializer.validated_data['images']
            # serializer.save(user=self.request.user)
            return Response({
                'message': 'Recipe created successfully',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Recipe creation failed',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
# class RecipeImageView(APIView):
#     parser_classes = (MultiPartParser, FormParser)

#     def post(self, request, pk, format=None):
#         recipe = Recipe.objects.get(pk=pk)
#         print("recipe",recipe)
#         serializer = RecipeSerializer(recipe, data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response({'message': 'Images uploaded successfully'}, status=status.HTTP_200_OK)

#         return Response({'message': 'Image upload failed', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
                          
class IsRecipeAuthor(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Check if the user making the request is the author of the recipe
        return obj.author == request.user

class RecipeRetrieveUpdateDestroyView(APIView):
    permission_classes = [IsAuthenticated, IsRecipeAuthor]
    
    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            return None

    # def get(self, request, pk, format=None):
    #     recipes = self.get_object(pk)
    #     if recipes is not None:
    #         serializer = RecipeSerializer(recipes)
            
           
    #     return Response({
    #         'message': 'Recipe not found'
    #     }, status=status.HTTP_404_NOT_FOUND)
    def get(self, request, pk, format=None):
        recipe = self.get_object(pk)
        if recipe is not None:
            serializer = RecipeSerializer(recipe, context={'request': request})
            
            

            # Fetch ratings and reviews related to the recipe
            ratings = RecipeRating.objects.filter(recipe=recipe)
            reviews = RecipeReview.objects.filter(recipe=recipe)

            # Calculate average rating for the recipe
            avg_rating = ratings.aggregate(avg_rating=Avg('rating'))['avg_rating'] if ratings else 0.0

            # Add ratings, reviews, and average rating to the serialized data
            serializer.data['ratings'] = RecipeRatingSerializer(ratings, many=True).data
            serializer.data['reviews'] = RecipeReviewSerializer(reviews, many=True).data
            serializer.data['average_rating'] = avg_rating

            return Response({
                'message': 'Recipe retrieved successfully',
                'data': serializer.data,
                'ratings':RecipeRatingSerializer(ratings, many=True).data,
                'reviews': RecipeReviewSerializer(reviews, many=True).data,
                'avg_ratings': avg_rating
            })
        return Response({
            'message': 'Recipe not found'
        }, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        recipe = self.get_object(pk)
        if recipe is not None:
            serializer = RecipeSerializer(recipe, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'message': 'Recipe updated successfully',
                    'data': serializer.data
                })
            return Response({
                'message': 'Recipe update failed',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        return Response({
            'message': 'Recipe not found'
        }, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, format=None):
        recipe = self.get_object(pk)
        if recipe is not None:
            recipe.delete()
            return Response({
                'message': 'Recipe deleted successfully'
            }, status=status.HTTP_204_NO_CONTENT)
        return Response({
            'message': 'Recipe not found'
        }, status=status.HTTP_404_NOT_FOUND)

class RecipeRatingView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        recipe = Recipe.objects.get(pk=pk)
        user = request.user

        rating = request.data.get('rating')

        if rating is not None:
            try:
                rating = int(rating)
                if 1 <= rating <= 5:  # Assuming the rating scale is from 1 to 5
                    # Create or update the rating
                    obj, created = RecipeRating.objects.update_or_create(recipe=recipe, user=user, defaults={'rating': rating})

                    # Recalculate average rating and total ratings for the recipe
                    ratings = RecipeRating.objects.filter(recipe=recipe)
                    total_ratings = len(ratings)
                    average_rating = sum(rating.rating for rating in ratings) / total_ratings if total_ratings > 0 else 0

                    recipe.total_ratings = total_ratings
                    recipe.average_rating = average_rating
                    recipe.save()

                    return Response({'message': 'Rating added successfully'}, status=status.HTTP_200_OK)
            except ValueError:
                pass

        return Response({'message': 'Invalid rating'}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        recipe = Recipe.objects.get(pk=pk)
        ratings = RecipeRating.objects.filter(recipe=recipe)
        serializer = RecipeRatingSerializer(ratings, many=True)
        return Response({'ratings': serializer.data})

    def delete(self, request, pk, rating_id):
        try:
            rating = RecipeRating.objects.get(pk=rating_id, recipe=pk)
            rating.delete()

            # Recalculate average rating and total ratings for the recipe
            ratings = RecipeRating.objects.filter(recipe=pk)
            total_ratings = len(ratings)
            average_rating = sum(rating.rating for rating in ratings) / total_ratings if total_ratings > 0 else 0

            recipe = Recipe.objects.get(pk=pk)
            recipe.total_ratings = total_ratings
            recipe.average_rating = average_rating
            recipe.save()

            return Response({'message': 'Rating deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except RecipeRating.DoesNotExist:
            return Response({'message': 'Rating not found'}, status=status.HTTP_404_NOT_FOUND)

class RecipeReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        recipe = Recipe.objects.get(pk=pk)
        user = request.user

        review_text = request.data.get('review')

        if review_text:
            review = RecipeReview.objects.create(recipe=recipe, user=user, review=review_text)
            return Response({'message': 'Review added successfully'}, status=status.HTTP_201_CREATED)

        return Response({'message': 'Invalid review'}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        recipe = Recipe.objects.get(pk=pk)
        reviews = RecipeReview.objects.filter(recipe=recipe)
        serializer = RecipeReviewSerializer(reviews, many=True)
        return Response({'reviews': serializer.data})

    def put(self, request, pk, review_id):
        try:
            review = RecipeReview.objects.get(pk=review_id, recipe=pk)
            serializer = RecipeReviewSerializer(review, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Review updated successfully', 'data': serializer.data})
            return Response({'message': 'Review update failed', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except RecipeReview.DoesNotExist:
            return Response({'message': 'Review not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, review_id):
        try:
            review = RecipeReview.objects.get(pk=review_id, recipe=pk)
            review.delete()
            return Response({'message': 'Review deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except RecipeReview.DoesNotExist:
            return Response({'message': 'Review not found'}, status=status.HTTP_404_NOT_FOUND)
        
    
class RecipeImageListCreateView(APIView):
    def get(self, request, user_id):
        images = RecipeImages.objects.filter(user_id=user_id)
        serializer = RecipeImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        serializer = RecipeImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user_id=user_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecipeImageRetrieveUpdateDestroyView(APIView):
    def get_object(self, user_id, id):
        try:
            return RecipeImages.objects.get(user_id=user_id, id=id)
        except RecipeImages.DoesNotExist:
            raise Http404

    def get(self, request, user_id, id):
        image = self.get_object(user_id, id)
        serializer = RecipeImageSerializer(image)
        return Response(serializer.data)

    def put(self, request, user_id, id):
        image = self.get_object(user_id, id)
        serializer = RecipeImageSerializer(image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id, id):
        image = self.get_object(user_id, id)
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RecipeImageView(APIView):
    def get(self, request, user_id, recipe_id=None):
        if recipe_id is not None:
            return RecipeImageRetrieveUpdateDestroyView.as_view()(request, user_id, recipe_id)
        else:
            return RecipeImageListCreateView.as_view()(request, user_id)