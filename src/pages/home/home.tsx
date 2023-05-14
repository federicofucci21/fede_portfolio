import style from "./home.module.css";
import CV from "../../assets/cv/Cv Federico Eloy Fucci 2023.pdf";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { parraf_text } from "../../assets/home/homeText";

export default function Home() {
  const lang = useSelector((state: RootState) => state.lang.lang);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme === "light" ? style.home : style.homeD} id="up">
      <span className={theme === "light" ? style.tittle : style.tittleD}>
        <h1>Federico Fucci</h1>
        <h3>
          //{" "}
          {lang === "english"
            ? "Full Stack Web Developer"
            : "Desarrollador Web Full Stack"}{" "}
          //
        </h3>
        <a
          className={theme === "light" ? style.linkCv : style.linkCvD}
          href={CV}
          download="CV-Federico Eloy Fucci"
        >
          {lang === "english" ? "Download CV" : "Descargar CV"}
        </a>
      </span>
      <span className={theme === "light" ? style.parraf : style.parrafD}>
        <p>
        {lang === 'english' ? parraf_text.english : parraf_text.spanish}
        </p>
      </span>
    </div>
  );
}
