import React from "react";
import { IconDeviceMobile, IconMail } from "@tabler/icons-react";
import "./_contact.scss";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>Contact Me</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconDeviceMobile width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Phone</h3>
                  <p>0333573607</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:quangminh2001.hust@gmail.com">
                    quangminh2001.hust@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
