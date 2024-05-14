export const project1 = {
  title: "구글 폼 클론코딩",
  intro: "구글 폼 클론코딩 프로젝트",
  description: `구글 설문조사(google-form)를 클론코딩한 프로젝트입니다. 원하는 질문과 옵션(단답형, 장문형, 객관식, 체크박스, 드롭다운)으로 설문지를 생성하고, 미리 볼 수 있습니다. 드래그 앤 드랍으로 질문 및 질문의 옵션 순서를 변경할 수 있고, 필수 옵션을 설정할 수 있습니다. 또한 직접 만든 설문지를 사용해 볼 수 있습니다. 새로 고침 시에도 사용자가 생성한 질문 데이터를 유지하기 위해 Redux-persist를 사용하였습니다.`,
  points: [
    `\`MUI\`를 활용하여 구글 설문조사 생성 페이지 및 미리보기 페이지 퍼블리싱.`,
    "질문 CRUD 및 드래그앤드랍을 통한 순서 변경 기능. ",
    `\`React Redux\`와 \`Redux Toolkit\`를 사용한 설문지, 질문 카드, 입력 데이터 상태 전역 관리.`,
    `\`redux-persist\`를 사용하여 질문 데이터를 로컬스토리지에 저장하여 브라우저 새로고침을 해도 입력한 질문 데이터가 유지되도록 구현.`,
  ],
  contribution: [
    {
      title: `Redux와 Redux Tookit을 사용하여 애플리케이션의 상태 관리 구조를 생성하고, 관련 로직을 모듈화했습니다.`,
      detail: [
        `\`Redux Toolkit\`의 \`configureStore\`를 사용하여 애플리케이션의 메인 스토어를 설정하였습니다. 여러 리듀서를 조합하여 상태 관리 구조를 정의하였습니다.`,
        `설문지(form), 질문(question), 미리보기(preview)의 각 섹션별 슬라이스를 구현하고, 각 슬라이스 내에서 상태 업데이트를 위한 액션과 리듀서를 정의했습니다. 이를 통해 애플리케이션의 데이터 흐름을 명확하게 관리하고, 로직을 모듈화하였습니다.`,
        `\`Redux-Persist\`를 사용하여 스토어의 상태를 브라우저의 \`localStorage\`에 저장하고, 새로 고침 시 데이터를 유지하여 사용자 경험을 향상시켰습니다.`,
        `스토어의 미들웨어를 설정하여 \`serializableCheck\`에서 \`Redux-Persist\` 관련 액션들을 제외시켜 성능 이슈를 최소화했습니다.`,
      ],
    },
    {
      title: `설문지(form), 질문(question), 미리보기(preview) 섹션 별 슬라이스를 구현하였습니다.`,
      detail: [
        `\`formSlice\` : 사용자가 입력한 설문지에 대한 정보를 관리하는 리듀서로, 설문지의 정보 및 질문 추가 등의 기능을 관리합니다.`,
        `\`questionSlice\` : 각 질문에 대한 상세한 설정을 관리하는 리듀서입니다. 질문 제목, 질문 유형, 옵션, 필수 여부 등을 조정할 수 있고, 사용자가 질문 안 옵션의 위치를 편리하게 바꿀 수 있도록 드래그 앤 드롭 기능을 구현하였습니다.`,
        `\`previewSlice\` : 사용자가 생성한 설문지를 미리 사용해볼 수 있고, 입력한 미리보기 답변들을 관리합니다.`,
      ],
    },
    {
      title: "사용자 인터페이스 및 사용자 경험을 향상시켰습니다.",
      detail: [
        `\`Material-UI\`와 \`Styled-Components\`를 사용하여 동적인 스타일링과 일관된 UI 요소를 제공하였습니다.`,
        `질문 및 질문 안 옵션의 순서를 드래그 앤 드롭으로 조정할 수 있게 기능을 제공하여, 사용자가 직접 직관적이고 편리하게 순서를 조정할 수 있도록 하였습니다. 이 기능은 \`react-beutiful-dnd\` 라이브러리를 사용하여 구현하였습니다.`,
      ],
    },
  ],
  startDate: "2023-12-02",
  endDate: "2023-12-11",
  category: ["Personal"],
  path: "google-form",
  featured: true,
  stacks: ["react", "typescript", "styledComponents", "redux", "vercel", "mui"],
  githubUrl: "https://github.com/eeeyooon/google-form",
  docsUrl: "",
  serviceUrl: "https://google-form-eeeyooon.vercel.app/",
  images: 5,
};
