from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User
from .forms import RegistrationForm, CustomUserChangeForm


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_form = RegistrationForm
    form = CustomUserChangeForm
