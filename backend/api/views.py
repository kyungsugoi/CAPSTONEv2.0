from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import ReviewSerializer, StudentSerializer, CourseSerializer, TagSerializer
from .models import Review, Student, Course, Tag
from django.db.models import Count, Avg, Func

# Create your views here.

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    def get_queryset(self):
        qs = Course.objects.all()\
            .annotate(reviews_count = Count('course'))\
            .annotate(ave_difficulty = Round(Avg('course__difficulty')))\
            .annotate(ave_workload = Round(Avg('course__workload')))
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

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class Round(Func):
    function = 'ROUND'
    template = '%(function)s(%(expressions)s, 1)'

def list(req):
    context = {
        "courses": Course.objects.all()
    }
    return render(req,'', context)