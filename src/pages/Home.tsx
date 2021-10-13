import { FC } from "react";
import { HomeLandingText } from "../components/HomeLandingText/HomeLandingText";
import { Navbar } from "../components/Navbar/Navbar";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="content-area wrapper">
        <main>
          <section className="section">
            <HomeLandingText />
          </section>
          <ProjectsSection />
        </main>
      </div>
    </>
  );
};
