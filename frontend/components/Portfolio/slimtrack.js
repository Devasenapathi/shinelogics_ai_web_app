import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../public/images/portfolio-details.jpg";

const SlimTrack = () => {
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
              SlimTrack is a health and fitness app designed to help users
              monitor their calorie intake, track their diet, and meet their
              fitness goals. With a growing demand for health-focused apps,
              SlimTrack aims to offer users an easy way to track their calories,
              exercise, and maintain a healthy lifestyle.
            </p>

            <h3>Challenge</h3>
            <p>
              The client needed an intuitive, feature-packed app that would make
              calorie and meal tracking easy for users while offering
              personalized insights. The app had to support different dietary
              preferences, integrate with popular fitness devices, and allow
              users to log meals and workouts effortlessly. Additionally, the
              app needed to be scalable for future feature enhancements.
            </p>

            <h3>Solution</h3>
            <p>
              ShineLogics developed a simple yet powerful calorie tracking app
              with key features designed to meet user needs:
            </p>
            <ul>
              <li>
                <strong>Calorie and Nutrient Tracking:</strong> SlimTrack
                allowed users to log food and track calories, macronutrients,
                and micronutrients. The app included a comprehensive food
                database for easy logging.
              </li>
              <li>
                <strong>Personalized Goals:</strong> Users could set custom
                goals based on their fitness objectives, with SlimTrack
                providing tailored recommendations for diet and exercise.
              </li>
              <li>
                <strong>Fitness Device Integration:</strong> The app seamlessly
                integrated with fitness devices like Fitbit and Apple Health,
                allowing users to sync exercise data and track calories burned.
              </li>
              <li>
                <strong>Real-Time Sync & Data Analytics:</strong> SlimTrack
                offered real-time syncing across devices, providing users with
                detailed analytics and progress reports to track their health
                journey.
              </li>
            </ul>

            <h3>Outcome</h3>
            <p>
              SlimTrack helped users stay on track with their fitness and health
              goals:
            </p>

            <ul>
              <li>
                <strong>Enhanced Engagement:</strong> The easy-to-use design and
                personalized features increased user engagement, with daily
                tracking becoming a part of users' routines.
              </li>
              <li>
                <strong>Better Health Management:</strong> The app’s real-time
                tracking, along with fitness device integration, enabled users
                to better manage their diet and fitness, leading to healthier
                lifestyles.
              </li>
              <li>
                <strong>User Satisfaction:</strong> Real-time syncing and
                detailed analytics contributed to higher user satisfaction, with
                users appreciating the seamless experience and valuable
                insights.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              SlimTrack, developed by ShineLogics, offers a seamless and
              effective way for users to manage their calorie intake, track
              fitness, and achieve health goals. The app’s personalized
              features, ease of use, and device integration have made it a
              reliable tool for anyone looking to live a healthier lifestyle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlimTrack;
