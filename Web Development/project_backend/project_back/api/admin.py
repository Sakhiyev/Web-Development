from django.contrib import admin

# Register your models here.
<<<<<<< HEAD
from .models import Category, Bear

# admin.site.register(Category)
# admin.site.register(Bear)
=======
from .models import Category, Recipe

# admin.site.register(Category)
# admin.site.register(Recipe)
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')
