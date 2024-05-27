export const project10 = {
  title: "WAVED",
  intro: "개발 직군 취업 준비생을 위한 챌린지 플랫폼",
  description:
    "WAVED는 개발 직군 취업 준비생을 대상으로 챌린지를 제공하는 플랫폼입니다. 개발 직군 취업 준비에 도움이 될 수 있도록 맞춤형 챌린지를 제공합니다. 원하는 챌린지에 예치금을 걸고, 같은 챌린지를 신청한 참여자들끼리 답변을 공유하며 동기부여를 얻을 수 있도록 합니다. 6주간 기획부터 MVP 모델 출시까지 진행하였고, 4주 간 베타 테스트와 QA에 대응 후 공식 런칭하였습니다. 현재는 IT 교육기업인 (주) 멋쟁이 사자처럼의 서비스 라인에 탑재를 위한 인수인계 절차를 진행 중입니다.",
  points: [
    `온보딩, 로그인 및 회원가입, 챌린지 신청 및 결제, 알림 기능, 프로필 페이지 및 관리자 페이지 등 화면 및 기능 개발`,
    `로그인 성공 시 백엔드 서버로부터 \`JWT\`를 받아 \`NextJS API Routes\`를 활용하여 \`Next\` 서버에서 세션 관리 `,
    `유저 인터랙션이 많은 페이지에선 \`CSR\`, 빠른 초기 로딩 및 SEO 최적화가 필요한 페이지에선 \`SSR\`을 선택하여 페이지마다 최적화된 렌더링 방식을 사용`,
    `\`Axios Interceptors\`를 활용한 에러 핸들링 및 \`AccessToken\` 만료 시 새로운 \`AccessToken\`을 받을 수 있도록 기능 구현`,
    `포트원(구 아임포트)을 연동하여 NHN KCP 실결제 및 결제 후검증 기능 구현`,
    `\`Github Actions\`를 사용하여 \`Azure App Service\`에 \`Web App\` 배포`,
  ],
  startDate: "2024-02-29",
  endDate: "2024-05-15",
  category: ["Team", "Featured"],
  path: "waved-challenge",
  featured: true,
  stacks: ["nextjs", "typescript", "azure", "emotion", "recoil"],
  githubUrl: "https://github.com/Senity-Waved/Waved_FE",
  docsUrl: "",
  serviceUrl: "https://waved-likelion.site/",
  images: 8,
};
