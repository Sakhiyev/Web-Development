from rest_framework import serializers


from .models import Category, Bear



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


class BearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bear

        fields = ['id', 'title', 'description', 'price', 'likes', 'front_image', 'first_image',
                  'second_image', 'third_image', 'category']
