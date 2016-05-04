#Diary

##Week 1

###Day 1
We learnt that computers are fundementally calculators and that mathmeticians discovered that computers think in 0's and 1's.

Computer Configuration
* Hardware
	* Input, Output, Memory, CPU, Controller

* Software
	* System Software
	* Application Software

Computer Architecture
* Harvard Architecture
	* Fast speed
	* Instruction Memory and Data Memory are separate
	* Expensive and difficult to design and operate

* Von Neumann Architecture
	* Instruction Memory and Data Memory are not separated
	* Computer may not always be able to differentiate between Instruction Meory and Data Memory
	* Slower speed
	* Cheaper and easier to design

Binary Numbers
* Computers understand 0's and 1'
* Humans use a base-10 numerical system
* Computers use a base-2 numerical system (binary)

###Day 2
We learnt how computers compute and tried a few calculations ourselves

* Operations
	* AND
	both numbers need to be 1 in order for the computer to return 1

	* OR
	either number can be 1 in order for the computer to return 1

	* NOT
	is the inverse of the number

* Bit Logic Operation
	* &, | or ! operations on individual bits

* Boolean Logic Operation
	* &&, || or !! operations on true of false statements

* Operating System
	* Linux, Mac OS, Windows, iOS etc.
	* Required to manage system hardware
	* Creates a user friendly environment
	* Scheduler

* Process
	* We refer to a process when a program is being operated and on the RAM
	* There are a range of scheduling methods:
		* First Come First Served
			* is prioritised as the name states in order of arrival
		* Shortest Job First
			* is prioritised by the size of each job
		* Round Robin Scheduling
			* each process is given equal amounts of time in a circular order
		* Priority Based Scheduling
			* each process is given a priority
		* Multi Queue Schedule
			* each process is assigned a particular level

* File Management System
	* Unix
		* Unix File System
	* Linux
		* ZFS, XFS
	* Mac OS
		* HSF, HSF+
	* Windows
		* FAT, NTFS

###Day 3
We learnt about Data Structuring, Algorithms and Databases.

* Algorithm
	* A set of instructions of methods to solve a problem
	
	* Sorting Algorithm
		* Select Sort
			* finds the minimum value and swaps it with the value in the first position
		* Bubble Sort
			* compares two consecutive data and moves the bigger to the right
		* Insertion Sort
			* inserts data in place between two other piece of data
		* Merge Sort
			* divides the data into sections. Sort and merge until all data is sorted
		* Quick Sort
			* divide and conquer similar to Merge Sort but a lot faster
	* Time Complexity
		* quantifies the amount of time taken to run
		* big O notation

* Data Structure
	* A structure to manage data efficiently
		* Primitive? Structure
		* Sequential Structure
		* Non-Sequential Structure
	
	* Array
		* Quick to access as all data blocks are in line
		* Must set array length
		* Array length is immutable
	* List
		* Slower to access as all data is not in line
		* Linked via instructions
		* length and position is mutable
	* Stack
		* Data is push in and popped in reverse order
	* Queue
		* Data is pushed and popped in order of entry
	* Dequeue
		* Data is pushed and popped at the front and back
	* Tree
		* One root node
	* Graph
		* No root node

* Database
	* is an organised collection of data
	* models aspects of reality to support processes requiring information

* Database VS Data Structure
	* Database collects the data
	* Data Structure refers to the use of the data in a certain format

* Database Management System
	* MySQL, PostgreSQL, SQLite etc

