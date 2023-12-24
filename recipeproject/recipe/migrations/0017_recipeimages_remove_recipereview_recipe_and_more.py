# Generated by Django 4.2.7 on 2023-12-18 09:16

import cloudinary.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipe', '0016_remove_recipe_images_delete_recipeimages'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeImages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('images', cloudinary.models.CloudinaryField(max_length=255, verbose_name='images')),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.recipe')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='recipereview',
            name='recipe',
        ),
        migrations.RemoveField(
            model_name='recipereview',
            name='user',
        ),
        migrations.DeleteModel(
            name='RecipeRating',
        ),
        migrations.DeleteModel(
            name='RecipeReview',
        ),
    ]
