from django.urls import path

from base.views import users_views as  views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name="user-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),

    path('', views.getUsers, name="users"),
    path('register/', views.registerUser, name='register-user'),
    path('delete/<str:pk>', views.deleteUser, name='delete-user')

]
