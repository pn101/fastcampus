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



###Day 4

* 네트워크
	* Types of Computer Network
		* LAN
			* Local Area Network
			* 근거리 통신망

		* MAN
			* Metropolitan Area Network
			* 도시권 통신망

		* WAN
			* Wide Area Network
			* 광역 통신망

	* Network Architecture
		* Client
			* Data Request computer

		* Server
			* Data provider computer

		* Peer to Peer
			* Ability to be a Client and Server at the same time

	* Network Topologies
		* Star
		* Ring
		* Bus

	* Network Communications Technology
		* Intranet
		* Extranet
		* Internet
			* 컴퓨터로 연결하여 TCP/IP 프로토콜을 이용해 정보를 주고받는 컴퓨터 네트워크
			* Inter Network
			*네트워크의 네트위크

* Terminology

	* TCP/IP
		* TCP - Transmission Control Protocol

		* IP - Internet Protocol

		* 데이터를 전송을 하기 위한 프로토콜이다

	* World Wide Web
		* 문서(웹페이지)들이 있는 정보의 저장소
		* 분산과 연결
		* 여러 Server들을 연결 시켜주는 system

	* URL
		* Uniform Resource Locator
		* [Protocol]://[Host]:[Port]/[Path]
		* eg.
			* http://daum.net:80/map
			* ftp://id:pw@192.168.1.10:777/mydir
			* file://localhost/movie/baseball.avi

	* Protocol
		* 프로토콜
		* 통신규약
		* 장비 사이에서 메시지를 주고 받는 양식과 규칙의 체계
		* 즉, 통신(네트워킹)할 때 정해진 메세지 규칙
		* http, https, sftp, telnet, ssh, ssl, smtp...

	* HTTP
		* Hyper Text Transfer Protocol
		* 링크를 통해 여러 문서를 볼 수 있는 형식

		* GET
			* Request Data (visible)

		* PUT
			* Uploads a representation of the specified URI

		* POST
			* Submit Data to be processed to a specified resource (not visible)

		* DELETE
			* Deletes the specified resource

	* FTP
		* File Transfer Protocol
		* 파일을 전송할 때 쓰는 통신규약

	* TELNET
		* TErminal NETwork
		* 원격 로그인을 위한 프로토콜

	* SSH
		* Secure Shell
		* 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 * 복사할 수 있도록 해 주는 응용 프로그램 또는 그 프로토콜
		* Telnet의 대용 목적으로 설계

	* SSL
		* Secure Socket Layer
		* 웹서버와 브라우저 사이의 보안을 위한 프로토콜

	* SMTP
		* Simple Mail Transfer Protocol
		* 전자메일 발송 프로토콜

	* Hostname
		* 네트워크에 연결된 장치에 부여되는 고유한 이름
		* 예) IP주소, 도메인 주소, MAC주소 등등

	* IP Address
		* Internet Protocol Address
		* 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 번호
		* 컴퓨터가 인식하는 번호/주소

	* Domain Address
		* 네트워크상에서 컴퓨터를 식별하는 호스트이름
		* 사람이 편하자고 만들어진 글로된 주소

	* DNS
		* Domain Name System
		* 호스트의 도메인 이름을 호스트의 네트워크 주소로 부꾸거나 그 반대의 변환을 수행
		* Refresh address data in intervals, or when cannot find saved addresses

	* MAC Address
		* Media Access Control Access
		* 네트워크 어댑터에 부착된 식별자

	* Port
		* 가상의 논리적 통신 연결단
		* 번호로 구분
		* 프로토콜마다 이미 정해진 port가 있다
		* http - port 80

	* Port Forwarding
		* eg. If port 80 is blocked, automatically access via a different designated port



* OSI 7계층 모형
* Open Systems Interconnection Reference Model

	* 응용 계층 Application Layer
	* 표현 계층 Presentation Layer
	* 세션 계층 Session Layer
	* 전송 계층 Transport Layer
	* 네트워크 계층 Network Layer
	* 데이처 길크 계층 Data Link Layer
	* 물리 계층 Physical Layer


* IP Address Specification
	* Personal Computer on a network will have IP address 192.168.0.*
	* When requesting data, you go through the network IP address.


* 암호화
	* 대칭키
		* 암호화와 복호화에 같은 암호키를 쓰는 알고리즘
		* DES, AES, SEED등

		* 단점 - 키를 강탈당하면 끝장

	* 공개키(비대칭키)
		* 사전에 비밀 키를 나눠가지지 않은 사용자들이 안전하게 통신할 수 있도록 하는 암호화 알고리즘
		* RSA등

	* 해시
		* 임의의 데이터(함호 등)를 고정된 길이의 데이터로 매핑하여 원래의 입력값과의 관계를 찾기 어렵게 만든 것
		* SHA, MD5 등


과제
	HTTP와 HTTPS는 무엇이며 그 차이는?

	국내에 공인인증서가 생긴 배경과 그 위험성은?

	위내용을 조사하며 느낀 점



###Day 5

* 소프트웨어 공학

	* 유용한 사물이나 환경을 구축하는 것을 목적으로 하는 학문
	* 소프트웨어를 잘 만들기위한
	* 소프트웨어의 개발, 운용, 유지보수 및 폐기에 대한 체계적인 접근방법


* Terminology

	* 요구공학
	* 아키텍처
	* 개발 방법록
	* 테스팅
	* 프로세스
	* 형상관리
	* 프로젝트 관리
	* 유지보수

* 소프트웨어 개발 생명주기 모델 (Software Development Life Cycle Model)
	* 스프트웨어를 어떻게 개발할 것인가에 대한 전체적인 흐름
	* 주먹구구식, 폭포수, 프로토타이핑, 나선형

	* 폭포수 모델 (Waterfall Model)
		* Requirements > Design > Implementation > Verification > Maintenance

		* 단점
			* 전 단게가 끝날떼까지 기다려야 함


	* 프로토타이핑 모델 (Protyping Model)
		* Verification loops round to requirements

		* 단점
		* 의사소통 비용이 많다
		* 결과물의 quality가 떨어 질 수 있다
		* 요청이 많아 진다

	* 나선형 모델 (Spiral Model)

* 소프트웨어 개발 방법론
	* 소프트웨어를 생산하는데 필요한 반복적인 과정들을 정리한 것
	* 구조적 프로그래밍, 객체지향, 고속 개발 방법론, 익스트림 프로그래밍(Agile), 스크럼(Agile), UP...

	* 애자일 개발 프로세스(Agile)
		* 다른 고전적인 방법론과 구별되는 가장 큰 차이점은 Less document-orientated, 즉 문서를 통한 개발 벙법이 아니라, code-oriented, 실질적인 코딩을 통한 벙법론

		* 앞을 예측하며 개발을 하지 않고, 일정한 주기를 가지고 끊임없이 프로토 타입을 만들어내며 그때 그때 필요한 요구를 더하고 수정하요 하나의 커다란 소프트웨어를 개발해 나가는 adaptive style

		* 특정 개발 방벙론을 가리키는 말은 아니고 애자일(Agile=기민한, 좋은거을 빠르고 낭비없게 만드는 것) 개발 을 가능하게 해 주는 다양한 방법론 전체를 일컫는 말

	
* UML(Unified Modelling Language)
	* 통합 모델링 언어
	* 표준화된 범용 모델링 언어
	* 객체 지향 소프트웨어 집약 시스템을 개발할 때 산출물을 명세화, 시각화, 문서화할 때 사용
	* S/W 개발 방법론 + 모델 + 클래스 다이어그램

* TDD (Test-Driven Development)
	* 테스트 주도 개발
	* 매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스

		1. 결함을 점검하는 자동화된 테스트 케이스를 작성 
		2. 케이스를 통과하기 위한 최소한의 양의 코드를 생성
		3. 새 코드를 표준에 맞도록 리팩토링

* PDD (Plan-Driven Development)
	* 계획 기반 개발
	* 계획을 세우고 그 계획을 실천하는데에 많은 시간과 노력을 할애하는 개발 방법

* 형상관리
	* SW개발 및 유지보수 과정에서 발생하는 소스코드, 문서, 인터페이스 등 각종 결과물에 대해 형상을 만들고, 이들 형상에 대한 변경을 체계적으로 관리, 제어하기 위한 활동

	* 버전관리
		* 형상관리의 일부
		* 일반적인 소프트웨어 소스 코드만의 형상을 관리하는 것
		* SVN(Subversion), Git, Mercurial, CVS ...
		
* 프로젝트 관리
	* 문서 관리
	* 일정 관리
	* 예산 관리
	* 인력 관리
	* 고객 관리
	* 위험 관리
	* 품질 관리



















