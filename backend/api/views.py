from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import ReviewSerializer, StudentSerializer, CourseSerializer
from .models import Review, Student, Course

# Create your views here.

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    def get_queryset(self):
        qs = Course.objects.all()
        ccode = self.request.query_params.get('ccode')
        if (ccode is not None):
            qs = qs.filter(ccode__icontains = ccode)
        return qs
        

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
    
class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    def get_queryset(self):
        qs = Review.objects.all()