# Code 1.
def stars(count):
	for i in range(count):
		print('*' * (i + 1))

stars(int(input('How many?')))


# Code 2a.
def stars(count):
	for i in range(count):
		print((' ' * (i + 1)) + ('*' * (count - i)))

stars(int(input('How many?')))


# Code 2b.
def stars(count):
	for i in range(count):
		print(('*' * (i + 1)).rjust(10))

stars(int(input('How many?')))


# Code 3.
def stars(count):
	for i in range(count):
		print('*' * (count - i))

stars(int(input('How many?')))


# Code 4a.
def stars(count):
	for i in range(count):
		print((' ' * i) + ('*' * (count - 1)))

stars(int(input('How many?')))


# Code 4b.
def stars(count):
	for i in range(count):
		print(('*' * (count - i)).rjust(10))

stars(int(input('How many?')))
