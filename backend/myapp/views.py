from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import AdSerializer, UserSerializer
from .models import user, ad


@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    try :
        users = user.objects.get(username=username)
    except user.DoesNotExist:
        return Response({'message' : 'ne'})
    if users.password == password:
        return Response({'message': 'good'})
    else:
        return Response({'message': 'error'})



@api_view(['POST'])
def user_register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        if serializer.Meta.model.objects.filter(username=username).exists():
            return Response({'message': 'uae'})
        else:
            user = serializer.save()
            return Response({'message': 'ucs'})



@api_view(['GET'])
def user_list(request):
    users = user.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def ad_list(request):
    if request.method == 'GET':
        ads = ad.objects.all()
        serializer = AdSerializer(ads, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'m' : 'g'})
        else :
            return Response({'m' : 'b'})    