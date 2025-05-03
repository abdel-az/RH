
from rest_framework import permissions, viewsets
from jobs.serializers import JobsSerializer
from jobs.models import Jobs



class JobsViewSet(viewsets.ModelViewSet):
    queryset = Jobs.objects.all().order_by('title')
    serializer_class = JobsSerializer
    permission_classes = [permissions.IsAuthenticated]
