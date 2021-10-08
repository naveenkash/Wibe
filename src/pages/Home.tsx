import { FC } from "react";
import { HomeLandingText } from "../components/HomeLandingText/HomeLandingText";
import { Navbar } from "../components/Navbar/Navbar";

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="content-area wrapper">
        <main>
          <section className="section">
            <HomeLandingText />
          </section>
        </main>
      </div>
    </>
  );
};
