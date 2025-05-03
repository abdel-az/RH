from .serializers import CondidateSerializer
from .models import Condidate
from rest_framework import permissions, viewsets

class CondidateViewSet(viewsets.ModelViewSet):
    queryset = Condidate.objects.all().order_by('firstname')
    serializer_class = CondidateSerializer
    permission_classes = [permissions.IsAuthenticated]