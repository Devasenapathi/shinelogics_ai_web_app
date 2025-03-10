import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/about-img2.jpg";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    At ShineLogics, we’re passionate about being your trusted
                    partner in Product Development as a Service (PDaaS). Our
                    mission is simple: to empower your business with innovative,
                    custom solutions that address the unique challenges you face
                    in an ever-changing tech landscape. We understand the
                    importance of digital transformation, and we’re here to help
                    you scale effectively, stay ahead of the competition, and
                    unlock new opportunities with cutting-edge technology. Your
                    success is our priority, and we’re committed to guiding you
                    through every step of the journey.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    At ShineLogics, we empower businesses with innovative IT
                    solutions and tailored digital transformations. From product
                    development to ERP and big data, we help you streamline
                    operations and drive growth with secure, customizable
                    systems. Our mission is to simplify your journey into the
                    digital age, unlocking new opportunities for success.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    ShineLogics began in 2012 as a training institute,
                    transitioning to a service company with 30 employees by
                    2015. By 2018, we expanded into product development with a
                    team of 50, and in 2022, we introduced PDAAS with 100
                    employees. Looking forward to 2025, we aim to revolutionize
                    our PDAAS and services with AI-driven solutions for enhanced
                    innovation and growth.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Lead Digital Transformation - Lead digital transformation
                      by leveraging IoT, big data, and mobile technologies.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Deliver Seamless and Scalable ERP Solutions - Provide
                      scalable, user-friendly ERP systems to streamline business
                      operations.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Optimize Data Engineering and Analytics - Unlock valuable
                      insights through tailored data engineering and analytics
                      solutions.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Enhance Mobility and User Experience - Develop
                      high-performance mobile apps that enhance business
                      mobility and user experience.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Promote Sustainable Business Growth - Enable sustainable
                      business growth with advanced, cost-effective solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
