# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Recipe
from .serializer import RecipeSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions


# class RecipeListCreateView(APIView):
#     permission_classes = [IsAuthenticated]
#     def get(self, request, format=None):
#         recipes = Recipe.objects.all()
#         serializer = RecipeSerializer(recipes, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = RecipeSerializer(data=request.data)
#         if serializer.is_valid():
#             # Set the author (user) before saving
#             serializer.save(user=self.request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecipeListCreateView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response({
            'message': 'Recipes retrieved successfully',
            'data': serializer.data
        })

    def post(self, request, format=None):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response({
                'message': 'Recipe created successfully',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Recipe creation failed',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
        
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

    def get(self, request, pk, format=None):
        recipe = self.get_object(pk)
        if recipe is not None:
            serializer = RecipeSerializer(recipe)
            return Response({
                'message': 'Recipe retrieved successfully',
                'data': serializer.data
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

