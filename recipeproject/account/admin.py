from django.contrib import admin
from account.models import User 
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.



class UserModelAdmin(BaseUserAdmin):
    list_display = ["id","email", "full_name", "tc","is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        ("User Credentials", {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["full_name","tc"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
   
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "full_name", "tc", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email","id"]
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserModelAdmin)
