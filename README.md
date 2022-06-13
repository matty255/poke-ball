## 프로젝트 시작 동기
- 리액트의 상태관리를 좀더 손에 익히고 함수형 문법에 익숙해지기 위해서!
- 전설의 포켓몬을 잡고 싶어서!

## 제작기간
2022 - 06 - 03 ~ 2022 - 06 - 13 (10일)

## 프로젝트 소개
- 모바일 증강현실 게임 pokemonGO의 minified version of application.
- pokemonGO의 주요 셀링포인트인 수집에 포커스를 두고 다마고치 감성으로 제작했습니다.!

## 프로젝트의 주요 목표
- public API 다루기 연습 
- Context API로 로컬 상태 관리
- 다국어페이지 ui, dark mode, 렌더링 최적화
- firebase auth를 사용한 google, facebook 소셜 로그인
- github actions로 ci/cd 구축

## 사이트 구경하기
- 깃헙 주소 https://github.com/matty255/poke-ball
- 사이트 주소 https://poke-ball-621e0.web.app/

## 시연 영상 (제작중)
/

## 참고
- pokeAPI : https://pokeapi.co/docs/v2
- firebase codelab : https://firebase.google.com/codelabs/firebase-web?authuser=0&hl=ko#0
- freecodecamp : https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/

## 주요기능
1. 랜덤으로 이미지가 포함된 포켓몬 리스트를 불러오기 ✅
  - 무한스크롤 ✅
  - 새로고침 시 랜덤 셔플 ✅

2. 좋아하는 포켓몬을 잡고 모아보기(로그인 유저 전용)
  - 메인페이지에서 빠르게 잡기 / 상세페이지에서 잡기(일정 확률로 이로치 등장) ✅
  - 포획 실패 기능 구현 / 실패 확률 표시 ✅
  - 잡은 포켓몬은 포켓몬박스에 보관 ✅
  - 내가 잡은 포켓몬을 친구에게 공유 ✅

3. api에서 특정 포켓몬 검색(로그인 유저 전용) ✅
  - api에서 포켓몬 한마리를 랜덤으로 소환해 잡을 수 있는 기능(일정 확률로 이로치 등장) ✅
 
4. 다국어 페이지 지원 ✅
  - 포켓몬 이름 DB + i18next를 활용하여 다국어 페이지 제작 ✅
  - 영어와 한국어 지원 ✅
  - 디폴트는 기기 설정을 따르며 토글 버튼으로 전환 가능 ✅

5. 소셜 로그인 기능
  - firebase Auth와 연동하여 google, facebook login ✅
  - 포켓몬박스 페이지에서 로그아웃과 회원 탈퇴 기능 ✅
  - 
5. UI & UX ✅
  - 대부분의 브라우저와 운영체제, Galaxy Fold까지 커버하는 사이즈의 반응형 웹 ✅
  - 다크모드 : 디폴트는 기기 설정을 따르며 토글 버튼으로 전환 가능 ✅
  - UX를 고려한 레이아웃 디자인 ✅

6. 자동배포 ✅

7. 렌더링 최적화(리팩토링 진행중...)

## 사용 라이브러리
- react-router-dom
- react-i18next
- tailwind CSS
- axios
- lodash
- react-router-dom
- firebase Auth, firestore
- firebase-tools
- React Firebase Hooks
- react-copy-to-clipboard
- sweetalert2
