from myapp import views
from django.contrib import admin
from django.urls import path ,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/login/', views.user_login),
    path('users/register/', views.user_register),
    path('users/', views.user_list),
    path('ads/', views.ad_list),
]