## 프로젝트 시작 동기
- 리액트의 상태관리를 좀더 손에 익히고 함수형 문법에 익숙해지기 위해서!
- 전설의 포켓몬을 잡고 싶어서!

## 제작기간
2022 - 06 - 03 (제작중)

## 프로젝트 소개
- 모바일 증강현실 게임 pokemonGO의 minified version of application.
- pokemonGO의 주요 셀링포인트인 수집에 포커스를 두고 다마고치 감성으로 만들고 있습니다.

## 프로젝트의 주요 목표
- public API 다루기 연습 
- Context API로 로컬 상태 관리
- 다국어페이지 ui, dark mode, 렌더링 최적화
- firebase auth를 사용한 google, facebook 소셜 로그인
- github actions로 ci/cd 구축

## 사이트 구경하기(제작중)
- https://github.com/matty255/poke-ball
- https://poke-ball-621e0.web.app/

## 참고
- pokeAPI : https://pokeapi.co/docs/v2
- firebase codelab : https://firebase.google.com/codelabs/firebase-web?authuser=0&hl=ko#0
- freecodecamp : https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/

## 주요기능
1. 랜덤으로 이미지가 포함된 포켓몬 리스트를 불러오기
  - 무한스크롤 ✅
  - 새로고침 시 랜덤 셔플 ✅

2. 좋아하는 포켓몬을 잡고 모아보기(로그인 유저 전용)
  - 메인페이지에서 빠르게 잡기 / 상세페이지에서 잡기(일정 확률로 이로치 등장) ✅
  - 포획 실패 기능 구현 / 실패 확률 표시
  - 잡은 포켓몬은 포켓몬박스에 보관 ✅
  - 내가 잡은 포켓몬을 sns로 공유

3. api에서 특정 포켓몬 검색(로그인 유저 전용)
  - api에서 포켓몬 한마리를 랜덤으로 소환 ✅
  - 치트코드를 입력하여 포켓몬을 소환해 잡을 수 있는 기능
  - 숫자나 텍스트를 범위 내로 난수화하기
 
4. 다국어 페이지 지원
  - 포켓몬 이름 DB + 라이브러리를 활용하여 다국어 페이지 제작

5. 소셜 로그인 기능
  - firebase Auth와 연동하여 google, facebook login ✅
  - 회원 탈퇴 기능
  - 
5. UI & UX
  - 대부분의 브라우저와 운영체제, Galaxy Fold까지 커버하는 사이즈의 반응형 웹 ✅
  - 다크모드 / 사이트 내 toggle로 모드 전환기능 ✅
  - UX를 고려한 레이아웃 디자인


## 사용 라이브러리(추가중)
- react-router-dom
- react-i18next
- tailwind CSS
- axios
- lodash
- react-router-dom
- firebase Auth, firestore
- firebase-tools
- React Firebase Hooks
