# users/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
from .models import User


class UserAdmin(BaseUserAdmin):
    ordering = ["id"]
    list_display = [
        "email",
        "first_name",
        "last_name",
        "phone_number",
    ]
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            _("Personal Info"),
            {"fields": ("first_name", "last_name", "phone_number", "credentials")},
        ),
        (_("Permissions"), {"fields": ("is_active", "is_staff", "is_superuser")}),
        (_("Important dates"), {"fields": ("last_login",)}),
        (_("Join dates"), {"fields": ("date_joined",)}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )


admin.site.register(User, UserAdmin)
