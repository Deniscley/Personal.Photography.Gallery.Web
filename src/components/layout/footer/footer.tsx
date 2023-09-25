"use client";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiThreadsFill, RiTwitterXFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { yellowtail } from "@/assets/fonts/fonts";

export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo">
        <div className={yellowtail.className}>DENISCLEY MARFRAN</div>
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/galeria">Galeria</a>
        </li>
        <li>
          <a href="/exibicoes">Exibições</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/deniscley.marfran">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/deniscleymarfran/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/DeniscleyMAF">
          <RiTwitterXFill />
        </a>
        <a href="https://www.threads.net/@deniscleymarfran">
          <RiThreadsFill />
        </a>
        <a href="https://www.youtube.com/@DeniscleyMarfran">
          <AiFillYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Deniscley Marfran. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
