from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import User


class RegistrationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('username', 'email')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = UserChangeForm.Meta.fields
