from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import Category, Bear
from .serializers import CategorySerializer, BearSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.update(serializer.instance, request.data)
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    elif request.method == 'DELETE':
        category.delete()
        return Response({'deleted': True})



class BearListAPIView(APIView):
    def get(self, request):
        recipies = Bear.objects.all()
        serializer = BearSerializer(recipies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BearSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class BearDetailAPIView(APIView):
    def get_object(self, bear_id):
        try:
            return Bear.objects.get(id=bear_id)
        except Bear.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, bear_id):
        bear = self.get_object(bear_id)
        serializer = BearSerializer(bear)
        return Response(serializer.data)

    def put(self, request, bear_id):
        bear = self.get_object(bear_id)
        serializer = BearSerializer(instance=bear, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'errors': serializer.errors})


    def delete(self, request, bear_id):
        bear = self.get_object(bear_id)
        bear.delete()


        return Response({'deleted': True})



class BearByCategoryAPIView(APIView):
    def get(self, request, category_id):
        bears = Bear.objects.filter(category=category_id)
        serializer = BearSerializer(bears, many=True)
        return Response(serializer.data)


class TopTenBearsAPIView(APIView):
    def get(self, request):
        top_ten = Bear.objects.order_by('likes')[:10]
        serializer = BearSerializer(top_ten, many=True)

        return Response(serializer.data)
