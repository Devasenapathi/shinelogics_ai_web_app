import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const farm2bagPortfolioContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

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

          {/* <div className="service-details-info">
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
          </div> */}

          <div className="portfolio-desc style-2">
            <h3>Client Overview</h3>

            <p>
              Farm2Bag is a platform aimed at connecting farmers directly with
              consumers, providing fresh, farm-to-table produce at competitive
              prices. Their mission is to support local farmers while ensuring
              consumers have access to high-quality, fresh food. As the business
              grew, Farm2Bag needed a modern and intuitive frontend application
              to enhance the user experience and improve accessibility.
            </p>

            <h3>Challenge</h3>
            <p>
              Farm2Bag required a responsive and user-friendly frontend
              application that could efficiently serve both farmers and
              consumers. The platform needed to be accessible across different
              devices while offering a seamless, visually appealing, and fast
              browsing experience. The app needed to allow consumers to easily
              search and purchase products, while also enabling real-time
              updates on product availability and order tracking.
            </p>

            <h3>Solution</h3>
            <p>
              ShineLogics partnered with Farm2Bag to design and develop a
              responsive, modern frontend application that would meet the needs
              of both farmers and consumers.
            </p>

            <ul>
              <li>
                <strong>User-Centric Design:</strong> Developed a clean,
                intuitive interface, allowing consumers to easily browse
                products, place orders, and view real-time updates.
              </li>
              <li>
                <strong>Responsive Development:</strong> Optimized for desktops,
                tablets, and smartphones, ensuring a seamless experience across
                all devices.
              </li>
              <li>
                <strong>Backend Integration:</strong> Enabled real-time data
                synchronization for product availability, order tracking, and
                pricing, ensuring accurate and up-to-date information.
              </li>
              <li>
                <strong>Fast Performance:</strong> Optimized for speed, ensuring
                quick load times and a smooth user experience, even on slower
                internet connections.
              </li>
            </ul>

            <h3>Outcome</h3>
            <p>
              The collaboration led to the development of a highly responsive
              and user-friendly frontend application, improving the shopping
              experience for Farm2Bag’s customers.
            </p>

            <ul>
              <li>
                <strong>Improved User Engagement:</strong> The intuitive design
                and mobile responsiveness led to increased customer engagement
                and higher conversion rates.
              </li>
              <li>
                <strong>Efficiency and Customer Satisfaction:</strong> Consumers
                could browse, order, and track deliveries with ease, resulting
                in a more efficient buying process and greater customer
                satisfaction.
              </li>
              <li>
                <strong>Scalability:</strong> The frontend was built to scale
                with Farm2Bag’s growing product offerings, ensuring the app can
                evolve with the business.
              </li>
            </ul>

            <h3>Conclusion</h3>

            <p>
              ShineLogics’ work on the Farm2Bag frontend application helped
              create an engaging and efficient platform for consumers to access
              fresh, farm-to-table produce. The result was a responsive,
              high-performing application that enhanced customer satisfaction,
              improved efficiency, and is poised for future growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default farm2bagPortfolioContent;
