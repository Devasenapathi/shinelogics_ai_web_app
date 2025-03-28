import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import clientImg1 from '../../public/images/clients/client1.png';
import clientImg2 from '../../public/images/clients/client2.png';
import clientImg3 from '../../public/images/clients/client3.png';
import clientImg4 from '../../public/images/clients/client4.png';
import clientImg5 from '../../public/images/clients/client5.png';
import clientImg6 from '../../public/images/clients/client6.png';
import clientImg7 from '../../public/images/clients/client7.png';
import clientImg8 from '../../public/images/clients/client8.png';

import leftQuote from '../../public/images/left-quote-white.png';

const feedbacskData = [
  {
    name: "Parthiban Kandhasamy",
    designation: "CEO @ Keerthi Pumps India Pvt. Ltd.",
    feedbacskText:
    "ShineLogics' ERP solution has elevated our business operations to new heights. Their responsive support and ongoing service have greatly enhanced our efficiency. We truly value the expertise and dedication they bring to every project.",
  },
  {
    name: "",
    designation: "Top Quick Solution Corp",
    feedbacskText:
    "We manage vast amounts of data, generating up to 4GB of logs daily. ShineLogics delivered a simple, cost-effective solution to efficiently handle and process this data for legacy purposes. Their solution has saved us valuable time and resources. We truly appreciate ShineLogics for their outstanding support and expertise",
  },
  {
    name: "Poovai Selvaraj",
    designation: "Co-founder of Varam.app",
    feedbacskText:
    "ShineLogics has been an incredible partner in bringing Varam, a trusted matrimony platform, to life. Their expertise in app development and focus on creating a user-friendly experience have allowed us to offer a seamless way for individuals to find meaningful alliances. ShineLogics provided continuous support and innovative solutions, ensuring Varam meets the unique needs of those seeking marriage and lifelong partnerships. Thanks to their dedication and vision, Varam has become a go-to platform, and we’re excited to continue growing it together.",
  },

  {
    name: "",
    designation: "The Hindu IT Team",
    feedbacskText:
    "ShineLogics has played a key role in upskilling our team with the latest technologies. The training in Node.js and Express.js empowered us to build a practical, real-time news app that showcases our new capabilities. We’re excited about the future, knowing that our team is now equipped to handle complex digital challenges with innovative solutions.",
  },
];

const Feedback = () => {
  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <Image src={leftQuote} alt="icon" width={53} height={39} />
            </div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              className="feedback-slides"
            >
              {feedbacskData &&
                feedbacskData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-feedback">
                      <p><q>{value.feedbacskText}</q></p>

                      <div className="bar"></div>

                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <Image
            src={clientImg1}
            className="client1"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            width={234}
            height={235}
          />

          <Image
            src={clientImg2}
            className="client2"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            width={195}
            height={195}
          />

          <Image
            src={clientImg3}
            className="client3"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            width={199}
            height={199}
          />

          <Image
            src={clientImg4}
            className="client4"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            width={196}
            height={197}
          />

          <Image
            src={clientImg5}
            className="client5"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            width={201}
            height={202}
          />

          <Image
            src={clientImg6}
            className="client6"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="700"
            width={169}
            height={170}
          />

          <Image
            src={clientImg7}
            className="client7"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="800"
            width={174}
            height={175}
          />

          <Image
            src={clientImg8}
            className="client8"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="900"
            width={218}
            height={218}
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
