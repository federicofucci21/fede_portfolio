import style from "./skills.module.css"
import { technologies } from "../../assets/technologies/technologies";

export default function Skills() {
  return (
    <div className={style.skills} id="techstack">
      <section className={style.section}>
        <div className={style.cards}>
          {technologies.map((e) => (
            <div className={style.divCard}>
              <img className={style.imgCard} src={e.url} alt={e.name} />
              <p className={style.pCard}>{e.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  }
  