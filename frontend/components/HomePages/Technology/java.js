import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const JavaServiceDetailsContent = () => {
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
            <div className="col-lg-12 col-md-12">
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
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Technology Description</h2>
                <p>
                  Java is a widely-used, object-oriented programming language
                  known for its platform independence, reliability, and
                  scalability. It’s a popular choice for building
                  enterprise-level applications, web apps, mobile apps, and
                  backend services.
                </p>
                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>Scalability:</strong> Java is ideal for large-scale
                    applications requiring high performance.
                  </li>
                  <li>
                    <strong>Reliability:</strong> Strong memory management and
                    error handling make Java applications stable and robust.
                  </li>
                  <li>
                    <strong>Large Ecosystem:</strong> A vast collection of
                    frameworks, tools, and libraries accelerates development.
                  </li>
                  <li>
                    <strong>Community Support:</strong> Extensive community and
                    resources, making development faster and easier.
                  </li>
                </ul>

                <h3>When to Use Java:</h3>

                <ul>
                  <li>
                    <strong>Enterprise Applications:</strong> Perfect for large,
                    complex systems (e.g., banking, finance).
                  </li>
                  <li>
                    <strong>Web and Mobile Applications:</strong> Java powers
                    many backend systems and Android mobile apps.
                  </li>
                  <li>
                    <strong>Real-Time Systems:</strong> Suitable for
                    applications requiring concurrent processing, like stock
                    trading platforms.
                  </li>
                </ul>

                <p>
                  At Shinelogics, we use Java for building secure, scalable, and
                  high-performance applications to meet our clients’ needs.
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

export default JavaServiceDetailsContent;
