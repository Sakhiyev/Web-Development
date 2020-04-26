from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from .views import *

urlpatterns = [
    path('login/', obtain_jwt_token),
<<<<<<< HEAD
    path('categories/', category_list, name='all bears'),
    path('categories/<int:category_id>/', category_detail, name='get one bear'),
    path('categories/<int:category_id>/bears/', BearByCategoryAPIView.as_view(), name='bears by categories'),
    path('bears/', BearListAPIView.as_view(), name='all bears'),
    path('bears/<int:bear_id>/', BearDetailAPIView.as_view(), name='one bear'),
    path('bears/top_ten/', TopTenBearsAPIView.as_view(), name='top ten')
=======
    path('categories/', category_list, name='all recipes'),
    path('categories/<int:category_id>/', category_detail, name='get one recipe'),
    path('categories/<int:category_id>/recipes/', RecipeByCategoryAPIView.as_view(), name='recipes by categories'),
    path('recipes/', RecipeListAPIView.as_view(), name='all recipes'),
    path('recipes/<int:recipe_id>/', RecipeDetailAPIView.as_view(), name='one recipe'),
    path('recipes/top_ten/', TopTenRecipesAPIView.as_view(), name='top ten')
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837
]
