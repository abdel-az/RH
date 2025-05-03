from rest_framework import serializers
from .models import Condidate

class CondidateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Condidate
        fields = ("url","firstname","familyname","Special","resume","jobs")