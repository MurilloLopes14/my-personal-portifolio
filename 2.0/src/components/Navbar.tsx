/*
 * @copyright 2024 Murillo Lopes
 * @license Apache-2.0
 */

type NavItem = {
  label: string;
  link: string;
  className: string;
  ref: MutableRefObject<HTMLAnchorElement | null>;
};

import { MutableRefObject, useEffect, useRef } from "react";

export const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    if (activeBox.current && lastActiveLink.current) initActiveBox;
  }, []);
  window.addEventListener("resize", () => {
    if (activeBox.current && lastActiveLink.current) initActiveBox;
  });
  const activeCurrentLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    lastActiveLink.current?.classList.remove("active");
    e.currentTarget.classList.add("active");
    lastActiveLink.current = e.currentTarget;

    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = e.currentTarget.offsetTop + "px";
      activeBox.current.style.left = e.currentTarget.offsetLeft + "px";
      activeBox.current.style.width = e.currentTarget.offsetWidth + "px";
      activeBox.current.style.height = e.currentTarget.offsetHeight + "px";
    }
  };

  const navItems: NavItem[] = [
    {
      label: "Início",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Sobre mim",
      link: "#about",
      className: "nav-link",
      ref: useRef<HTMLAnchorElement | null>(null),
    },
    {
      label: "Trabalhos",
      link: "#work",
      className: "nav-link",
      ref: useRef<HTMLAnchorElement | null>(null),
    },
    {
      label: "Carreira",
      link: "#career",
      className: "nav-link",
      ref: useRef<HTMLAnchorElement | null>(null),
    },
    {
      label: "Contato",
      link: "#contact",
      className: "nav-link md:hidden",
      ref: useRef<HTMLAnchorElement | null>(null),
    },
  ];
  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={(e) => activeCurrentLink(e)}
        >
          {" "}
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
