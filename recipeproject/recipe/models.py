from django.db import models

# Create your models here.
from account.models import User

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
    servings = models.PositiveIntegerField()
    calories = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
