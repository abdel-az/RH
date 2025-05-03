from rest_framework import serializers
from .models import Jobs


class JobsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Jobs
        fields = ("url","title","description","ville","email")