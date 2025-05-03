from django.conf import settings
from django.db import models

class Jobs(models.Model):
    
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200,unique=True,default=1)
    description = models.CharField(max_length=200)
    ville = models.CharField(max_length=200,)
    email = models.EmailField(max_length=200)
    #users = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title





