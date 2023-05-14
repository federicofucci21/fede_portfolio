import style from "./projectCard.module.css";
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";


export default function projectCard({
  tittle,
  img,
  dev,
  description,
  tecnologies,
  github,
  demo,
}: {
  tittle: string;
  img: string;
  dev: string;
  description: {english:string, spanish:string };
  tecnologies: string;
  github: string;
  demo: string;
}) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useSelector((state: RootState) => state.theme.theme);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lang = useSelector((state: RootState) => state.lang.lang);

  return (
    <div className={theme === "light" ? style.card : style.cardD}>
      <div className={theme === "light" ? style.tittle : style.tittleD}>{tittle}</div>
      <div className={theme === "light" ? style.dev : style.devD}>{dev}</div>
      <div className={style.imgCont}>
        <img className={theme === "light" ? style.img : style.imgD} src={img} alt="img Not found" />
      </div>
      <div className={theme === "light" ? style.description : style.descriptionD}>
        {lang === "english" ? description.english : description.spanish}
        </div>
      <div className={theme === "light" ? style.tecnologies : style.tecnologiesD}>{tecnologies}</div>
      <div className={theme === "light" ? style.link : style.linkD}>
        <a href={github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}
