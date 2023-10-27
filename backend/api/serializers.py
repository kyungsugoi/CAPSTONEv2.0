from rest_framework import serializers
from .models import Review, Student, Course

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('rid', 'course_id', 'term', 'year', 'grade', 'comment')
    
    def to_representation(self, instance):
        self.fields['course_id'] = CourseRepresentationSerializer(read_only=True)
        return super(ReviewSerializer, self).to_representation(instance)

class CourseRepresentationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Course
        fields = ('ccode', 'cname')

class CourseSerializer(serializers.ModelSerializer):
    course = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = ('cid', 'ccode', 'cname', 'cdesc', 'course')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'email')