# Django Preprocess

## pyenv
1. Use `virtualenv` to create a new virtual environment
```
pyenv virtualenv 3.5.1 blog
```

2. Use `activate` to activate the environment
```
pyenv activate blog
```

3. Use `deactivate` to deactivate the environment
```
pyenv deactivate blog
```

4. Use `uninstall` to delete the virtualenv
```
pyenv uninstall blog
```

##autoenv
1. Create a new directory
```
$ mkdir project101
```

2. Go to directory with `$ cd project101`

3. Create a file called .env
```
$ vim .env
```

4. Write a short welcome message`Welcome to project101`

5. Add `pyenv activate blog` at the bottom of the .env file

## .gitignore
1. find the necessary gitignore file on github if available
2. get the 'raw' file url
3. retrieve the content using `wget`:
```
$ wget https://github.com/github/gitignore/blob/master/Python.gitignore
```

4. rename the Python_gitignore file to .gitignore:
```
$ mv Python_gitignore .gitignore
```

#Django Install
- `$ pip freeze` to check which packages are installed on the project

##Most Efficient and Comprehensive Install Method
1. create a directory called `requirements`
```
$ mkdir requirements
```

2. create a file called `production.txt`
```
$ touch requirements/production.txt
```

3. add lines to `requirements/production.txt`
```
django==1.9.6
requests
```

4. create a file called `development.txt`
```
$ touch requirements/development.txt
```

5. add lines to `requirements/development.txt`
```
-r production.txt
ipython
```

6. create `requirements.txt`
```
$ vim requirements.txt
```

7. add line to `requirements.txt`
```
-r requirements/production.txt
```

8. run 
```
$ pip install -r requirements.txt
```
