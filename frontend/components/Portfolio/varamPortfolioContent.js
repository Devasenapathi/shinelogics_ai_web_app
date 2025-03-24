import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const varamPortfolioContent = () => {
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
              Varam is a matrimony app designed to help individuals find
              meaningful relationships by focusing on compatibility, values, and
              shared interests. The app offers a modern platform for people to
              connect and build lasting partnerships, and ShineLogics was tasked
              with developing a user-friendly, secure, and scalable app that
              caters to a diverse audience.
            </p>

            <h3>Challenge</h3>
            <p>
              Varam needed a dynamic, feature-rich matrimony app that stood out
              in the competitive market. The challenge was to create a platform
              that offered personalized matchmaking, easy navigation, and secure
              communication while catering to different cultures, preferences,
              and user needs.
            </p>

            <h3>Solution</h3>
            <p>
              ShineLogics worked closely with the Varam team to develop a robust
              app focusing on three key areas: user experience, security, and
              scalability.
            </p>

            <ul>
              <li>
                <strong>User-Centric Design:</strong> ShineLogics created an
                intuitive and sleek UI, allowing users to easily create
                profiles, search for matches, and interact. Personalized filters
                and matchmaking suggestions were incorporated to improve the
                relevance of connections.
              </li>
              <li>
                <strong>Advanced Matchmaking:</strong> The app utilized
                algorithms to match users based on criteria such as location,
                interests, religion, and lifestyle, while allowing users to
                filter profiles according to their preferences.
              </li>
              <li>
                <strong>Security & Privacy:</strong> ShineLogics ensured the app
                provided a secure environment with encrypted communication,
                strict privacy measures, and secure logins to protect user data
                and build trust.
              </li>
              <li>
                <strong>Real-Time Communication:</strong> The app integrated
                messaging and notifications for instant communication between
                users, enhancing engagement and interaction.
              </li>
            </ul>

            <h3>Outcome</h3>
            <p>
              The Varam app was successfully launched, offering a seamless,
              personalized, and secure platform for matchmaking. The app's
              design led to improved user engagement and satisfaction.
            </p>

            <ul>
              <li>
                <strong>Higher Engagement:</strong> The intuitive interface and
                personalized features boosted user interaction and led to better
                matchmaking results.
              </li>
              <li>
                <strong>Trust & Security:</strong> With its strong focus on user
                privacy and security, the app built trust, which is crucial in
                the matrimony industry.
              </li>
              <li>
                <strong>Scalable Solution:</strong> The app’s scalable
                architecture allows for future growth, ensuring performance
                remains intact as the user base expands.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              The Varam Matrimony App, developed by ShineLogics, offers a
              seamless and secure platform for users to find meaningful
              relationships. With a focus on personalized matchmaking, security,
              and scalability, the app is set for future growth and continued
              success in the competitive matrimony space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default varamPortfolioContent;
