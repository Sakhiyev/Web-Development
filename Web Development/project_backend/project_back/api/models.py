from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


<<<<<<< HEAD
class Bear(models.Model):
=======
class Recipe(models.Model):
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    ingredients = models.CharField(max_length=1000)
    steps = models.CharField(max_length=1000)
    likes = models.IntegerField()
    front_image = models.CharField(max_length=1000)
    first_image = models.CharField(max_length=1000, default='')
    second_image = models.CharField(max_length=1000, default='')
    third_image = models.CharField(max_length=1000, default='')
<<<<<<< HEAD
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="bears")

    class Meta:
        verbose_name = 'Rear'
        verbose_name_plural = 'Rears'
=======
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="recipes")

    class Meta:
        verbose_name = 'Recipe'
        verbose_name_plural = 'Recipes'
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837
