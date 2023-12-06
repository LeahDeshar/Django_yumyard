# views.py
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializer import UserSerializer,UserLoginSerializer,ProfileSerializer,UserChangePasswordSerializer,SendPasswordResetEmailSerializer,UserPasswordResetSerializer

from django.contrib.auth import authenticate
from .renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Profile
# from .serializer import UserSerializer
# # , ProfileSerializer, RecipeSerializer, SavedRecipeSerializer



def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request,format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save() 
            token = get_tokens_for_user(user)
            
            return Response({'msg': 'Registration Success','status': status.HTTP_201_CREATED, 'token': token})   
        print(serializer.errors)     
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request,format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            
            user = authenticate(email=email,password=password)
            
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token': token,'msg': 'Login Success',},status= status.HTTP_200_OK)   
            else: 
                return Response({'msg': 'Login Failed','error':{'non_field_errors': ['Email or Password is not valid']} },status= status.HTTP_404_NOT_FOUND)  
                
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# change the password of the users
class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)

class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)


# view all the profiles
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# view the profile of specific user
class ProfileDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            profile = Profile.objects.get(pk=pk, user=request.user)
            serializer = ProfileSerializer(profile)
            return Response(serializer.data)
        except Profile.DoesNotExist:
            return Response({"detail": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)    
   
# create profile         
class ProfileCreateView(APIView):
      permission_classes = [IsAuthenticated]
      def post(self, request):
            # Check if a profile already exists for the user
            existing_profile = Profile.objects.filter(user=request.user).first()
            if existing_profile:
                return Response({"message": "Profile already exists for this user"}, status=status.HTTP_400_BAD_REQUEST)

            # Continue with profile creation if no existing profile is found
            serializer = ProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# update the profile of a spe
class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk, *args, **kwargs):
        try:
            profile = Profile.objects.get(pk=pk, user=request.user)
        except Profile.DoesNotExist:
            return Response({"detail": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

        # Ensure that the user field is a dictionary with 'id' key
        request.data['user'] = {'id': request.user.id}

        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# delete the profile of an user
class ProfileDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            profile = Profile.objects.get(pk=pk, user=request.user)
        except Profile.DoesNotExist:
            return Response({"detail": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

        profile.delete()
        return Response({"detail": "Profile deleted"}, status=status.HTTP_204_NO_CONTENT)




























# class RecipeCreateView(generics.CreateAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class SavedRecipeListView(generics.ListAPIView):
#     queryset = SavedRecipe.objects.all()
#     serializer_class = SavedRecipeSerializer
#     permission_classes = [permissions.IsAuthenticated]


