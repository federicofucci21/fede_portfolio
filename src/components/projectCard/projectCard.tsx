// import { Card } from "antd";
import style from "./projectCard.module.css"
// import { useNavigate } from "react-router-dom";

// const { Meta } = Card;

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
  description:string;
  tecnologies:string;
  github:string;
  demo:string;
}) {
  console.log('IMG', img);

//   const navigate = useNavigate();
//   const goTo = () => {
//     navigate(`${btnSrc}`);
//     window.scrollTo(0, 0);
//   };

  return (
    <div className={style.card}>
        <div className={style.tittle}>{tittle}</div>
        <div className={style.dev}>{dev}</div>
        <div className={style.imgCont}><img className={style.img} src={img} alt="img Not found" /></div>
        <div className={style.description}>{description}</div>
        <div className={style.tecnologies}>{tecnologies}</div>
        <div className={style.link}>
        <a  href={github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}