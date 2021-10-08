import { FC } from "react";

export const HomeLandingText: FC = () => {
  return (
    <div className="text-content">
      <div className="header-text">
        <h1 className="text-5.5xl font-poppins leading-19 font-bold">
          A digital-first creative studio that designs to engage & impact
        </h1>
        <div className="mt-10">
          <h2 className="text-pebble-400 uppercase text-xl">
            WEBSITES .UI/UX .BRANDING .VISUAL CONTENT
          </h2>
        </div>
      </div>
      <div className="clickHold fixed">
        <h2 className="text-sm">Click & hold to see our showreel</h2>
      </div>
    </div>
  );
};
