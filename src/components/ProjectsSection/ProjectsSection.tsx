import { FC } from "react";
import { useCreateObserver } from "../../hooks/useCreateObserver";
import { LinkButton } from "../Button/LinkButton";

export const ProjectsSection: FC = () => {
  const [ref] = useCreateObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (document.querySelector("body"))
        document.querySelector("body")!.style.transition = "0.5s";
      document.querySelector("body")!.style.backgroundColor = "#000";
      ref.current?.style.setProperty("--color", "#fff");
    } else {
      document.querySelector("body")!.style.backgroundColor = "#fff";
      ref.current?.style.setProperty("--color", "#000");
    }
  }, 0.1);
  return (
    <section ref={ref} className="section projects-section light">
      <div className="projects-wrap mx-auto grid">
        <div className="project-item">
          <a href="/">
            <div className="bg relative overflow-hidden bg-cover w-full h-full"></div>
            <div className="mt-14 relative project-item-text">
              <h3 className="font-poppins uppercase text-sm mb-3.5 text-pebble-400">
                Tex Fasteners
              </h3>
              <h5 className="text-2xl font-poppins">
                The world’s fastest growing zipper manufacturer
              </h5>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="/">
            <div className="bg relative overflow-hidden bg-cover w-full h-full"></div>
            <div className="mt-14 relative project-item-text">
              <h3 className="font-poppins uppercase text-sm mb-3.5 text-pebble-400">
                FCM Travel Solutions
              </h3>
              <h5 className="text-2xl font-poppins">
                World’s leading travel management company
              </h5>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="/">
            <div className="bg relative overflow-hidden bg-cover w-full h-full"></div>
            <div className="mt-14 relative project-item-text">
              <h3 className="font-poppins uppercase text-sm mb-3.5 text-pebble-400">
                Six Fields Beer
              </h3>
              <h5 className="text-2xl font-poppins">
                A Belgian-style witbier from the House of Devans
              </h5>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="/">
            <div className="bg relative overflow-hidden bg-cover w-full h-full"></div>
            <div className="mt-14 relative project-item-text">
              <h3 className="font-poppins uppercase text-sm mb-3.5 text-pebble-400">
                WWF Climate Solver
              </h3>
              <h5 className="text-2xl font-poppins">
                Saving the planet through innovative low carbon technologies
              </h5>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="/">
            <div className="bg relative overflow-hidden bg-cover w-full h-full"></div>
            <div className="mt-14 relative project-item-text">
              <h3 className="font-poppins uppercase text-sm mb-3.5 text-pebble-400">
                Zen Mobility
              </h3>
              <h5 className="text-2xl font-poppins">
                Zero emission new age mobility
              </h5>
            </div>
          </a>
        </div>
      </div>
      <div className="text-center mt-40">
        <LinkButton link="#" text={"SEE ALL WORK"} />
      </div>
    </section>
  );
};
