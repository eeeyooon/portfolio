export const project2 = {
  title: "지뢰찾기 게임",
  intro: "지뢰찾기 게임 프로젝트",
  description:
    "지뢰찾기 게임을 구현한 프로젝트입니다. 지뢰가 있는 셀을 모두 찾거나, 혹은 지뢰가 없는 셀을 모두 열면 승리하는 게임입니다. Redux를 사용하여 게임 관련 데이터를 전역 관리하였습니다.",
  points: [
    "깊이 우선 탐색(DFS)를 활용한 지뢰찾기 알고리즘 적용.",
    "난이도 선택  혹은 사용자가 입력한 행*열 크기, 지뢰 개수에 맞는 커스텀 난이도 보드 생성 기능.",
    "셀 클릭 시 인접한 셀 8칸의 지뢰 개수 표시.",
    "인접한 셀 중 지뢰가 없을 때, 그 인접한 셀 모두 열리는 재귀호출 로직 생성.",
    "Redux와 RTK를 사용한 지뢰찾기 게임 상태 전역 관리.",
    "redux-persist를 사용하여 redux의 store를 통해 관리되는 state를 로컬스토리지에 저장하여 새로 고침을 하여도 사용자가 선택한 난이도가 유지되도록 설정함.",
  ],
  startDate: "2023-12-07",
  endDate: "2023-12-11",
  category: ["Personal"],
  path: "minesweeper-game",
  featured: true,
  stacks: ["react", "styledComponents", "typescript", "redux", "vercel"],
  githubUrl: "https://github.com/eeeyooon/minesweeper-game",
  docsUrl: "",
  serviceUrl: "https://yoon-minesweeper.vercel.app/",
  images: 1,
};
