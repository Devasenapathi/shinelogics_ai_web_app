import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service.jpg";

const ServiceDetailsContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <Image
                  src={singleServiceImg}
                  alt="image"
                  width={1250}
                  height={700}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Services Description</h2>
                <p>
                  At Shinelogics, we specialize in building tailored software,
                  mobile apps, and websites to meet the unique needs of your
                  business. From initial concept to final deployment, we deliver
                  high-performance, scalable, and secure solutions that
                  streamline operations, enhance user engagement, and drive
                  innovation.
                </p>
                <h3>Our Services:</h3>
                <ul>
                  <li>
                    Software Building: Custom, high-performance software
                    solutions optimized for efficiency, scalability, and
                    security to drive business growth.
                  </li>
                  <li>
                    App Building: Mobile apps for iOS and Android that are
                    user-friendly, engaging, and optimized for performance and
                    scalability.
                  </li>
                  <li>
                    Website Building: Responsive, visually appealing websites
                    designed for an intuitive user experience and optimized for
                    conversions.
                  </li>
                </ul>

                <h3>Our Approach:</h3>

                <ul>
                  <li>
                    Discovery & Consultation: We understand your goals, target
                    audience, and technical requirements to guide development.
                  </li>
                  <li>
                    Planning & Strategy: We create a tailored strategy, define
                    the scope, set timelines, and establish milestones.
                  </li>
                  <li>
                    Design & Prototyping: Our design team crafts wireframes,
                    mockups, and prototypes that align with your brand and user
                    journey.
                  </li>
                  <li>
                    Development: Using the latest technologies, we build
                    scalable, secure, and optimized solutions.
                  </li>
                  <li>
                    Testing & QA: Thorough testing ensures your solution is
                    reliable, secure, and ready for launch.
                  </li>
                  <li>
                    Deployment & Launch: We deploy the solution and assist with
                    adjustments for a smooth launch.
                  </li>
                  <li>
                    Ongoing Support & Maintenance: Post-launch support ensures
                    continued performance and adaptation to new needs.
                  </li>
                </ul>

                <h3>Why Choose Shinelogics?</h3>

                <ul>
                  <li>
                    Tailored Solutions: Custom designs to fit your business
                    needs.
                  </li>
                  <li>
                    Expert Team: Skilled developers and designers delivering
                    high-quality results.
                  </li>
                  <li>
                    End-to-End Services: From strategy to ongoing support, we
                    handle it all.
                  </li>
                  <li>
                    Performance & Security: Scalable, secure solutions optimized
                    for growth.
                  </li>
                  <li>
                    Client-Centric Approach: Close collaboration to bring your
                    vision to life.
                  </li>
                </ul>

                <p>
                  Contact us today to discuss how we can create a digital
                  solution that drives success for your business.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Our Working Process</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </li>
                  <li>
                    Creative Team Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                  </li>
                  <li>
                    Branding But I must explain to you how all this mistaken
                    idea of denouncing.
                  </li>
                  <li>
                    Clean Code At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui.
                  </li>
                  <li>
                    UX/UI Friendly On the other hand, we denounce with righteous
                    indignation.
                  </li>
                  <li>
                    24/7 Support There are many variations of passages of Lorem
                    Ipsum available.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
