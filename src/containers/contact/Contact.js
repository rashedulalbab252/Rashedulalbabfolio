import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>

            <div className="contact-content-wrapper">
              <div className="contact-info-container">
                <div className={isDark ? "contact-card dark" : "contact-card"}>
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                  </div>
                </div>

                {contactInfo.number && (
                  <div className={isDark ? "contact-card dark" : "contact-card"}>
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Phone</h4>
                      <a href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                    </div>
                  </div>
                )}

                <div className="contact-social-div">
                  <p>Follow me on</p>
                  <SocialMedia />
                </div>
              </div>

              <div className={isDark ? "contact-form-container dark" : "contact-form-container"}>
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="contact-button">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
