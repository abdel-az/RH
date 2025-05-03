from django.db import models
from django.contrib.auth.models import User
from jobs.models import Jobs


class Condidate(models.Model):
    firstname = models.CharField(max_length=150)
    familyname = models.CharField(max_length=150)
    Special = models.CharField(max_length=150)
    resume = models.CharField(max_length=150)
    #user = models.ForeignKey(User,on_delete= models.CASCADE,default=1)
    jobs = models.ManyToManyField(Jobs)

    def __str__(self):
        return self.resume 
