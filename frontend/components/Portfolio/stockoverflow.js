import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const StockOverflow = () => {
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
              StockOverFlow is an advanced inventory management software
              designed to help businesses efficiently track and manage their
              stock. Aimed at businesses of all sizes, the platform streamlines
              inventory processes, reduces waste, and provides real-time
              insights into inventory levels, sales trends, and demand
              forecasting.
            </p>

            <h3>Challenge</h3>
            <p>
              The client struggled with manual inventory management, which led
              to errors, stock-outs, and overstocking issues. They needed a
              solution that automated inventory tracking, provided real-time
              updates, and was scalable to meet the growing demands of their
              business. The system also had to be user-friendly and integrate
              with other business systems.
            </p>

            <h3>Solution</h3>
            <p>
              ShineLogics worked closely with StockOverFlow to develop a
              comprehensive inventory management platform with the following key
              features:
            </p>

            <ul>
              <li>
                <strong>Real-Time Tracking:</strong> Stock levels are updated
                automatically as products are sold or restocked, helping
                businesses maintain optimal inventory levels and avoid
                stock-outs and overstocking.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> A simple, intuitive
                design ensured that the system was easy for staff to use,
                reducing the need for extensive training.
              </li>
              <li>
                <strong>Automated Alerts:</strong> Businesses received
                notifications for low stock levels, product expirations, and
                reorders, improving inventory management and reducing manual
                intervention.
              </li>
              <li>
                <strong>Reporting & Analytics:</strong> Detailed reports and
                analytics provided businesses with valuable insights into sales
                performance, inventory trends, and product demand, aiding in
                data-driven decision-making.
              </li>
              <li>
                <strong>Seamless Integration:</strong> The software integrated
                easily with other business systems, including sales and
                accounting platforms, creating a unified solution for business
                management.
              </li>
            </ul>

            <h3>Outcome</h3>
            <p>
              The implementation of StockOverFlow significantly improved
              inventory management processes for businesses using the platform.
              Key outcomes included:
            </p>

            <ul>
              <li>
                <strong>Increased Efficiency:</strong> Automation and real-time
                tracking reduced manual inventory checks and minimized errors.
              </li>
              <li>
                <strong>Better Decision-Making:</strong> Data-driven insights
                allowed businesses to forecast demand and optimize stock levels.
              </li>
              <li>
                <strong>Scalability:</strong> The platform was ready to scale as
                the business grew, handling higher volumes and additional
                product offerings.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              ShineLogics successfully delivered a comprehensive inventory
              management solution with StockOverFlow, enabling businesses to
              operate more efficiently and scale with ease. The platform’s
              automation, real-time tracking, and powerful analytics have made
              inventory management faster, more accurate, and more insightful,
              helping businesses save time and reduce costs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockOverflow;
