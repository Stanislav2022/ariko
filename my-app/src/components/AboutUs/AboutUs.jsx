import React from "react";
import "./AboutUs.css";
import {
  FcDataEncryption,
  FcDataProtection,
  FcAcceptDatabase,
} from "react-icons/fc";

const AboutUs = () => {
  return (
    <section className="section">
      <div class="container">
        <div className="title__wrapper">
          <p className="text">
            Приватне підприємство «АРІ КО» з 2005 року виготовляє та реалізує
            якісну продукцію із деревини в країни Європи. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <ul className="desc__list">
          <li className="desc__item">
            <FcDataEncryption size="5em" />
            <h3 className="aboutus__title">Наша мета</h3>
            <p className="text">Cтати Вашим надійним бізнес-партнером.</p>
          </li>
          <li className="desc__item">
            <FcDataProtection size="5em" />
            <h3 className="aboutus__title">Ви отримаєте</h3>
            <p className="text">
              Cтовідсоткову упевненість в тому, що наша продукція відповідає
              усім відповідним стандартам.
            </p>
          </li>
          <li className="desc__item">
            <FcAcceptDatabase size="5em" />
            <h3 className="aboutus__title">Наші переваги</h3>
            <p className="text">
              Ми завжди проводимо контроль якості на всіх етапах виробництва.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
