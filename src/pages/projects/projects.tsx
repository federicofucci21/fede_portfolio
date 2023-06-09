import { dataProjects } from "../../assets/projects/projects";
import ProyectCard from "../../components/projectCard/projectCard";
import style from "./projects.module.css"
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";

export default function Projects() {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme === "light" ? style.proyects : style.proyectsD} id="projects">
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
