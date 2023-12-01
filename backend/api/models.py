from django.db import models

# Create your models here.
class Course(models.Model):
    cid = models.AutoField(primary_key=True)
    ccode = models.CharField(max_length=10)
    cname = models.CharField(max_length=50)
    cdesc = models.TextField()
    

class Tag(models.Model):
    tagid = models.AutoField(primary_key = True)
    tagname = models.CharField(max_length = 30)
    value = models.IntegerField(default = 0)
    
class Student(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 100)
    email = models.EmailField()

class Review(models.Model):
    rid = models.AutoField(primary_key=True)
    course_id = models.ForeignKey('Course', related_name='course', on_delete=models.CASCADE, db_column='course_id')
    username = models.CharField(max_length =50, default = 'Anonymous')
    term = models.CharField(max_length=20)
    year = models.IntegerField()
    professor = models.CharField(max_length = 10, default='unknown')
    grade = models.CharField(max_length=10, default='pass')
    comment = models.TextField()
    difficulty = models.IntegerField(default=0)
    workload = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag, related_name='reviews', blank=True)