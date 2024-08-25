from django.shortcuts import render # type: ignore

# Create your views here.
def index(request):
    return render(request,'index.html')
def contactus(request):
    return render(request,'contactus.html')
def Services(request):
    return render(request,'Services.html')
def About(request):
    return render(request,'About.html')