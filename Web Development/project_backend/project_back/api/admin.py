from django.contrib import admin

# Register your models here.

from .models import Category, Bear

# admin.site.register(Category)
# admin.site.register(Bear)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')
