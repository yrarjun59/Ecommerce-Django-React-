from django.urls import path
from base.views import orders_views as views


urlpatterns = [
    path('myorders/', views.getMyOrders, name='my-orders'),
    path('add/', views.addOrderItems, name='orders-add'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay', views.updateOrderToPaid, name='pay'),
]