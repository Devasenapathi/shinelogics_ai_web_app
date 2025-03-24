import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const PythonServiceDetailsContent = () => {
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
                  Python is a high-level, interpreted programming language known
                  for its simplicity, readability, and versatility. It is widely
                  used in web development, data science, machine learning,
                  automation, and more.
                </p>
                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>Fast Development:</strong> Python’s simple syntax
                    accelerates development cycles.
                  </li>
                  <li>
                    <strong>Versatility:</strong> Ideal for a wide range of
                    applications, from web to scientific computing.
                  </li>
                  <li>
                    <strong>Large Community:</strong> A strong community offers
                    extensive support, resources, and third-party packages.
                  </li>
                  <li>
                    <strong>Integration:</strong> Easily integrates with other
                    languages and technologies.
                  </li>
                </ul>

                <h3>When to Use React.js:</h3>

                <ul>
                  <li>
                    <strong>Web Development:</strong> Build scalable and secure
                    web apps using frameworks like Django and Flask.
                  </li>
                  <li>
                    <strong>Data Science and Analytics:</strong> Ideal for
                    processing and analyzing large datasets.
                  </li>
                  <li>
                    <strong>Machine Learning and AI:</strong> Widely used in AI
                    development with libraries like TensorFlow and PyTorch.
                  </li>
                  <li>
                    <strong>Automation:</strong> Automate tasks and streamline
                    workflows with Python’s simplicity.
                  </li>
                </ul>

                <p>
                  At Shinelogics, we use Python to develop efficient, scalable,
                  and data-driven applications for our clients.
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

export default PythonServiceDetailsContent;
