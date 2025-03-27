import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="Logo" width={150} height={40} />
                  </Link>
                </div>

                <p>
                  ShineLogics.ai is a cutting-edge technology solutions provider
                  specializing in AI, software development, and digital
                  transformation - add this as one liner in the bottom of the
                  screen.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about/">About</Link>
                  </li>
                  <li>
                    <Link href="/services/">Services</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/team/">Team</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget ml-4"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing/">
                      Pricing
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/faq/">
                      Faq
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/privacy-policy/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions/">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    224, Kamakoti Nagar, 1st Main Road,Pallikaran, Chennai,
                    Tamilnadu.
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+91-9500037221">+91-9500037221</a>
                    <br />
                    <a href="tel:+91-9994137221">+91-9994137221</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:sen@shinelogics.com">sen@shinelogics.com</a>
                    <a href="mailto:info@shinelogics.com">
                      info@shinelogics.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Shinelogics. All Rights Reserved By{" "}
              <a href="https://envytheme.com" target="_blank">
                Shinelogics Informatics
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
