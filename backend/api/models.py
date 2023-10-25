from django.db import models

# Create your models here.
class Course(models.Model):
    cid = models.AutoField(primary_key=True)
    ccode = models.CharField(max_length=10)
    cname = models.CharField(max_length=50)
    cdesc = models.CharField(max_length=100)
    
class Student(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 100)
    email = models.EmailField()

class Review(models.Model):
    rid = models.AutoField(primary_key=True)
    course_id = models.ForeignKey('Course', related_name='course', on_delete=models.CASCADE, db_column='course_id')
    term = models.CharField(max_length=20)
    year = models.IntegerField()
    comment = models.TextField()
