import style from "./skills.module.css"
import { technologies } from "../../assets/technologies/technologies";
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";

export default function Skills() {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme === "light" ? style.skills : style.skillsD} id="techstack">
      <section className={style.section}>
        <div className={style.cards}>
          {technologies.map((e) => (
            <div className={style.divCard}>
              <img className={theme === "light" ? style.imgCard : style.imgCardD} src={e.url} alt={e.name} />
              <p className={theme === "light" ? style.pCard : style.pCardD}>{e.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  }
  