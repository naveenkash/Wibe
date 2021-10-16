import { FC } from "react";
export interface LinkButtonProps {
  text: string;
  link: string;
  outline?: boolean;
  theme?: "light" | "dark";
}
export const LinkButton: FC<LinkButtonProps> = ({
  text,
  link = "#",
  outline = false,
  theme = "light",
}) => {
  return (
    <div className="dark">
      <div className="overflow-hidden inline-block py-3 px-7.5">
        <a
          className={`relative link-button text-xs overflow-hidden py-3 px-7.5 uppercase ${
            outline ? "link-button-outline" : ""
          }`}
          href={link}
        >
          <span>{text}</span>
          <span
            className={`w-full ${
              theme === "light" ? "btn-dark-clr" : "btn-light-clr"
            }`}
          >
            {text}
          </span>
        </a>
      </div>
    </div>
  );
};
