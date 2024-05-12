export type Project = {
  title: string;
  intro: string;
  description: string;
  points: string[];
  contribution?: {
    detail?: string[];
    title: string;
  }[];
  troubleShooting?: {
    detail?: string[];
    title: string;
  }[];
  startDate: string;
  endDate: string;
  category: string[];
  path: string;
  featured: boolean;
  stacks: string[];
  githubUrl: string;
  docsUrl: string;
  serviceUrl: string;
  images: number;
};
