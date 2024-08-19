# from django.contrib import admin
from django.contrib import admin # type: ignore
from django.urls import path,include

from . import views # type: ignore
# from Ai.pagemgr import views
# from . import views bcz it import all urls.py form all apps imagine same name of function in views so it voilate commands
urlpatterns = [
    path('',views.index , name='index')
    
]