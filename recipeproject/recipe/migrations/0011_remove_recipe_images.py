# Generated by Django 4.2.7 on 2023-12-17 15:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0010_remove_recipeimages_recipe_remove_recipeimages_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='images',
        ),
    ]
