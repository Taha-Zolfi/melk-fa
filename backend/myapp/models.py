from django.db import models

# Create your models here.
class user(models.Model):
    username = models.CharField(max_length=42)
    password = models.CharField(max_length=32)


class ad(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.CharField(max_length=1024)
    # images = models.ImageField(upload_to='imagesdata/')