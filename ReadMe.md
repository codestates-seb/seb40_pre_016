# 팀 i - 6

MBTI I 만 6명

## Stackover-flow clone 배포 링크

http://stackoverflow-clone-frontserver.s3-website.ap-northeast-2.amazonaws.com/questions/page=1

## 팀원 구성

| **Member** |   Role    |              Github               |
| :--------: | :-------: | :-------------------------------: |
| 🌃 김경근  | Back-end  |      https://github.com/kkg5      |
| 🦑 류인환  | Back-end  |     https://github.com/Cutaku     |
| 😄 허진성  | Back-end  |    https://github.com/JEENSUNG    |
| ❤️‍🔥 류희경  | Front-end |   https://github.com/beals1129    |
| 🫡 오성환  | Front-end |    https://github.com/tlsrb100    |
| 🐻 한병주  | Front-end | https://github.com/OneMoreBottlee |

<br/>

<hr/>

## 프로젝트

**Stackover Flow 클론**

<hr/><br/>

### 사용자 요구사항 정의서

[구글 스프레드 이동](https://docs.google.com/spreadsheets/d/1p5ihL-2yTiUlLbkLstMPKxfO8cgHLpnlJ-lln_8BDxY/edit#gid=0)

## 기술

- FrontEnd : `Html`, `Css`, `Javascript`, `React`, `Styled Components`, `Recoil`
- BackEnd : `Java`, `Spring Boot`, `Spring Data JPA`, `Spring Security`, `Spring REST Docs`, `MariaDB`

## 구현 기능

### 1. 로그인, 회원가입

- 이메일, 비밀번호 유효성 검사 후 로그인이 가능합니다.
- 인가된 사용자일 경우 로그인을 통해 세션 id를 부여받습니다.
- Display Name, Email, Password, google RecCapcha를 통해 회원가입을 할 수 있습니다.
- 로그인하지 않고 글작성, 유저 정보 수정 페이지 접근시 로그인페이지로 이동됩니다.

### 2. 메인 페이지

- 현재 작성된 글을 확인할 수 있습니다.
- 작성된 글의 조회수, 투표수, 작성자, 작성시간을 확인할 수 있습니다.
- 네트워크 에러나 글이 없을 시 오류 내용을 표시합니다.
- 새로운 질문을 작성할 수 있습니다.

### 3. 질문 페이지

- Tag를 추가하고 Editer를 통해 글을 작성할 수 있습니다.
- 중복되는 Tag는 입력이 되지 않습니다
- 유효성 검사 후 글이 작성됩니다.
- 자신이 작성한 글을 바로 확인 가능합니다.
- 작성된 글의 Answer와 Comment를 남길 수 있습니다.
- Answer 작성자, 작성시간이 표기됩니다.
- Questions과 Answer의 투표를 +1 -1 로 조정할 수 있습니다.
- 본인이 작성한 글의 Edit 버튼으로 글을 수정하고 Delete 버튼으로 글을 삭제할 수 있습니다.
- 답변이 달린 글은 삭제할 수 없습니다.

### 4. Tag 페이지

- 현재 작성된 글의 태그를 한 번에 확인할 수 있습니다.
- 해당하는 태그의 사용 빈도를 확인할 수 있습니다.

### 5. User 페이지

- 가입되어있는 유저의 정보를 확인할 수 있습니다.
- 해당 유저를 선택하면 해당 유저의 정보를 확인할 수 있습니다.
- 로그인 후 개인 유저페이지에 접속하면 개인정보와 AboutMe를 편집할 수 있습니다.

<hr/>

## 팀 Roles

### 커밋 컨벤션

`feat` : 새로운 기능 추가<br/>
`fix` : 버그 수정<br/>
`docs` : 문서 수정<br/>
`style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우<br/>
`refactor` : 코드 리펙토링<br/>
`test` : 테스트 코드, 리펙토링 테스트 코드 추가<br/>
`chore` : 빌드 업무 수정, 패키지 매니저 수정<br/>

### main branch

완성된 main branch

### 그 외 branch 활용

- `dev` branch : fe, be 각 branch 병합
- `fe` branch : fe merge 를 위한 fe main branch
- `be` branch : fe merge 를 위한 fe main branch

- 외 branch : 개발 `conponents` 별 기능별 제작 및 merge

## PreView

### 메인페이지

![image](https://user-images.githubusercontent.com/57256728/200263273-80dd9551-b9e1-465c-adea-1de81c0d5e88.png)


### 로그인 & 회원가입 

![image](https://user-images.githubusercontent.com/57256728/200263234-d40b9108-1f2e-418e-8eff-291e91f6a47d.png)

![image](https://user-images.githubusercontent.com/57256728/200263253-b8512ec5-f308-40b7-b377-65d1be504272.png)

### 질문 상세

![image](https://user-images.githubusercontent.com/57256728/200263385-723f598e-f92c-426e-87d1-f50ebe5f67cf.png)

![image](https://user-images.githubusercontent.com/57256728/200263413-d61a1b67-d05b-4615-b48e-5e9746ade818.png)


### Tags & Users

![image](https://user-images.githubusercontent.com/57256728/200263559-8ec532c9-e503-4304-bc75-36f2ea2f735c.png)

![image](https://user-images.githubusercontent.com/57256728/200263577-72d17216-c7f8-42d2-9f43-80ed36695cac.png)
![image](https://user-images.githubusercontent.com/57256728/200263597-bfa179b6-8ec1-48e5-af14-ae594361c043.png)


### User(로그인시)

![image](https://user-images.githubusercontent.com/57256728/200263665-8264631f-260b-4bd1-8f6f-6f20fa472fc5.png)

![image](https://user-images.githubusercontent.com/57256728/200263706-c527b6fb-5e82-4bc8-8ccd-483d1b0e1112.png)


추가 참고 이미지 
https://www.notion.so/HBJ-s-Life-ef6ec50fc95a41aab2ffe0f6e05a52d9?p=56edd6f729d84eadb8814c794c6b1ab7&pm=c
https://www.notion.so/HBJ-s-Life-ef6ec50fc95a41aab2ffe0f6e05a52d9?p=b9476bb2cd674d3db56f427f4b4dc64f&pm=c
