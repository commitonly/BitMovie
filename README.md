# BitMovie (영화 예매 웹 서비스)

## 프로젝트 소개
영화 예매 서비스를 제공하기 위해 필요한 기능들을 리액트와 스프링부트를 사용하여 구현했습니다.
<br/>

## 주요 페이지

예매페이지 : 실제 영화 예매사이트와 동일하게 영화,상영관,날짜,상영시간표를 선택 후 좌석선택을 하여 구매까지 할 수 있습니다.<br/>

마이페이지 : 예매내역과 포인트 쿠폰 등 개인정보를 확인 하고 수정 할 수 있습니다.<br/>

영화페이지 : 현재 상영중인 영화의 평점과 리뷰를 확인 할 수 있습니다.<br/>

결제페이지 : 쿠폰과 포인트 사용이 가능하며 신용카드 및 카카오페이로 실제 결제를 할 수 있습니다.

메인페이지 : 박스오피스 순위와 자체 예매율을 실시간으로 보여주며 랭킹별로 상영작 예고편을 출력하고 실시간 평점들을 확인 할 수 있습니다.<br/>

## 기여한 파트
* 와이어프레임 설계
* 메인페이지 박스오피스 순위
  - api를 통해 얻어온 박스오피스를 순위별로 출력 Swiper를 사용하여 자동 슬라이드 및 드래그로 컨트롤 가능
* 예매<br/>
  - api로 받아온 영화리스트를 관람연령대와 함께 출력 자체 가나다순,예매율순(DB예매율기준),평점순(DB평점순위기준)으로 출력<br/>
  - 총 4단계로 영화리스트 선택, 상영관 선택, 날짜선택, 상영시간선택 모두 선택 후 로그인 시 좌석선택 가능
  - 4단계 중 1개라도 선택되지 않은채로 좌석선택 클릭 시 선택되지 않은 정보가 알림창에 표시됨
  - 하단에 사용자가 선택한 정보를 실시간으로 출력
  - 날짜 선택을 위한 달력구현 새로고침 시 당일날짜 디폴트로 선택됨
  - 상영시간표에서는 총 좌석,예매된 좌석,층수,관,상영시작시간 나타냄 // 예매 시 실시간으로 예매된 좌석수 반영됨
  - 4단계 선택 모두 컴포넌트 분리
* 좌석
  - 성인6명 청소년6명 최대12명까지 선택가능
  - 선택 한 인원 및 좌석 왼쪽 정보창에서 실시간으로 확인가능
  - 우측에 좌석 색상을 구분해서 현재 좌석상태를 쉽게 파악할 수 있게함
  - 예매 완료된 좌석은 흑색처리되어 클릭되지 않도록 함 
  - 인원을 선택하지 않고 좌석을 클릭하면 경고알림
  - 선택된 인원보다 적거나 많을 시 경고알림 및 좌석선택은 선택된 인원까지만 가능
  - api를 통해서 받아온 포스터 및 영화기타정보 출력
* 결제
  - 아임포트를 사용하여 이니시스 및 카카오페이(QR코드)결제 구현
  - SessionStorage를 사용해서 로그인된 유저PK로 결제 시 유저 정보 출력
  - 포인트 사용 및 쿠폰 사용 구현
  - 포인트 조건 : 최소 1000점 최대 2000점 -> 최소금액이 0원이 되지 않기 하기 위함 // 해당 조건에 맞지 않을 시 경고알림창 출력
  - 쿠폰은 최대1개만 선택가능
  - 로그인한 유저 보유포인트 1000점 미만일 시 포인트 입력창 입력불가 처리
  - 실시간으로 할인된 금액과 최종금액을 보여줌으로써 유저가 실시간할인율 및 결제금액 확인가능
  - 결제 완료 시 해당 유저 pk로 마이페이지 예매내역으로 이동
![Group 1](https://user-images.githubusercontent.com/90983846/210101462-e956feec-ca98-4a91-b011-6f31fd83b093.png)

<img width="1620" alt="스크린샷 2022-12-13 오후 8 46 42" src="https://user-images.githubusercontent.com/90983846/207309676-4c88dd29-c8ff-47ec-858c-66a33cc6b6ed.png">

<img width="1456" alt="스크린샷 2022-12-13 오후 8 32 46" src="https://user-images.githubusercontent.com/90983846/207307075-3377a8de-722c-4cf2-9b85-3e0a865e4935.png">

<img width="1478" alt="스크린샷 2022-12-13 오후 8 26 28" src="https://user-images.githubusercontent.com/90983846/207305734-c6bed23d-ff23-4254-b406-c7eaec5688a3.png">

<img style="margin: 0 auto" width="696" alt="스크린샷 2022-12-13 오후 8 26 52" src="https://user-images.githubusercontent.com/90983846/207305816-80b746d5-f9f6-403e-9219-c7a3ccb30d22.png">
<br/>

## 프로젝트 일정 및 규모
* 개발 기간 : 2022.11.04 ~ 12.01
* 인원 : 5명
<br/>

## 팀원
|**이름**|**역할**| **담당 기능**                               |**Git URL**                     |
|-------|-----------|-----------------------------------------|--------------------------------|
| 김태민 | FullStack | 결제, 예매, 좌석페이지, 메인페이지(서브)                | https://github.com/commitonly  |
| 김성민 | FullStack | 결제, 예매                                  | https://github.com/keeptrynjoy |
| 이준민 | FullStack  | 로그인, 회원가입, MyPage                       | https://github.com/Jxnmin      |
| 유희준 | FullStack  | 영화리스트, 상세페이지, 리뷰, 검색                    | https://github.com/J-LOOK-J    |
| 정지훈 | FullStack | 로그인, 회원가입, Mypage, 영화리스트, 상세페이지, 리뷰, 검색 | https://github.com/greetjeehun |
<br/>

## 기술 소개
### Front-End
<img src="https://camo.githubusercontent.com/5a7100155d1a7b75357a90e8810530b21c8723c59f2976d0dafc7950205336d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/d1a61dccdba51c4d1ff3306fe00404de9162915d282bade8ef91b992f84ebd35/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6373732d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" style="max-width: 100%;"> <img src="https://img.shields.io/badge/JAVASCRIPT | ES6-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black"> <img src="https://img.shields.io/badge/REACT | 18.2-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=black">
<br>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white"> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black"> <img src="https://img.shields.io/badge/AXIOS-6236FF?style=for-the-badge&amp;logo=axios&amp;logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white"><br/><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> 

### Back-End
<img src="https://img.shields.io/badge/JAVA | 11-0d8ac7?style=for-the-badge&logo=OpenJDK&logoColor=white"> <img src="https://img.shields.io/badge/SPRINGBOOT | 2.7-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/MYBATIS | 2.2-000000?style=for-the-badge&logo=&logoColor=white">
<br><img src="https://img.shields.io/badge/Jackson-0d8ac7?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/Lombok-DDB320?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=&logoColor=white"><img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=for-the-badge&logo=Apache Tomcat&logoColor=white"> 

### Infra
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">
### Tools
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/ERD Cloud-EEEEEE?style=for-the-badge&logo=ERDCloud&logoColor=white"> <img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"><br/><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/MySQL Workbench-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### 사용 API
* [TMDB](https://www.themoviedb.org/) - 영화/인물 데이터 수집
* [i'mport](https://api.iamport.kr/) - 결제 및 환불
* [coolsms](https://docs.coolsms.co.kr/api-reference/cash/getreceipt) - 핸드폰 인증 문자 발송
<br/>

## ERD
* Table 17개
* Colunm 100개
<img src = "https://github.com/bitcampteam4/bitmovie/blob/main/src/main/webapp/image/Bitmovie_ERD.png?raw=true" width="800px">
<br/>



