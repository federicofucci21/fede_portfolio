import { contact } from "../../assets/contact/contact";
import style from "./contact.module.css";
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";

export default function Contacts() {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme === "light" ? style.contact : style.contactD} id="contact">
      <section className={style.section}>
        <div className={style.contacts}>
          {contact.map((e) => (
            <div className={theme === "light" ? style.contactsDiv : style.contactsDivD}>
              <a href={e.url} target="_blank" rel="noreferrer">
                <img src={e.img} alt={e.name} />
                <p>{e.name}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
