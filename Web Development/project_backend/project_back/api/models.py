from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Recipe(models.Model):
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    ingredients = models.CharField(max_length=1000)
    steps = models.CharField(max_length=1000)
    likes = models.IntegerField()
    front_image = models.CharField(max_length=1000)
    first_image = models.CharField(max_length=1000, default='')
    second_image = models.CharField(max_length=1000, default='')
    third_image = models.CharField(max_length=1000, default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="recipes")

    class Meta:
        verbose_name = 'Recipe'
        verbose_name_plural = 'Recipes'
