import React from "react";
import Portocard from "./components/card";
import Navbar from "./components/Navbar";
import karyawarna from "./assets/picture/karyawarna.png";
import pintarsaham from "./assets/picture/pintarsaham.png";
import portojohn from "./assets/picture/portoJohn-removebg-preview.png"
import diamondcut from "./assets/picture/diamondcut.png"
import hbit from "./assets/picture/hbit.png";
import rm from "./assets/picture/rm.png";
import aisaham from "./assets/picture/aiSaham.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExperienceCarousel from "./components/experience";

function App() {
  const projectCard = [
    {
      image: pintarsaham,
      types: ["React", "BootStrap", "SQLlite"],
      title_picture: "tampilan dari pintarsaham",
      title: "PintarSaham",
      description: `PintarSaham merupakan aplikasi web yang bertujuan untuk membantu orang mengerti tentang saham
                    Pada web ini ada beberapa fitur unggulan, yaitu : course tentang dasar saham, Chart saham, forum diskusi, fitur prediksi harga saham dengan AI serta game simulasi`,
      link: "https://incredible-beijinho-043b7d.netlify.app/",
    },
    {
      image: karyawarna,
      types: ["React", "BootStrap"],
      title: "Karya Warna Websites",
      title_picture: "tampilan dari karyawarna",
      description: `Website ini merupakan web yang bertujuan untuk memberikan informasi mengenai toko karya warna
                    informasi tersebut adalah pengenalan toko, lokasi toko, barang yang tersedia, review dari pelanggan, dan nomor toko`,
      link: "https://karyawarna.netlify.app/",
    },
    {
      image: rm,
      types: ["AI model: Bert", "ICCSCI", "NER"],
      title: "Publish Paper",
      title_picture: "tampilan dari paper",
      description: `Paper ini berjudul : 'Fine-Tuning and Bayesian HyperparameterOptimization of DistilBERTfor Named Entity Recognition'
                    Paper ini saya kerjakan berdua dengan rekan saya, kalvin. Meskipun paper kami tidak di accept, tetapi saya mempelajari suatu hal tentang model bert dalam NER`,
    },
    {
      image: hbit,
      types: ["Figma"],
      title: "Hbit Tracker (Gemastik) ",
      title_picture: "logo",
      description: `Hbit tracker adalah suatu aplikasi yang dapat mentracking habit dari user dengan tema permainan 8 bit`,
    },
    {
      image: diamondcut,
      types: ["Figma", "HTML", "CSS", "JavaScript"],
      title: "DiamondCut Motor",
      title_picture: "logo",
      description: `DiamondCut motor adalah website yang bertujuan untuk menjual supercar dan sebagai showroom dari berbagai merek supercar`,
    },
    {
      image: aisaham,
      types: ["Streamlit","AI model : LSTM"],
      title: "AI prediksi Saham",
      title_picture: "logo",
      description: `AI yang mampu memprediksi harga saham dalam jangka waktu yang ditentukan dan juga dapat memberikan rekomendasi beli atau jual dengan disclamer yang ketat`,
    },
  ];
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <Navbar />
        <section
          id="home"
          className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16"
        >
          {/* Bagian teks */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h1
              className="text-3xl mb-3"
              style={{ fontFamily: "var(--font-sans)", color: "white" }}
            >
              Hi,
            </h1>

            <h2
              className="text-6xl mb-4 font-bold introduct"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              I'm John Davincent
            </h2>

            <h2
              className="text-3xl mb-9 font-semibold"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text-color)",
              }}
            >
              Aspiring AI Software Developer
            </h2>

            <p
              className="text-2xl/9 align-baseline ml-2"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text-color)",
              }}
            >
              I am a Binus University student majoring in Artificial Intelligence (AI).
              I possess expertise in Python, a deep understanding of various Python
              libraries, and fundamentals of machine learning. I have developed several
              projects, including AI for stock prediction and chatbots. My vision is to
              leverage AI to transform human life and solve future challenges.
            </p>

            {/* Socials */}
            <div className="mt-10">
              <h1
                className="text-2xl mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--text-color)",
                }}
              >
                Connect with me:
              </h1>

              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://www.linkedin.com/in/johndavincent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <FaLinkedin size={40} />
                </a>

                <a
                  href="https://www.instagram.com/davincent_goh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500"
                >
                  <FaInstagram size={40} />
                </a>

                <a
                  href="https://wa.me/6281276296731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500"
                >
                  <FaWhatsapp size={40} />
                </a>
              </div>
            </div>
          </div>

          {/* Bagian foto */}
          <div className="flex flex-col max-w h-200 mt-35 ml-20">
            <div className="w-120 h-120 rounded-full bg-white flex justify-center items-center shadow-lg ml-10">
              <div className="rounded-full overflow-hidden ">
                <img
                  className="object-cover w-full h-full"
                  src={portojohn}
                  alt="John Davincent"
                />
              </div>
            </div>

            <h1
              className="underline italic text-lg md:text-xl text-center mt-6"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text-color)",
              }}
            >
              "AI is the future. Those who fail to understand it will be left behind."
            </h1>
          </div>
        </section>

        <div className= "flex col ">
          <h1 
            className="text-6xl mb-4 introduct font-bold"
            style={{ fontFamily: "JetBrains Mono" }}> 
              Skills </h1>
            <div className = "max-w-4xl mx-auto bg-[#111] border border-[#2afc98]/40 rounded-2xl shadow-[0_0_20px_rgba(42,252,152,0.1)] p-8 flex flex-col md:flex-row justify-between gap-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(42,252,152,0.2)]">
                <div className = "flex-1">
                  <h2 
                  className = "text-2xl"
                  style={{
                  fontFamily: "JetBrains Mono" ,
                  color: "var(--text-color)",
                }}>Hard Skills</h2>
                  <ul 
                  className = "text-xl " 
                  style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--text-color)",
                }}>
                    <li>Python</li>
                    <li>Tensorflow & Keras</li>
                    <li>Machine Learninig</li>
                    <li>React</li>
                    <li>HTML, CSS</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>SQL and MySQL</li>
                    <li>Excel and Words</li>
                    <li>github and git</li>
                  </ul>
                </div>
            </div>
        </div>


        <div className="flex items-center flex-col justify-center mt-40 w-full">
          <div className="flex-wrap items-center 200h mb-10">
            <h1
              className="text-6xl mb-4 introduct font-bold"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              My Project
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projectCard.map((p, index) => (
              <Portocard
                key={index}
                image={p.image}
                title_picture={p.title_picture}
                title={p.title}
                types={p.types}
                description={p.description}
                link={p.link}
              />
            ))}
          </div>
        </div>
        <div className="min-h-screen text-white">
          <ExperienceCarousel />
        </div>
      </div>
    </>
  );
}

export default App;
