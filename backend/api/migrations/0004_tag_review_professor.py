# Generated by Django 4.2.5 on 2023-11-09 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_review_grade'),
    ]

    operations = [
        
        migrations.AddField(
            model_name='review',
            name='professor',
            field=models.CharField(default='pass', max_length=10),
        ),
    ]
