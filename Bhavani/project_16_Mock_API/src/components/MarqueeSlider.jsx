import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

const JobsCards = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      title: "Backend Developer",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      title: "UI/UX Designer",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    },
    {
      title: "Product Manager",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732084.png",
    },
    {
      title: "DevOps Engineer",
      logo: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
    },
    {
      title: "Data Scientist",
      logo: "https://cdn-icons-png.flaticon.com/512/4149/4149685.png",
    },
  ];

  return (
    <div className="container my-5">
      <Swiper
        modules={[Autoplay]} 
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 500, disableOnInteraction: false }}
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={index}>
            <img
              src={job.logo}
              alt={job.title}
              className="img-fluid mx-auto my-2"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
             <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="card-title">{job.title}</h6>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobsCards;
