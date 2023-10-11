"use client";
// import { useLayoutEffect } from "react";
import "./navbar.css";
import { yellowtail } from "@/assets/fonts/fonts";
import Link from "next/link";
import { links } from "../../../state/routes/routes";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const isActive = usePathname();
  const activeNav = "active-nav";

  const [isNavShowing, setIsNavShowing] = useState(false);

  // useLayoutEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     document.querySelector("nav")?.classList.toggle("window-scrolled"),
  //       window.scrollY > 0;
  //   });
  // }, []);

  return (
    <nav>
      <div className="container nav__container">
        <Link href="/" className="nav__logo">
          <div className={yellowtail.className}>DENISCLEY MARFRAN.</div>
        </Link>

        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <Link
                  href={path}
                  className={isActive === path ? activeNav : ""}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  <div>{name}</div>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="nav__socials">
          <li>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DeniscleyMAF">
              <RiTwitterXFill />
            </a>
          </li>
        </ul>

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
