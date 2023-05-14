import countriesapp from "../../img/projects/countriesapp.png";
import caneapp from "../../img/projects/caneapp.png";
import bacofusion from "../../img/projects/BacoFusion.png";
import alkemy from "../../img/projects/alkemy.png";
import workinprogess from "../../img/projects/workinprogess.jpg";

export const dataProjects = [
  {
    tittle: "Cane - Admin Dashboard",
    dev: "Full-Stack",
    img: workinprogess,
    demo: "https://github.com/federicofucci21",
    github: "https://github.com/federicofucci21/caneadm",
    description: {
      english:  "Admin dashboard designed with NestJs using Typescript.It is the dashboard necessary to store and save all of information about clients, products and orders of 'Cane Medallones Vegetarianos' e-commerce.",
      spanish: "Tablero de administrador desarrollado en NextJs usando TypeScript. Aplicacion necesario para administrar y guardar toda la informacion necesario de clientes, productos y ordenes, de 'Cané Medallones Vegetarianos'",
    },
    tecnologies: "NestJs / MySql / TypeORM / TypeScript / JavaScript / SCRUM",
  },
  {
    tittle: "Baco Fusión",
    dev: "Front-End",
    img: bacofusion,
    demo: "https://bacofusion.vercel.app/",
    github: "https://github.com/federicofucci21/Baco-Fusion-App",
    description: {
      english:  "Web page developed for BACO restaurant palced on Entre Rios. Includes landing page with an advertisements carousel, photo-galery, a complete menu-page with auto-scroll, booking page with integrated whatsapp and googlemaps",
      spanish: "Pagina web desarrollada para el restaurant BACO ubicado en la provincia de Entre Rios. Incluye pagina de bienvenida con carrusel de publicidades, galeria de fotos, pagina de menu con auto-scroll, pagina de reservas con whatsapp y google-maps.",
    },
    tecnologies:
      "ReactJS / Redux Toolkit / Ant Desing / Boostrap / TypeScript / JavaScript / SCRUM",
  },
  {
    tittle: "Alkemy Wallet",
    dev: "Back-End",
    img: alkemy,
    demo: "https://github.com/federicofucci21",
    github: "https://github.com/AgustinCanteros/grupo-n-2",
    description: {
      english:  "Wallet developed by using NodeJs as runtime, MySql as database, Sequelize as ORM.",
      spanish: "Wallet desarrollada utilizando NodeJs, MySql como base de datos, Sequelize como ORM.",
    },
    tecnologies:
      "NodeJs / MySql / Sequelize / Swagger / ExpressJS / JavaScript / SCRUM",
  },

  {
    tittle: "Countries-App",
    dev: "Full-Stack",
    img: countriesapp,
    demo: "https://countries-app-one-kohl.vercel.app/",
    github: "https://github.com/federicofucci21/PI-Countries-Henry",
    description: {
      english:  "Individual Proyect from Henry. This app takes data from an external API and shows in form of cards  info for each country. Beside you can create activitias and vinculate with countries. Filters and orders for cards.",
      spanish: "Proyecto Individual para Henry. Esta aplicacion toma información de una API externa y muestra en forma de cartas la informacion de cada pais. Ademas, se puede crear actividades y vincularlas con cada pais. Filtrado y ordenamiento de cartas.",
    },
    tecnologies:
      "ReactJS / Redux / Css / NodeJS / ExpressJS / Sequelize / PostgreSQL / JavaScript",
  },
  {
    tittle: "Cane-App",
    dev: "Full-Stack",
    img: caneapp,
    demo: "https://cane-food.vercel.app/",
    github: "https://github.com/federicofucci21/CaneFront",
    description: {
      english:  "E-Commerce developed for Cané Medallones Vegetarianos. SingUp. Login. Roles. Administer DashBoard. Payments. Cart.",
      spanish: "E-Commerce desarrollado para Cané Medallones Vegetarianos. Registro. Loggeo. Tablero de aministrador. Pasarella de pagos. Carrito",
    },
    tecnologies:
      "ReactJS / Redux / Ant Desing / Boostrap / NodeJS / ExpressJS / Sequelize / PostgreSQL / JavaScript / SCRUM",
  },
  {
    tittle: "Comming soon...",
    dev: "Full-Stack",
    img: workinprogess,
    demo: "https://federicofucci.vercel.app/",
    github: "https://github.com/federicofucci21",
    description: {
      english:  "Comming soon...",
      spanish: "Proximamente ...",
    },
    tecnologies: "Comming soon...",
  },
];
