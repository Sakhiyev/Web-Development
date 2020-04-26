from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from .views import *

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('categories/', category_list, name='all bears'),
    path('categories/<int:category_id>/', category_detail, name='get one bear'),
    path('categories/<int:category_id>/bears/', BearByCategoryAPIView.as_view(), name='bears by categories'),
    path('bears/', BearListAPIView.as_view(), name='all bears'),
    path('bears/<int:bear_id>/', BearDetailAPIView.as_view(), name='one bear'),
    path('bears/top_ten/', TopTenBearsAPIView.as_view(), name='top ten')

]
