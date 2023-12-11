import django_filters
from .models import Recipe

class RecipeFilter(django_filters.FilterSet):
    class Meta:
        model = Recipe
        fields = {
            'title': ['icontains'],
            'ingredients': ['icontains'],
            'cuisine': ['exact'],
            'dietary_restrictions': ['exact'],
            'cooking_time': ['lte', 'gte'],
        }