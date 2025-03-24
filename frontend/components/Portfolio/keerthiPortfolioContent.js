import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const keerthiPortfolioContent = () => {
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
              Keerthi Pumps is a leading industrial pump manufacturer that
              serves sectors such as agriculture, water treatment, and
              construction. With a focus on high-quality design and assembly,
              the company found its existing SAP system too complex and costly
              for their needs. They needed a streamlined solution for inventory
              management, stock control, and pump design that could integrate
              both their administrative processes and client-facing portal.
            </p>

            <h3>Business Challenges</h3>
            <p>
              To keep pace with technological advancements, The Hindu needed to
              equip its development team with skills in modern, scalable backend
              technologies. The goal was to enable the team to build efficient,
              real-time applications that could handle the growing demands of
              digital news platforms.
            </p>
            <ul>
              <li>
                <strong>Inefficient Inventory Management:</strong> SAP’s rigid
                structure caused data mismatches, leading to stock errors and
                delays.
              </li>
              <li>
                <strong>Complex Design & Assembly Processes:</strong> Tracking
                detailed pump designs and assembly requirements was cumbersome,
                affecting production efficiency.
              </li>
              <li>
                <strong>Disconnected Admin & Client Systems:</strong> Separate
                systems for internal management and customer portals led to
                inefficiencies and poor customer experience.
              </li>
              <li>
                <strong>Cost & Scalability:</strong> SAP was expensive and not
                easily scalable as the business expanded.
              </li>
            </ul>

            <h3>Solution</h3>
            <p>
              Shinelogics developed a tailored solution to replace SAP, focusing
              on ease of use, integration, and scalability. The system addressed
              the following key areas:
            </p>

            <ul>
              <li>
                <strong>Inventory & Stock Management</strong>
                <ul>
                  <li>
                    Real-time tracking of stock levels across multiple
                    locations.
                  </li>
                  <li>Automated reordering of parts to prevent stockouts.</li>
                  <li>
                    Full visibility of inventory for every department, reducing
                    errors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Pump Design & Assembly</strong>
                <ul>
                  <li>
                    Centralized design tracking with easy access to design
                    revisions.
                  </li>
                  <li>Alerts when required components are low in stock.</li>
                  <li>
                    Step-by-step assembly instructions integrated into the
                    system.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Admin Panel Management</strong>
                <ul>
                  <li>
                    A centralized dashboard for overseeing inventory, orders,
                    and production.
                  </li>
                  <li>
                    Custom reports for better decision-making and forecasting.
                  </li>
                  <li>Role-based access to ensure secure data management.</li>
                </ul>
              </li>
              <li>
                <strong>Client Portal</strong>
                <ul>
                  <li>
                    Real-time order tracking and communication with customers.
                  </li>
                  <li>
                    Clients could collaborate on design specifications directly
                    through the portal.
                  </li>
                  <li>Simplified invoice and payment management.</li>
                </ul>
              </li>
              <li>
                <strong>Scalability & Cloud Integration</strong>
                <ul>
                  <li>
                    The cloud-based system allows for easy scaling as Keerthi
                    Pumps grows.
                  </li>
                  <li>
                    Seamless integration with existing tools, reducing
                    transition friction.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>Outcome</h3>
            <ul>
              <li>
                <strong>Increased Efficiency:</strong> Real-time inventory
                tracking and automated processes reduced stockouts and improved
                production speed.
              </li>
              <li>
                <strong>Improved Design & Assembly:</strong> Better tracking of
                components and assembly instructions led to faster and more
                accurate production.
              </li>
              <li>
                <strong>Better Client Experience:</strong> The integrated client
                portal enhanced transparency and communication, improving
                customer satisfaction.
              </li>
              <li>
                <strong>Cost Savings:</strong> By replacing SAP with a
                cost-effective solution, Keerthi Pumps reduced software costs
                and avoided system complexities.
              </li>
              <li>
                <strong>Scalability:</strong> The cloud-based system enables
                business growth without significant additional costs.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Shinelogics’ custom ERP solution empowered Keerthi Pumps to
              streamline its inventory, design, and assembly operations while
              improving the overall client experience. The system’s integration
              of both admin and client portals, combined with scalability and
              cost-effectiveness, has positioned Keerthi Pumps for continued
              growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default keerthiPortfolioContent;
