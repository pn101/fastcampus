# API
- 직방 **API** (=> item_ids 매물 번호를 주면 방의 정보를 주는 서버/API)
- 백엔드 => **API** (Application Programming Interface)
- API 서버와 크라이언트를 연결해서, 특정 기능을 수행해주는 녀석
- **(Look into other API platforms)**

#HTTP Methods
- GET, POST, PUT, PATCH, DELETE etc.
- Restful 한 설계 (RESTful API)
- *Representational State Transfer*
	- GET - 조회, 검색(데이터의 상태가 바뀌지 않으면서, 정보를 가져올 때) (*Retrieve*)
	- POST - 데이터 추가나 생성 할 때. 웹 상의 리소스가 생길 때 (*created*)
	- PUT/PATCH - 데이터가 업데이트 될 때 (*Update*)
	- PATCH - 데이터 삭제될 때 (*Destroy*)
	- CRUD - the lifecycle (create, retrieve, update, destroy)

	- API에 요청할 때, status
	- POST Successful(201), failed
	- GET Successful(200), failed


#SMS API
- API Test/Client => postman etc

#Json
- str/json to dictionary == json.loads()
- dictionary to str/json == json.dumps()