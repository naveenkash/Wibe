import { FC } from "react";
import { useCreateObserver } from "../../hooks/useCreateObserver";

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
    <div ref={ref} className="projects-section light">
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
                Tex Fasteners
              </h3>
              <h5 className="text-2xl font-poppins">
                The world’s fastest growing zipper manufacturer
              </h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
