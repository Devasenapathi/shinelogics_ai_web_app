import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const feedbacskData = [
  {
    name: "Ginni Rometty",
    designation: "Former CEO of IBM.",
    feedbacskText:
      "AI is going to be more impactful than electricity or fire.",
  },
  {
    name: "Satya Nadella",
    designation: "CEO of Microsoft.",
    feedbacskText:
      "We’re on the verge of a major shift in how we think about the relationship between humans and machines.",
  },
  {
    name: "Jeff Hawkins",
    designation: "Founder of Numenta and author of On Intelligence.",
    feedbacskText:
      "The key to artificial intelligence has always been the representation.",
  },
];

const FeedbackTwo = () => {
  return (
    <>
      <div className="quotes-area bg-fcfbfb">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            className="quotes-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="quotes-content">
                    <p>{value.feedbacskText}</p>
                    <h3>{value.name}</h3>
                    <span>{value.designation}</span>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackTwo;
