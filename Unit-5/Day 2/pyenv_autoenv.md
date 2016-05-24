# Django Preprocess

## pyenv
1. pyenv virtualenv 'version' 'name'
2. pyenv activate 'name'
3. pyenv deactivate 'name'
4. pyenv uninstall 'name'

##autoenv
1. mkdir 'name'
2. cd 'name'
3. vim .env
4. Welcome to 'name'
5. add pyenv activate 'name'

## Install Django
1. `$ pip install Django` on selected project directory
2. `$ pip freeze` to check which packages are installed on the project
#### For a more universal approach
	1. `$ vim python_packages.sh`
	2. type `$ pip install Django` into vim.
	3. run `$ ./python_packages.sh`

#Most Efficient Method
1. `vim requirements.txt`
2. `mkdir requirements`
3. `touch requirements/production.txt`
4. `touch requirements/development.txt`
5. add line `-r requirements/production.txt` to `requirement.txt`

docker, vagrant
ansible, chef, puppet