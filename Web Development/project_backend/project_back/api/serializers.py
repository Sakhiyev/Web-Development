from rest_framework import serializers

<<<<<<< HEAD
from .models import Category, Bear
=======
from .models import Category, Recipe
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


<<<<<<< HEAD
class BearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bear
=======
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837
        fields = ['id', 'title', 'description', 'ingredients', 'steps', 'likes', 'front_image', 'first_image',
                  'second_image', 'third_image', 'category']
