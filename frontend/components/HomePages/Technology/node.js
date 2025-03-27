import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const NodeServiceDetailsContent = () => {
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
                <h2>Technology Description</h2>
                <p>
                  Node.js is an open-source, cross-platform JavaScript runtime
                  built on the V8 engine, designed for building fast, scalable
                  server-side applications. Its event-driven, non-blocking I/O
                  model enables handling multiple requests concurrently, making
                  it ideal for real-time, I/O-intensive tasks like web servers
                  and APIs.
                </p>
                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>Real-Time Applications:</strong> Great for chat,
                    gaming, and live updates.
                  </li>
                  <li>
                    <strong>Scalable:</strong> Handles numerous concurrent
                    connections with ease.
                  </li>
                  <li>
                    <strong>Fast Development:</strong> Use JavaScript for both
                    front-end and back-end.
                  </li>
                  <li>
                    <strong>High Performance:</strong> Optimized for
                    high-throughput and low-latency applications.
                  </li>
                </ul>

                <h3>When to Use Node.js:</h3>

                <ul>
                  <li>
                    <strong>Real-Time Applications:</strong> (e.g., chat,
                    gaming)
                  </li>
                  <li>
                    <strong>RESTful APIs</strong>
                  </li>
                  <li>
                    <strong>Single-Page Applications (SPAs)</strong>
                  </li>
                  <li>
                    <strong>Microservices</strong>
                  </li>
                </ul>

                <p>
                  At Shinelogics, we use Node.js to build fast, scalable, and
                  efficient back-end systems that power seamless web
                  applications.
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

export default NodeServiceDetailsContent;
