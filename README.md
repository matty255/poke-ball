## 프로젝트 시작 동기
- 리액트의 상태관리를 좀더 손에 익히고 함수형 문법에 익숙해지기 위해서!
- 전설의 포켓몬을 잡고 싶어서!

## 제작기간
2022 - 06 - 03 (제작중)

## 프로젝트 소개
- 모바일 증강현실 게임 pokemonGO의 minified version of application.
- pokemonGO의 주요 셀링포인트인 수집에 포커스를 두고 다마고치 감성으로 만들고 있습니다.

## 프로젝트의 주요 목표
- poke API 다루기
- Context API로 로컬 상태 관리
- 다국어페이지 ui, dark mode, 렌더링 최적화
- google or firebase login
- 로그인한 유저에게만 포켓몬 잡기 허용

## 사이트 구경하기(예정)
> https://github.com/matty255/poke-ball

## 참고
- pokeAPI : https://pokeapi.co/docs/v2
- freecodecamp : https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/

## 주요기능
1. 랜덤으로 이미지가 포함된 포켓몬 리스트를 불러오기
  - 무한스크롤
  - 새로고침 시 랜덤 셔플

2. 좋아하는 포켓몬을 잡고 모아보기
  - 메인페이지에서 잡기 or 상세페이지에서 이로치 여부 확인가능
  - 잡은 포켓몬은 포켓몬박스에 보관
  - 내가 잡은 포켓몬을 sns로 공유
  - 로그인한 유저 전용 기능

3. api에서 특정 포켓몬 검색
  - 특정 포켓몬을 검색하거나 치트코드를 입력하여 포켓몬을 소환해 잡을 수 있는 기능
  - 로그인한 유저 전용 기능
 
4. 다국어 페이지 지원
  - 포켓몬 이름 DB + 라이브러리를 활용하여 다국어 페이지 제작

## 사용 예정 라이브러리(추가중)
react-router-dom
react-i18next
tailwind CSS
axios
lodash
react-router-dom
