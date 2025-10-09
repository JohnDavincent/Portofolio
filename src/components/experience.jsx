import React from "react";
import Slider from "react-slick";
import mentor from "../assets/picture/mentoring.jpg";
import ureeka from "../assets/picture/Ureeka.png";
import himti from "../assets/picture/HIMTI.jpg";

const ExperienceCarousel = () => {
  const experiences = [
    {
      image: mentor,
      title: "Mentor Peer to peer Binus",
      time: "February 2025 - June 2025",
      desc : `Terpilih melalui proses seleksi ketat untuk menjadi mentor bagi mahasiswa BINUS University.
       Bertanggung jawab dalam memberikan bimbingan akademik, motivasi, dan dukungan pengembangan diri kepada mentee. 
       Berperan aktif dalam membangun lingkungan belajar yang positif dan kolaboratif serta membantu mahasiswa baru dalam
        proses adaptasi di lingkungan kampus.`
    },
    {
      image: ureeka,
      title: "Committee Member of Ureeka",
      time: "Juli 2024 - Present",
      desc : `Terpilih sebagai anggota komunitas Ureeka, sebuah komunitas pengembangan perangkat lunak di BINUS University yang fokus melatih anggota untuk berkompetisi dalam lomba software development. 
      Aktif mengikuti sesi pelatihan, workshop, dan proyek kolaboratif untuk meningkatkan kemampuan coding, problem solving, serta teamwork`
    },
    {
      image: himti,
      title: "Commitee member of TECHFEST 2025",
      time: "September 2024 - Juli 2025",
        desc : `Saya menjadi anggota divisi acara TECHFEST 2025 di HIMTI BINUS, bertanggung jawab menyiapkan dataset lomba Data Analytics, 
        menentukan kriteria penilaian, dan berkolaborasi dengan tim untuk memastikan kelancaran acara sekaligus 
        mengasah kemampuan analisis data dan koordinasi tim.`
    }
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
          <div key={index} className="relative overflow-hidden rounded-2xl group">
            {/* Gambar */}
            <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-[530px] object-cover transition-transform duration-500 group-hover:scale-105 relative z-0"
            />

            {/* Overlay hitam saat hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-500 z-10"></div>

            {/* Title & time */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-left text-white z-20">
              <h2 className="text-4xl font-semibold">{exp.title}</h2>
              <p className="text-2xl mt-1">{exp.time}</p>
            </div>

            {/* Desc muncul di kiri atas saat hover */}
            <div className="absolute top-3 left-4 text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="max-w-[70%] text-xl text-left mb-2">
              {exp.desc}
            </p>
            {/* Tombol Learn More */}
            <button className="absolute mr-3 left-4 px-5 py-3 mt-5 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
            </div>
            
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceCarousel;

