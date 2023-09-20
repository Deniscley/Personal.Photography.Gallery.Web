"use client";
import { useLayoutEffect } from "react";
import "./navbar.css";
import { yellowtail } from "@/assets/fonts/fonts";
import Link from "next/link";
import { links } from "../../state/routes/routes";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav")?.classList.toggle("window-scrolled"),
        window.scrollY > 0;
    });
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <Link href="/" className="nav__logo">
          <div className={yellowtail.className}>DENISCLEY MARFRAN.</div>
        </Link>

        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <Link href={path}>
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

        <button className="nav__toggle-btn" id="nav__toggle-open">
          <FaBars />
        </button>
        <button className="nav__toggle-btn" id="nav__toggle-close">
          <MdOutlineClose />
        </button>
      </div>
    </nav>
  );
}
