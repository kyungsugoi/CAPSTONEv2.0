# Generated by Django 4.2.5 on 2023-11-10 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_tag_review_professor'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='difficulty',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='review',
            name='workload',
            field=models.IntegerField(default=0),
        ),
    ]
