from wagtail.admin.views.account import BaseSettingsPanel
from wagtail import hooks
from .forms import CustomUserEditForm


@hooks.register("register_account_settings_panel")
class CustomSettingsPanel(BaseSettingsPanel):
    name = "custom"
    title = "My custom settings"
    order = 500
    form_class = CustomUserEditForm
    template_name = "core/admin/edit.html"  # Specify the template here
