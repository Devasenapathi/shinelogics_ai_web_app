import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const PortfolioDetailsContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="pd-preview-img">
            <Image
              src={portfolioDedailsImg}
              alt="Portfolio Img"
              width={1320}
              height={100}
            />

            <div className="video-box">
              <div onClick={() => setToggler(!toggler)} className="video-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>

          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Client</h4>
              <span>James Anderson</span>
            </div>

            <div className="single-info-box">
              <h4>Category</h4>
              <span>Mobile Apps</span>
            </div>

            <div className="single-info-box">
              <h4>Date</h4>
              <span>February 28, 2022</span>
            </div>

            <div className="single-info-box">
              <h4>Share</h4>
              <ul className="social">
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
                  <a href="https://www.linkedin.com/" target="_blank">
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

            <div className="single-info-box">
              <a href="#" className="default-btn" target="_blank">
                Live Preview
              </a>
            </div>
          </div>

          <div className="portfolio-desc style-2">
            <h3>Client Overview</h3>

            <p>
              The Hindu, one of India's leading newspapers, has continuously
              adapted to the digital age by enhancing its online presence. As
              part of its ongoing efforts to stay competitive in the rapidly
              changing digital landscape, The Hindu sought to upskill its
              development team with modern technologies to improve its digital
              platforms and deliver more seamless user experiences.
            </p>

            <h3>Challenge</h3>
            <p>
              To keep pace with technological advancements, The Hindu needed to
              equip its development team with skills in modern, scalable backend
              technologies. The goal was to enable the team to build efficient,
              real-time applications that could handle the growing demands of
              digital news platforms.
            </p>

            <h3>Solution</h3>
            <p>
              ShineLogics partnered with The Hindu to provide comprehensive
              training in Node.js and Express.js, two of the most powerful
              technologies for building fast, scalable backend applications.
              ShineLogics designed a tailored training program for The Hindu’s
              developers, covering key concepts such as server-side programming,
              RESTful APIs, and dynamic content management.
            </p>

            <p>
              To ensure practical learning, the training included the creation
              of a mini news app, a lightweight prototype replicating real-time
              news updates. This hands-on project allowed the team to implement
              their newly learned skills by building an application that could
              handle live data, display news headlines, and interact with users
              in an intuitive way.
            </p>

            <h3>Outcome</h3>
            <p>
              The outcome of this partnership was a fully functional mini news
              app built entirely by The Hindu’s development team. This app
              served as both a training exercise and a prototype, demonstrating
              the capabilities of Node.js and Express.js for building dynamic,
              real-time web applications. The team’s newfound skills in backend
              development have enabled them to create scalable and
              high-performance digital products moving forward.
            </p>

            <p>
              By completing this project, The Hindu's development team gained a
              solid foundation in modern web technologies, allowing them to
              create more efficient, scalable, and future-ready applications for
              the evolving digital media space.
            </p>

            <p>
              This partnership has laid the groundwork for The Hindu to continue
              its digital transformation, equipping its teams with the tools and
              knowledge needed to meet the challenges of the modern media
              landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
