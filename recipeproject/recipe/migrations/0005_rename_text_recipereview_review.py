# Generated by Django 4.2.7 on 2023-12-13 05:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_recipe_average_rating_recipe_total_ratings_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipereview',
            old_name='text',
            new_name='review',
        ),
    ]
