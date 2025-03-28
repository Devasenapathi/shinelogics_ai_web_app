import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import womenWithTable from "../../../public/images/women-with-table.png";

const bestServicesData = [
  {
    image: "/images/services/service1.jpg",
    iconName: "pe-7s-magnet",
    title: "React JS",
    shortText:
      "A Popular JavaScript Library for Building User Interfaces.",
    detailsLink: "/technology/react",
  },
  {
    image: "/images/services/service2.jpg",
    iconName: "pe-7s-vector",
    title: "Node JS",
    shortText:
      "High-Performance Backend Runtime.",
    detailsLink: "/technology/node",
  },
  {
    image: "/images/services/service3.jpg",
    iconName: "pe-7s-scissors",
    title: "Python",
    shortText:
      "A Versatile and Powerful Programming Language.",
    detailsLink: "/technology/python",
  },
  {
    image: "/images/services/service4.jpg",
    iconName: "pe-7s-comment",
    title: "AWS",
    shortText:
      "Scalable Cloud Deployment Solutions.",
    detailsLink: "/technology/aws",
  },
];

const BestServices = () => {
  return (
    <>
      <section className="services-area">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-5 p-0">
              <div className="services-inner">
                <div className="services-section-title">
                  <h2>Offering The Best of Services</h2>
                  <div className="bar"></div>
                  <p>
                    Shinelogics offers top-tier services tailored to drive your
                    business forward with innovation and excellence
                  </p>

                  <Image
                    src={womenWithTable}
                    alt="Women"
                    width={353}
                    height={303}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7 p-0">
              <div className="services-list">
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
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="services-slides"
                >
                  {bestServicesData &&
                    bestServicesData.map((value, i) => (
                      <SwiperSlide key={i}>
                        <div className="single-services">
                          <Image
                            src={value.image}
                            alt="image"
                            className="w-100"
                            width={330}
                            height={450}
                          />

                          <div className="content">
                            <div className="icon">
                              <i className={value.iconName}></i>
                            </div>

                            <h3>{value.title}</h3>
                            <p>{value.shortText}</p>

                            <Link
                              href={value.detailsLink}
                              className="read-more-btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
