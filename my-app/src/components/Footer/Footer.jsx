import React, { useState } from "react";
import {
  FaViber,
  FaTelegram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaEnvelope,
} from "react-icons/fa";
import css from "./Footer.module.css";
import axios from "axios";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmite = async (e) => {
    e.preventDefault();

    const serviceID = "service_7ktkszr";
    const templateID = "template_xb34ooe";
    const publicKey = "3kJzSAR1yKsS_S6I_";

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Stas",
        message: message,
        phone: phone,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {}
  };

  return (
    <div className={css.section}>
      <footer className={css.footer} onSubmit={handleSubmite}>
        <div className={css.footer__container}>
          <div className={css.footer__title}>
            <h2>Зв’язатися з нами</h2>
          </div>
          <form className={css.main__form}>
            <div className={css.form__row}>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Ім’я"
                  type="type"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Email"
                  type="type"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={css.full_name}>
                <input
                  className={css.contactus}
                  placeholder="Номер телефону"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={css.full_name}>
                <ul className={css.social__list}>
                  <li className={css.social__item}>
                    <a
                      href="viber://chat?number=%2B380972985641"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaViber />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a href="https://t.me" target="_blank" rel="noreferrer">
                      <FaTelegram />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className={css.social__item}>
                    <a
                      href="https://wa.me/380972985641"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.form__row}>
              <div className={css.form__message}>
                <textarea
                  className={css.contactus1}
                  placeholder="Повідомлення"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className={css.btnfeedback}>
                <button className={css.btnfeedback__send}>Надіслати</button>
              </div>
            </div>
          </form>
          <div className={css.footer__info}>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}> ARI CO</h3>
              <address className={css.footer__address}>
                <ul className={css.contacts__list}>
                  <li className={css.contacts__item}>
                    <a
                      className={css.contacts__link}
                      href="https://goo.gl/maps/EFtCu6V2eu7CJHa77"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={css.contacts__icon}>
                        <FaMapMarkerAlt size="30px" />
                      </span>
                      Київська обл., м.Бровари, вул.Сергія Москаленка, буд.16
                    </a>
                  </li>
                  <li className={css.contacts__item}>
                    <a className={css.contacts__link} href="tell:+380972985641">
                      <span className={css.contacts__icon}>
                        <FaPhoneVolume size="30px" />
                      </span>
                      +38 097 298 56 41
                    </a>
                  </li>
                  <li className={css.contacts__item}>
                    <a
                      className={css.contacts__link}
                      href="mailto:buhsn@ukr.net"
                    >
                      <span className={css.contacts__icon}>
                        <FaEnvelope size="30px" />
                      </span>{" "}
                      ari_ko@ukr.net
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}> Розділи</h3>
              <ul className={css.contacts__list}>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Про нас
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Товари
                  </a>
                </li>
                <li className={css.useful__item}>
                  <a className={css.useful__link} href="/">
                    Наші контакти
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.footer__contacts}>
              <h3 className={css.foter__title}>Графік роботи</h3>
              <ul className={css.contacts__list}>
                <li className={css.schedule__item}>Понеділок - Пятниця</li>
                <li className={css.schedule__item}>9.00-18.00</li>
                <li className={css.schedule__item}>Субота - Неділя</li>
                <li className={css.schedule__item}>Вихідні</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
