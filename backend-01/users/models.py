import uuid

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    class Credentials(models.TextChoices):
        CLIENT = "Client", _("Client")
        EMPLOYEE = "Employee", _("Employee")
        SUPERVISOR = "Supervisor", _("Supervisor")
        ADMIN = "Admin", _("Admin")
        SUPERUSER = "Superuser", _("Superuser")

    pkid = models.BigAutoField(primary_key=True, editable=False)

    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    username = models.CharField(
        verbose_name=_("username"), db_index=True, max_length=255, unique=True
    )

    credentials = models.CharField(
        verbose_name=_("credentials"),
        choices=Credentials.choices,
        default=Credentials.CLIENT,
        max_length=20,
    )
    first_name = models.CharField(verbose_name=_("first_name"), max_length=50)
    last_name = models.CharField(verbose_name=_("last_name"), max_length=50)
    email = models.EmailField(
        verbose_name=_("email address"), db_index=True, unique=True
    )
    phone_number = models.CharField(
        verbose_name=_("phone_number"), db_index=True, max_length=10, unique=True
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["first_name", "last_name", "email", "phone_number"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return self.username

    # @property
    # def get_full_name(self):
    #     return f"{self.first_name.title()} {self.last_name.title()}"

    # def user_display_name(self):
    #     return f"{self.first_name.title()} {self.last_name.title()}"

    def get_short_name(self):
        return self.first_name
