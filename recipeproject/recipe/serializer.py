from rest_framework import serializers
from .models import Recipe,RecipeRating,RecipeReview,RecipeImages



class RecipeRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeRating
        fields = '__all__'

class RecipeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeReview
        fields = '__all__'
        read_only_fields = ['recipe', 'user']


class RecipeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model= RecipeImages   
        fields = '__all__'
        read_only_fields = ['recipe']  
        
class RecipeSerializer(serializers.ModelSerializer):
    ratings = RecipeRatingSerializer(many=True, read_only=True)
    reviews = RecipeReviewSerializer(many=True, read_only=True)
    
    images = RecipeImageSerializer(many=True)
    
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ['user']
        
