export const project8 = {
  title: "감정일기장",
  intro: "일상과 그 날의 감정을 기록하는 일기장",
  description:
    "하루의 일상과 그날 느낀 감정을 함께 기록하는 나만의 감정 일기장입니다. 기존 버전의 일기장에 카카오 소셜 로그인, 파이어베이스 DB 연동하여 개선시킨 것이 최신 버전(리빌딩)입니다.",
  points: [
    "상태 관리 라이브러리는 불필요하다는 판단 하에, Props Drilling을 방지하기 위해 Context API를 사용함.",
    "useReducer를 사용하여 상태 관련 로직을 분리하고, 재사용성을 높임.",
    "useSearchParams를 사용한 쿼리 스트링 활용",
    "React-Developer-Tools를 활용하여 연산이 낭비되고 있거나, 최적화가 안되어 있는 부분을 체크하고 최적화 작업을 진행함",
    "카카오 로그인 API를 사용하여 간편한 소셜 로그인 기능 구현.",
    "github actions를 사용하여 CI 워크플로우 구축.",
    "suspense, lazy.loading을 사용하여 리소스 용량 절감 및 TTI, FCP 속도 개선.",
  ],
  startDate: "2023-09-15",
  endDate: "2023-10-02",
  category: ["Personal", "Featured"],
  path: "emotion-diary",
  featured: true,
  stacks: ["react", "firebase", "kakao"],
  githubUrl: "https://github.com/eeeyooon/Rebuild-EmotionDiary",
  docsUrl:
    "https://eeeyooon.notion.site/b4286d82d0e74826a974d4873e7f72b3?pvs=74",
  serviceUrl: "https://eeeyooon-emotion-diary.web.app/",
  images: 3,
};
