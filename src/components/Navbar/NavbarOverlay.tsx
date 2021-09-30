import { FC, useEffect, useRef, useState } from "react";
import { BrandLogoNavbar } from "../IconStore/IconStore";

export interface NavbarOverlayProps {
  show: boolean;
  onOutsideClick?: () => unknown;
}

export const NavbarOverlay: FC<NavbarOverlayProps> = ({
  show,
  onOutsideClick = () => null,
}: NavbarOverlayProps) => {
  let [clientY, setClientY] = useState<number>();
  let [clientX, setClientX] = useState<number>();
  const outsideClick = useRef(onOutsideClick);
  const mouseMoveHandler = (e: MouseEvent) => {
    setClientY(e.clientY);
    setClientX(e.clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
  }, [outsideClick]);
  return (
    <div
      onClick={() => outsideClick.current()}
      className={`site-header-overlay light fixed top-0 left-0 ${
        show
          ? "show-navbar-overlay smooth-transition"
          : "hide-navbar-overlay smooth-transition"
      }`}
    >
      <a
        href="/"
        className="fixed top-13 left-13 dark logo site-header-logo image-logo-enabled"
        id="site-logo"
      >
        <BrandLogoNavbar className="h-6 left-0 w-auto logo-color" />
      </a>
      <div className="responsive-menu text-right absolute right-0 bottom-0 pr-13 pb-13 dark align-baseline pr-">
        <ul>
          <li
            className={`py-3 font-poppins ${show ? "menu-item-slide-up" : ""}`}
          >
            <a className="responsive-menu-item text-6xl font-bold" href="/">
              Home
            </a>
          </li>
          <li
            className={`py-3 font-poppins ${show ? "menu-item-slide-up" : ""}`}
          >
            <a className="responsive-menu-item text-6xl font-bold" href="/">
              About
            </a>
          </li>
          <li
            className={`py-3 font-poppins ${show ? "menu-item-slide-up" : ""}`}
          >
            <a className="responsive-menu-item text-6xl font-bold" href="/">
              Contact
            </a>
          </li>
          <li
            className={`py-3 font-poppins ${show ? "menu-item-slide-up" : ""}`}
          >
            <a className="responsive-menu-item text-6xl font-bold" href="/">
              Work
            </a>
          </li>
          <li
            className={`py-3 font-poppins ${show ? "menu-item-slide-up" : ""}`}
          >
            <a className="responsive-menu-item text-6xl font-bold" href="/">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div
        className="flex ml-auto justify-between dark flex-col overlay-burger-menu items-end absolute"
        style={{ top: clientY, left: clientX }}
      >
        <div className="overlay-burger-lines overlay-line-1"></div>
        <div className="overlay-burger-lines overlay-line-2"></div>
      </div>
    </div>
  );
};
