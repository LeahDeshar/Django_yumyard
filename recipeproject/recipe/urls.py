# urls.py
from django.urls import path
from .views import RecipeListCreateView, RecipeRetrieveUpdateDestroyView,RecipeRatingView,RecipeReviewView
urlpatterns = [
    path('recipes/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view(), name='recipe-retrieve-update-destroy'),
    
    path('recipes/<int:pk>/rate/', RecipeRatingView.as_view(), name='recipe-rate'),
    path('recipes/<int:pk>/rate/<int:rating_id>/', RecipeRatingView.as_view(), name='recipe-rate'),
    
    path('recipes/<int:pk>/reviews/', RecipeReviewView.as_view(), name='recipe-reviews'),
    path('recipes/<int:pk>/reviews/<int:review_id>/', RecipeReviewView.as_view(), name='recipe-review-detail'),
    
    
    
]
