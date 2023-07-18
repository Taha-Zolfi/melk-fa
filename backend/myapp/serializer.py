from rest_framework import serializers
from .models import user, ad


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = ad
        fields = '__all__'