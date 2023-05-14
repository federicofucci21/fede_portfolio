import style from "./navbar.module.css";
import memoji1 from "../../img/emoji/memoji1.png";
import arrow_navBar from "../../img/arrow_navBar.png";
import { useState } from "react";
import { img_text } from "../../assets/home/homeText";
import { IoIosPower } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../redux/store";
import { changeTheme } from "../../redux/reducer/themeReducer";
import { changeLang } from "../../redux/reducer/langReducer";

export default function Navbar() {
  const [imgCheck, setImgCheck] = useState(true);
  const lang = useSelector((state: RootState) => state.lang.lang);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [menu, setMenu] = useState(true);

  const dispatch = useDispatch();

  // eslint-disable-next-line no-constant-condition
  const toggleImg = (imgCheck: boolean) => {
    if (imgCheck) {
      return setImgCheck(false);
    }
    return setImgCheck(true);
  };

    // eslint-disable-next-line no-constant-condition
    const toggleMenu = (menu: boolean) => {
      if (menu) {
        return setMenu(false);
      }
      return setMenu(true);
    };

  return (
    <div className={theme === "light" ? style.navbar : style.navbarD}>
      <div>
        <input
          type="checkbox"
          id="imgCheck"
          checked={imgCheck}
          className={style.img__input}
        />

        <img
          className={imgCheck === false ? style.img : style.imgStop}
          alt="FOTO"
          src={memoji1}
        />
        <div className={style.arrowDiv}>
          <img className={style.imgArrow} alt="FOTO" src={arrow_navBar} />
          <h5 className={theme === "light" ? style.textArrow : style.textArrowD} onClick={() => toggleImg(imgCheck)}>
            {imgCheck === false ? img_text.english.move : img_text.english.stop}
          </h5>
        </div>
      </div>
      <label
        htmlFor="menu"
        onClick={() => toggleMenu(menu)}
        className={style.nav__label}
      >
        <div
          className={theme === "light" ? style.btn_hmb : style.btn_hmbD}
          id="btn_hmb"
        >
          <div
            className={theme === "light" ? style.linea1 : style.linea1D}
            id="linea1"
          />
          <div
            className={theme === "light" ? style.linea2 : style.linea2D}
            id="linea2"
          />
          <div
            className={theme === "light" ? style.linea3 : style.linea3D}
            id="linea3"
          />
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={menu}
        className={style.nav__input}
      />

      <div className={theme === "light" ? style.linksSection : style.linksSectionD}>
        <a
          href="/#up"
          // onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          Home
        </a>
        <a
          href="/#contact"
          // onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "english" ? "Contact" : "Contacto"}
        </a>
        <a
          href="/#techstack"
          // onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "english" ? "Tech Stack" : "Tech Stack"}
        </a>
        <a
          href="/#projects"
          // onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "english" ? "Proyects" : "Proyectos"}
        </a>
      </div>
      <section className={style.buttons}>
        <div
          className={theme === "light" ? style.switch : style.switchD}
          onClick={() => dispatch(changeTheme())}
        >
          <div>
            <IoIosPower
              className={theme === "light" ? style.btnTheme : style.btnThemeD}
            />
          </div>
        </div>
        <div
          className={theme === "light" ? style.switchLang : style.switchLangD}
          onClick={() => dispatch(changeLang())}
        >
          <div>{lang === "english" ? "En" : "Es"}</div>
        </div>
      </section>
    </div>
  );
}
