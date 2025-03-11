import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const featuredServicesData = [
  {
    iconName: "pe-7s-filter",
    title: "Web Development & Apps Development",
    bgText: "WD",
    shortText:
      "we offer end-to-end software building, app building, and website building services tailored to your business needs. Our expert team delivers scalable, high-performance solutions that streamline operations, enhance user experience, and drive innovation. Whether it’s custom mobile apps or responsive websites, we ensure every product is optimized for performance, security, and growth.      ",
    viewDetails: "/services/service-details/",
  },
  {
    iconName: "pe-7s-display1",
    title: "IOT Development",
    bgText: "ID",
    shortText:
      "At Shinelogics, we provide innovative IoT solutions that connect devices, systems, and data to enhance decision-making and boost operational efficiency. Our custom IoT systems integrate seamlessly with your infrastructure, enabling real-time monitoring and optimization. From smart homes to industrial automation, we deliver scalable, secure, and high-performance solutions that transform your operations and keep you ahead of the competition",
    viewDetails: "/services/iot/",
  },
  {
    iconName: "pe-7s-plugin",
    title: "Cyber Security",
    bgText: "CS",
    shortText:
      "At Shinelogics, we offer comprehensive Cybersecurity solutions to protect your data, systems, and infrastructure from evolving threats. Using the latest protocols and proactive defenses, we ensure business continuity, regulatory compliance, and peace of mind in a rapidly changing digital landscape.",
    viewDetails: "/services/cyberSecurity/",
  },
  {
    iconName: "pe-7s-arc",
    title: "Data Analytics",
    bgText: "DA",
    shortText:
      "At Shinelogics, we leverage AI, Data Science, and Data Analytics to drive business growth and innovation. Our solutions build advanced models and algorithms to extract valuable insights from complex data, helping you make informed decisions and predict trends. We transform raw data into actionable insights, optimizing processes and improving performance to keep your business ahead in a competitive landscape.",
    viewDetails: "/services/dataAnalysis/",
  },
  {
    iconName: "pe-7s-diamond",
    title: "SEO Optimization",
    bgText: "SO",
    shortText:
      "We specialize in SEO and ASO to enhance your digital visibility. Our SEO strategies improve website rankings and drive organic traffic, while our ASO services boost your app’s visibility, increasing downloads and retention. Together, we help you reach your target audience across both web and app platforms.",
    viewDetails: "/services/seo/",
  },
  // {
  //   iconName: "pe-7s-helm",
  //   title: "Content Strategist",
  //   bgText: "Cs",
  //   shortText:
  //     "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  //   viewDetails: "/services/service-details/",
  // },
  // {
  //   iconName: "pe-7s-magnet",
  //   title: "UX Strategist",
  //   bgText: "Ux",
  //   shortText:
  //     "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  //   viewDetails: "/services/service-details/",
  // },
];

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
            <Swiper
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="col-lg-12">
                      <div className="featured-services-box">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        
                        <h3>
                          <Link href={value.viewDetails}>{value.title}</Link>
                        </h3>

                        <p>{value.shortText}</p>

                        <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link>

                        <div className="back-text">
                          {value.bgText}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
