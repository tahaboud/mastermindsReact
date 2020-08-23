# Generated by Django 3.0.8 on 2020-08-18 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_auto_20200818_1257'),
    ]

    operations = [
        migrations.RenameField(
            model_name='srcmodel',
            old_name='fieldAndLevel',
            new_name='level',
        ),
        migrations.AddField(
            model_name='srcmodel',
            name='field',
            field=models.CharField(choices=[('elm', 'electromechanical'), ('hsi', 'hygiene'), ('gi', 'genie industriel')], default='elm', max_length=3),
            preserve_default=False,
        ),
    ]
