from django.urls import path
from .views import UserRegistrationView,UserLoginView,UserProfileView, ProfileCreateView, ProfileDetailView, ProfileUpdateView, ProfileDeleteView,UserChangePasswordView,SendPasswordResetEmailView,UserPasswordResetView


urlpatterns = [
    
    path('register/', UserRegistrationView.as_view(),name="register"),
    
    path('login/', UserLoginView.as_view(),name="login"),
    
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
      
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    
    path('profile/' ,UserProfileView.as_view(),name="profile"),
    
    path('profiles/create/', ProfileCreateView.as_view(), name='profile-create'),
    
    path('profiles/<int:pk>/', ProfileDetailView.as_view(), name='profile-detail'),
    
    path('profiles/<int:pk>/update/', ProfileUpdateView.as_view(), name='profile-update'),
    
    path('profiles/<int:pk>/delete/', ProfileDeleteView.as_view(), name='profile-delete'),
    
    # path('logout/', logout,name="logout")
    
    
]
