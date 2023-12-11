# urls.py
from django.urls import path
from .views import RecipeListCreateView, RecipeRetrieveUpdateDestroyView

urlpatterns = [
    path('recipes/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    
    path('recipes/<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view(), name='recipe-retrieve-update-destroy'),
]
