import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const NextServiceDetailsContent = () => {
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
                  Next.js is an open-source React framework that simplifies
                  building fast, scalable, and SEO-friendly web applications.
                  Developed by Vercel, it offers features like server-side
                  rendering, static site generation, and automatic code
                  splitting.
                </p>
                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>SEO-Friendly:</strong> Supports server-side
                    rendering for better search engine indexing.
                  </li>
                  <li>
                    <strong>Fast Performance:</strong> Automatic performance
                    optimizations for faster page loads.
                  </li>
                  <li>
                    <strong>Scalable:</strong> Easily handles large applications
                    with features like incremental static regeneration.
                  </li>
                  <li>
                    <strong>Cross-Platform:</strong> Supports both web and
                    mobile app development.
                  </li>
                </ul>

                <h3>When to Use Next.js:</h3>

                <ul>
                  <li>
                    <strong>Building SEO-Optimized Websites:</strong> Improves
                    search engine visibility with server-side rendering.
                  </li>
                  <li>
                    <strong>Developing High-Performance Applications:</strong>{" "}
                    Ensures fast load times and smooth user experience.
                  </li>
                  <li>
                    <strong>Creating Full-Stack Apps:</strong> Seamlessly
                    integrates frontend and backend functionalities.
                  </li>
                  <li>
                    <strong>Building Content-Heavy Websites:</strong> Optimized
                    for fast, dynamic rendering of large amounts of data.
                  </li>
                </ul>

                <p>
                  Next.js is a powerful framework for building fast, responsive,
                  and scalable web applications. At Shinelogics, we use Next.js
                  to deliver high-quality web experiences for our clients.
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

export default NextServiceDetailsContent;
