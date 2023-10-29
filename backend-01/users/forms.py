from django import forms
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from wagtail.users.forms import UserEditForm, UserCreationForm


class EnumChoiceField(forms.TypedChoiceField):
    def __init__(self, enum, *args, **kwargs):
        kwargs["choices"] = [(choice.name, choice.value) for choice in enum]
        super().__init__(*args, **kwargs)


class CustomUserEditForm(UserEditForm):
    class Meta:
        model = get_user_model()
        fields = [
            "username",
            "email",
            "first_name",
            "last_name",
            "phone_number",
            "is_active",
        ]


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = [
            "username",
            "email",
            "first_name",
            "last_name",
            "phone_number",
            "is_active",
        ]
