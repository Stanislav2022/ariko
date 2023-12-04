import React from "react";

export default function Contacts() {
  return (
    <div>
      <div>
        <h3> Наша адреса</h3>
        <address>
          <ul>
            <li>
              <a
                href="https://goo.gl/maps/EFtCu6V2eu7CJHa77"
                target="_blank"
                rel="noreferrer"
              >
                Київська обл., м.Бровари, вул.Сергія Москаленка, буд.16
              </a>
            </li>
            <li>
              <a href="tell:+380980091004">+38 097 464 64 21</a>
            </li>
            <li>
              <a href="mailto:buhsn@ukr.net">ari_ko@ukr.net</a>
            </li>
          </ul>
        </address>
      </div>
    </div>
  );
}
