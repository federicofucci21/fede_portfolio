import style from "./home.module.css"
import CV from "../../assets/cv/Cv Federico Eloy Fucci 2023.pdf"
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";

export default function Home() {

  const lang = useSelector((state: RootState) => state.lang.lang);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme === "light" ? style.home : style.homeD} id="up">

            <span className={theme === "light" ? style.tittle : style.tittleD}>
              <h1>Federico Fucci</h1>
              <h3>// Full Stack Web Developer //</h3>
              <a className={theme === "light" ? style.linkCv : style.linkCvD} href={CV} download="CV-Federico Eloy Fucci">
                {lang === 'english' ? 'Download CV' : 'Descargar CV'}
              </a>
            </span>
            <span className={theme === "light" ? style.parraf : style.parrafD}>
              <p>
                I am currently carrying out a clear objective: insert myself
                into IT world. That's why I took my first steps as a Full Stack
                Web Developer with Henry. My life experiences have given me
                great decision-making and leadership skills, as well as the need
                to test myself in changing situations and acquire essential
                knowledge on my own. I found in web development and the IT
                universe my true passion.
              </p>
            </span>

    </div>
  );
}
