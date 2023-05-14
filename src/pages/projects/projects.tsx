import { dataProjects } from "../../assets/projects/projects";
import ProyectCard from "../../components/projectCard/projectCard";
import style from "./projects.module.css"

export default function Projects() {
  return (
    <div className={style.div} id="projects">
      {dataProjects.map((e) => (
        <div className={style.card}>
          <ProyectCard
            tittle={e.tittle}
            img={e.img}
            dev={e.dev}
            description={e.description}
            tecnologies={e.tecnologies}
            github={e.github}
            demo={e.demo}
          />
        </div>
      ))}
    </div>
  );
}
