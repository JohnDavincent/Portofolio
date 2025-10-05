import React from "react";
import Slider from "react-slick";
import mentor from "../assets/picture/mentoring.jpg";

const ExperienceCarousel = () => {
  const experiences = [
    {
      image: mentor,
      title: "Mentor Peer to peer Binus",
      time: "February 2025 - June 2025",
    },
    {
      image: mentor,
      title: "Mentor Peer to peer Binus",
      time: "February 2025 - June 2025",
    },
    {
      image: mentor,
      title: "Mentor Peer to peer Binus",
      time: "February 2025 - June 2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-6xl mx-auto mt-40 text-center">
      <h1
        className="text-6xl mb-8 font-bold introduct"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        Experience
      </h1>

      <Slider {...settings}>
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <img
              src={exp.image}
              alt={exp.title}
              className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-4 rounded-b-2xl">
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-sm mt-1">{exp.time}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceCarousel;
