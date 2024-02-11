# 🌊 포트폴리오 프로젝트

![포폴-전체](https://github.com/eeeyooon/portfolio/assets/102462534/3ac6f511-e4d4-4528-a4dc-41fe73f5967a)

<br/>
<br/>

## 프로젝트 소개

프론트엔드 개발자를 준비하면서 진행했던 프로젝트, 프론트엔드 개발 스택 등을 한번에 확인할 수 있는 포트폴리오 사이트를 구현하였습니다. 편리한 탐색을 위해 헤더 메뉴 혹은 화살표 버튼을 통한 스크롤 이동이 가능하도록 구현하며 각각의 프로젝트를 클릭하면 세부 내용을 확인할 수 있는 페이지로 이동합니다.

<br/>

**NextJS(v13+)**

NextJS의 SSG와 SSR을 혼합하는 하이브리드 방식으로, 페이지에 따라 가장 최적화된 렌더링 방식을 선택하여 사용하였습니다. 기본적으로는 SSG로 생성된 페이지를 제공하여, 초기 로딩 시간(TTV)을 단축시켰고 프로젝트 세부사항 페이지의 경우 기본적인 UI는 유지하고, 프로젝트마다 컨텐츠만 바뀌도록 다이나믹 라우팅을 설정하였습니다.

<br/>

🌊 [포트폴리오 사이트 보러가기](https://portfolio-eeeyooon.vercel.app/)

<br/>
<br/>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Feeeyooon%2Fportfolio&count_bg=%238989FF&title_bg=%23BABABA&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

## 프로젝트 개요

🎈 프로젝트 기간 : `231109` ~ (진행 중)

🌊 프로젝트 구성 : about | skills | projects | contact

✨ 핵심 기능 :

- 반응형 웹 디자인
- Projects 페이지 동적 라우팅
- 간편한 이메일 보내기
- 프로젝트 이미지 슬라이더

<br/>
<br/>

## 기술 스택

<img src="https://img.shields.io/badge/Next.js_v14.01-000000?style=flat&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/> <img src="https://img.shields.io/badge/FramerMotion-0055FF?style=flat&logo=framer&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white"/>

<br/>
<br/>

## 구현 화면 및 핵심 기능

<br/>

### About 페이지

타이핑 효과를 주는 커스텀 훅 useTypewords를 만들어, 사이트의 로고에 타이핑 효과를 추가하였습니다. 또한 `framer-motion` 라이브러리를 사용하여 슬롯 머신 효과를 구현하였습니다.

<br/>

![타이핑,슬롯머신](https://github.com/eeeyooon/portfolio/assets/102462534/7e89eada-012a-4508-a621-a055e9fc1cf1)

<br/>
<br/>

### 프로젝트 이미지 슬라이더

`react-slick` 라이브러리를 사용하여, 프로젝트 이미지가 여러 개일 경우 슬라이더 기능을 추가하여 여러 이미지를 편하게 확인할 수 있도록 구현하였습니다.

<br/>

![이미지슬라이더](https://github.com/eeeyooon/portfolio/assets/102462534/30bd2ed0-9998-4e5f-a6d4-9f7ceb4a63d1)

<br/>
<br/>

### 간편한 이메일 보내기

`nodemailer`를 사용하여 간편하게 이메일을 보낼 수 있도록 구현하였습니다. 이메일 전송 기능은 클라이언트와 서버 간의 통신으로 진행되며, 클라이언트에서 fetch를 사용해서 POST 요청으로 데이터를 body 안에 담아 `api/contact/routes.ts`로 보내면 POST 함수가 호출이 되고, 이 Request로 온 데이터가 유효하다면, `nodemailer`를 사용해서 전송합니다. 이 `api/contact/routes`는 서버에서 실행이 되기 때문에 `nodemailer`라는 node 환경에서 동작하는 라이브러리를 사용할 수 있습니다.

<br/>

<details>
<summary>api/contact/routes.ts</summary>

```ts
import * as yup from "yup";
import { sendEmail } from "@/service/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "🚨 메일 전송에 실패하였습니다." }),
      {
        status: 400,
      }
    );
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패하였습니다." }),
        {
          status: 500,
        }
      );
    });
}
```

</details>

<br/>
<br/>

![이메일전송](https://github.com/eeeyooon/portfolio/assets/102462534/7629bf82-0085-44c7-8ce0-372966468cb2)

<br/>
<br/>

해당 contact form으로 전송된 이메일은 다음과 같이 확인할 수 있습니다.

<br/>

![이메일gif확인](https://github.com/eeeyooon/portfolio/assets/102462534/78ee7ebc-0773-4b2f-8074-6edd1e604418)

<br/>
<br/>

### 반응형 웹 디자인

여러 기기나 플랫폼의 화면 크기에 따라 자동으로 렌더링될 수 있도록 반응형 웹 디자인을 구현하였습니다.

<br/>

![반응형](https://github.com/eeeyooon/portfolio/assets/102462534/72c2585c-db87-44e8-bcf9-568c09de3f17)

<br/>

Header의 Menu 역시 화면의 사이즈에 따라 변경됩니다.

<br/>

![반응형헤더](https://github.com/Cafe-Manage-Service-CAFE-IN/cafe-in/assets/102462534/3a168781-4bcb-45c8-941e-3035b2ed7e64)

<br/>
<br/>

## 추가 구현 예정

- 교육, 활동 경험 Section
- 프로젝트 필터링
- SEO 최적화 및 성능 개선

<br/>
<br/>

## 폴더 구조

```
📦src
 ┣ 📂app
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂contact
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂contact
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂projects
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂skills
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂about
 ┃ ┃ ┣ 📜AboutContent.tsx
 ┃ ┃ ┗ 📜SlotMachine.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜ScrollArrow.tsx
 ┃ ┣ 📂contact
 ┃ ┃ ┣ 📜ContactForm.tsx
 ┃ ┃ ┗ 📜ContactModal.tsx
 ┃ ┣ 📂projects
 ┃ ┃ ┣ 📜FeaturedProjects.tsx
 ┃ ┃ ┣ 📜ImageSlider.tsx
 ┃ ┃ ┣ 📜ProjectBox.tsx
 ┃ ┃ ┣ 📜ProjectCard.tsx
 ┃ ┃ ┣ 📜ProjectGrid.tsx
 ┃ ┃ ┗ 📜StackIcons.tsx
 ┃ ┗ 📂skills
 ┃ ┃ ┣ 📜SkillCard.tsx
 ┃ ┃ ┗ 📜SkillGrid.tsx
 ┣ 📂constants
 ┃ ┗ 📜routes.ts
 ┣ 📂hooks
 ┃ ┗ 📜useTypeword.ts
 ┣ 📂service
 ┃ ┣ 📜contact.ts
 ┃ ┗ 📜email.ts
 ┗ 📂types
 ┃ ┣ 📜projects.ts
 ┃ ┗ 📜skills.ts
```

<br/>
<br/>

## 라이브러리

```json
 "dependencies": {
    "@types/nodemailer": "^6.4.14",
    "framer-motion": "^10.16.5",
    "next": "14.0.1",
    "nodemailer": "^6.9.8",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^4.12.0",
    "react-slick": "^0.30.1",
    "slick-carousel": "^1.8.1",
    "tailwind-scrollbar-hide": "^1.1.7",
    "yup": "^1.3.3"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-slick": "^0.23.13",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
```
