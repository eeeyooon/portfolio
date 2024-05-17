export const project10 = {
  title: "WAVED",
  intro: "개발 직군 취업 준비생을 위한 챌린지 플랫폼",
  description:
    "WAVED는 개발 직군 취업 준비생을 대상으로 챌린지를 제공하는 플랫폼입니다. 개발 직군 취업 준비에 도움이 될 수 있도록 맞춤형 챌린지를 제공합니다. 원하는 챌린지에 예치금을 걸고, 같은 챌린지를 신청한 참여자들끼리 답변을 공유하며 동기부여를 얻을 수 있도록 합니다. 6주간 기획부터 MVP 모델 출시까지 진행하였고, 4주 간 베타 테스트와 QA에 대응 후 공식 런칭하였습니다. 현재는 IT 교육기업인 (주) 멋쟁이 사자처럼의 서비스 라인에 탑재를 위한 인수인계 절차를 진행 중입니다.",
  points: [
    `온보딩, 로그인 및 회원가입, 챌린지 신청 및 결제, 알림 기능, 프로필 페이지 및 관리자 페이지 등 화면 및 기능 개발`,
    `로그인 성공 시 백엔드 서버로부터 \`JWT\`를 받아 \`NextJS API Routes\`를 활용하여 \`Next\` 서버에서 세션 관리 `,
    `유저 인터랙션이 많은 페이지에선 \`CSR\`, 빠른 초기 로딩 및 SEO 최적화가 필요한 페이지에선 \`SSR\`을 선택하여 페이지마다 최적화된 렌더링 방식을 사용`,
    `\`Server-Sent Events\`를 연동하여 실시간 알림 기능 구현`,
    `\`Axios Interceptors\`를 활용한 에러 핸들링 및 \`AccessToken\` 만료 시 새로운 \`AccessToken\`을 받을 수 있도록 기능 구현 - [[블로그 포스팅]](https://velog.io/@eeeyooon/Axios-%EC%9D%B8%ED%84%B0%EC%85%89%ED%84%B0%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-%EB%B0%8F-AccessToken-%EB%A7%8C%EB%A3%8C-%EC%8B%9C-%EC%9E%AC%EB%B0%9C%EA%B8%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)`,
    `포트원(구 아임포트)을 연동하여 NHN KCP 실결제 및 결제 후검증 기능 구현`,
    `\`Azure Web App\`과 \`GitHub Actions\`를 사용하여 코드 변경 시 자동으로 빌드, 테스트, 배포가 이루어지는 CI/CD 파이프라인 구축.`,
  ],
  contribution: [
    {
      title:
        "로그인 성공 시 백엔드 서버로부터 JWT를 받아 NextJS API Routes를 활용하여 세션 관리를 하였습니다.",
      detail: [
        "`Next.js API Routes`를 사용하여 RefreshToken을 서버사이드에서 `httpOnly` 쿠키로 안전하게 관리하고, AccessToken과 RefreshToken을 쿠키에 저장 및 삭제하는 로직을 작성했습니다.",
        "API 통신 시 AccessToken을 헤더에 포함하여 보내도록 하고, AccessToken이 만료되었을 때는 RefreshToken을 사용해 새로운 AccessToken을 발급받는 자동화된 프로세스를 구현했습니다.",
        "`Next.js`의 서버사이드 렌더링과 클라이언트 사이드 렌더링을 고려하여 JWT 저장 위치와 접근 방법을 결정하였습니다.",
      ],
    },
    {
      title:
        "Axios Interceptors를 활용한 에러 핸들링 및 AccessToken 만료 시 재발급 기능 구현하였습니다.",
      detail: [
        "`Axios Interceptors`를 사용하여 요청 및 응답 에러를 처리하는 로직을 구현하였습니다.",
        "`/api/auth/reissue` 엔드포인트로 POST 요청을 보내 새로운 AccessToken을 발급받고, AccessToken 만료로 에러가 발생한 요청의 헤더를 업데이트하여 다시 시도하는 로직을 구현하였습니다",
        "응답 인터셉터에서 에러를 캐치하여 토큰 재발급이 필요한 경우 재발급을 시도하고, 그렇지 않은 에러는 그대로 반환하는 조건부 처리 로직을 구현했습니다.",
      ],
    },
    {
      title: "SSE로 실시간 알림 기능을 구현하였습니다.",
      detail: [
        "`Server-Sent Events (SSE)`를 사용하여 서버에서 클라이언트로 실시간 알림을 전송하는 기능을 구현하였습니다.",
        "`EventSourcePolyfill`을 사용하여 유저 인증 토큰을 포함한 SSE 연결을 설정하였습니다.",
        "페이지 이동이나 새로고침 시에도 액세스 토큰을 재발급하고 SSE를 재연동하도록 처리하였습니다.",
      ],
    },
    {
      title:
        "Azure Web App과 GitHub Actions를 사용한 자동 CI/CD 파이프라인을 구축하였습니다.",
      detail: [
        "`GitHub Actions`를 사용하여 CI/CD 파이프라인을 설정하고, `action-deploy.yml` 파일을 작성하여 자동 빌드 및 배포 과정을 정의했습니다.",
        "Azure Web App과의 연동을 통해 지속적인 통합과 배포를 구현하였으며, 이를 통해 개발 효율성을 크게 향상시켰습니다.",
      ],
    },
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
