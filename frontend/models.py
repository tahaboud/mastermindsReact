from django.db import models


class SrcModel(models.Model):
    licence1 = "l1"
    licence2 = "l2"
    licence3 = "l3"
    master1 = "m1"
    master2 = "m2"
    doctorat = "dc"
    level_in_institute = [
        (licence1, "licence1"),
        (licence2, "licence2"),
        (licence3, "licence3"),
        (master1, "master1"),
        (master2, "master2"),
        (doctorat, "doctorat"),
    ]
    elm = "elm"
    hsi = "hsi"
    gi = "gi"
    field_in_institute = [
        (elm, "electromechanical"),
        (hsi, "hygiene"),
        (gi, "genie industriel")
    ]
    url = models.URLField(unique=True)
    level = models.CharField(max_length=2, choices=level_in_institute)
    field = models.CharField(max_length=3, choices=field_in_institute)
    semester = models.CharField(max_length=2, choices=[
                                ("s1", "semester1"), ("s2", "semester2")])

    def __str__(self):
        return self.level + " " + self.field + " " + self.semester
