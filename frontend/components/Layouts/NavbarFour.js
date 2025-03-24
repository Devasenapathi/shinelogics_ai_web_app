import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo-white-trans.png";

const NavbarFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area bg-white">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={150} height={40} />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/service-details/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Web & Mobile App
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/iot/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        IOT
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/cyberSecurity/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Cyber Security
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/dataAnalysis/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Data Analytics
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/seo/"
                        className={`nav-link ${
                          currentPath == "/services/service-details/" &&
                          "active"
                        }`}
                      >
                        SEO
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Technology
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Portfolio <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/portfolio/farm2bag/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        E-Commerce
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/keerthipumps/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details/" &&
                          "active"
                        }`}
                      >
                        ERP
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Careers
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about/"
                        className={`nav-link ${
                          currentPath == "/about/" && "active"
                        }`}
                      >
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/service-details/"
                        className={`nav-link ${
                          currentPath == "/services/service-details/" &&
                          "active"
                        }`}
                      >
                        Services Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details/" &&
                          "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact-us/"
                        className={`nav-link ${
                          currentPath == "/contact-us/" && "active"
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/blog/"
                        className={`nav-link ${
                          currentPath == "/blog/" && "active"
                        }`}
                      >
                        Blog Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog2/"
                        className={`nav-link ${
                          currentPath == "/blog2/" && "active"
                        }`}
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog3/"
                        className={`nav-link ${
                          currentPath == "/blog3/" && "active"
                        }`}
                      >
                        Blog Left Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog/blog-details/"
                        className={`nav-link ${
                          currentPath == "/blog/blog-details/" && "active"
                        }`}
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link
                    href="/contact-us/"
                    className={`nav-link ${
                      currentPath == "/contact-us/" && "active"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary">
                  Get Started
                </Link>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarFour;
