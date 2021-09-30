import { FC, useState } from "react";
import { BrandLogoNavbar } from "../IconStore/IconStore";
import { NavbarOverlay } from "./NavbarOverlay";

export const Navbar: FC = () => {
  const [showNavbarOverlay, setShowNavbarOverlay] = useState(false);
  return (
    <>
      <div className="site-header light w-full ">
        <div className="flex items-center h-6">
          <a
            href="/"
            className="relative logo  image-logo-enabled"
            id="site-logo"
          >
            <BrandLogoNavbar className="h-6 absolute -top-3.5 left-0 w-auto logo-color" />
          </a>
          <div
            onClick={() => setShowNavbarOverlay(true)}
            className="flex ml-auto justify-between flex-col burger-menu items-end"
          >
            <div className="lines"></div>
            <div className="lines mt-2 line-2"></div>
          </div>
        </div>
      </div>
      <NavbarOverlay
        show={showNavbarOverlay}
        onOutsideClick={() => setShowNavbarOverlay(false)}
      />
    </>
  );
};
