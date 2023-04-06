from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import ProductSerializers

from .products import products

@api_view(['VIEW', 'GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/product/create/',
        
        '/api/product/upload/',
        
        '/api/product/<id>/reviews/',
        
        '/api/product/<top>/',
        '/api/product/<id>/',
        
        '/api/product/delete/<id>/',
        '/api/product/update/<id>/',
        
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializers(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializers(product, many=False)
    return Response(serializer.data)