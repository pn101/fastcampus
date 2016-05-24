#django project

##Create a project
1. `django-admin startproject blog101` - this will create a project called `blog101`.
2. `git push!`

##Run a server
1. `python blog101/manage.py runserver`
2. check server at `localhost:8000`

##Create a page on the server
1. find your way to `url.py`
2. add to urlpatterns[]:
```
url(r'^$', home)
```

3. import some modules into `url.py`
```
from django.http.response import HttpResponse
```

4. create a MVC(MTV) Controller function
```python
def home(request):
	return HttpResponse('Hello World')
```

5. check `localhost:8000`. You should see `Hello World`

##Add another route address (/rooms/id)
1. find your way to `urls.py`
2. create a controller function:
```python
def room(request, room_id):
	return HttpResponse('This is a page for room: ' + room_id)
```

3. add to the urlpattern using Regular Expression:
```
url(r'^rooms/(?P<room_id>\d+)/$', room)
```

4. check `localhost:8000`. You should see the changes.

## Definition
- Project = The bigger picture. The project as a whole.
- Application (app) = the smaller source code that makes up a project

- Project 'Facebook':
	- Application 'users'
    - Application 'posts' 		->++ linked with 'users'++
    - Application 'messages' 	-> ++linked with 'users'++
    - Application 'page' 		-> ++linked with 'users'++
    - Application 'groups' 		-> ++linked with 'users'++

##MVC
- M_Model: DB (Data) & Business Logic
- V_View: HTML, CSS... => Template/Client
- C_Controller: View, Model...

	###in Django, MVC is called Model, Template, View 
	