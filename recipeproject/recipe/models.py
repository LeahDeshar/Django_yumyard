from django.db import models
# Create your models here.
from account.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)

class Tag(models.Model):
    name = models.CharField(max_length=255)

  
    
class Recipe(models.Model):
    DIFFICULTY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default='Beginner')
    
    prep_time = models.PositiveIntegerField(help_text='Preparation time in minutes')
    
    cook_time = models.PositiveIntegerField(help_text='Cooking time in minutes')
    
    total_time = models.PositiveIntegerField(help_text='Total time in minutes')
    
    cuisine = models.CharField(max_length=255, default='')
    
    
    dietary_restrictions = models.JSONField(blank=True, null=True)
    
    servings = models.PositiveIntegerField()
    calories = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    average_rating = models.FloatField(default=0)  # To store the average rating
    total_ratings = models.IntegerField(default=0)
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.title



class RecipeRating(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()

class RecipeReview(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review  = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) 