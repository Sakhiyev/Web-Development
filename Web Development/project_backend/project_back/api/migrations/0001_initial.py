# Generated by Django 3.0.4 on 2020-04-21 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
<<<<<<< HEAD
            name='Bear',
=======
            name='Recipe',
>>>>>>> c0672d92e226b98bfa56946c7ae43d75e2461837
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=1000)),
                ('ingredients', models.CharField(max_length=1000)),
                ('steps', models.CharField(max_length=1000)),
                ('likes', models.IntegerField()),
                ('front_image', models.CharField(max_length=1000)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Category')),
            ],
        ),
    ]
