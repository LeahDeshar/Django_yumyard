from rest_framework import serializers
from .models import Recipe,RecipeRating,RecipeReview



class RecipeRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeRating
        fields = '__all__'

class RecipeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeReview
        fields = '__all__'
        read_only_fields = ['recipe', 'user']
        
class RecipeSerializer(serializers.ModelSerializer):
    ratings = RecipeRatingSerializer(many=True, read_only=True)
    reviews = RecipeReviewSerializer(many=True, read_only=True)
    images = serializers.ImageField(max_length=None, use_url=True, required=False)
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ['user']
        
