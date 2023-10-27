from rest_framework import serializers
from .models import Student, Course, Tag

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('cid', 'ccode', 'cname', 'cdesc')
        
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'email')
        
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('tagid', 'tagname', 'value')