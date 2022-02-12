<h1 align= "center"> Swit 메신저 구현 과제</h1>

### :house: 배포 URL

![캡쳐](https://user-images.githubusercontent.com/85682854/153686261-fc3e9267-b3e6-4183-807f-18e5dc3e0944.png)

<br/>

### 🏗 프로젝트 구조도

```html
├── App.css
├── App.tsx
├── assets
│   ├── assets.ts
│   ├── main-logo.jpg
│   ├── svg-icons.svg
│   └── tab.svg
├── components
│   ├── Aside
│   │   ├── Aside.tsx
│   │   └── style.scss
│   ├── Auth
│   │   ├── SignInTest.tsx
│   │   └── style.scss
│   ├── ChatInput
│   │   ├── ChatInput.scss
│   │   ├── ChatInput.tsx
│   │   ├── TextArea.scss
│   │   └── TextArea.tsx
│   ├── MessageContainer
│   │   ├── Message.scss
│   │   ├── Message.tsx
│   │   ├── MessageContainer.scss
│   │   └── MessageContainer.tsx
│   ├── MessageToolbar
│   │   ├── MessageToolbar.scss
│   │   └── MessageToolbar.tsx
│   └── Nav
│       ├── Navbar.tsx
│       └── style.scss
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── redux
│   ├── actions
│   │   ├── chatAction.ts
│   │   └── userAction.ts
│   ├── reducer
│   │   ├── chatReducer.ts
│   │   ├── index.ts
│   │   └── userReducer.ts
│   └── store.ts
├── types
│   ├── message.ts
│   ├── reduxTypes.ts
│   └── user.ts
└── utils
    ├── constants
    │   ├── chatData.ts
    │   └── userData.ts
    └── functions
        ├── generateMessage.ts
        ├── getDate.ts
        └── shortening.ts
```

### :exclamation: 설치방법
~~~
1. npm install
2. npm start
~~~



### :clapper: 구현내용

#### 1. 필터링
~~~
- 상담 중인 요청만 보는 기능
- 가공방식 / 재료를 선택시(다중선택 가능) 해당 조건에 맞는 견적만 필터링하는 기능
- 필터링 리셋하는 기능
- 조건에 맞는 견적 요청이 없을 시 요청카드에 '조건에 맞는 견적 요청이 없습니다'가 뜨는 기능
~~~

#### 2. 요청 카드
~~~
- json server로 받아온 목 데이터 mapping
- 상담중인 고객사는 '상담중' 뱃지가 보이는 기능
- 카드 hover시 보더 스타일
~~~

#### 3. 반응형
~~~
- 360px에 맞춰 모바일버전으로 변하는 기능
- 햄버거 메뉴 아이콘 클릭시 메뉴 화면이 생기는 기능
- 백그라운드 영역 탭시 메뉴 close되는 기능
~~~

