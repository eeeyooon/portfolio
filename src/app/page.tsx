import Onboard from "@/components/Home/Onboard";
import AboutPage from "./about/page";
import FeaturedProjectsPage from "@/components/Projects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Onboard />
      <AboutPage />
      <FeaturedProjectsPage />
    </>
  );
}
