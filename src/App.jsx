import { useState, useRef } from "react";
import "./App.css";
import Typewriter from "./Components/Typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaLink,
} from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";


import { TbBrandNextjs, TbCrossOff } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiCross, BiLogoPostgresql } from "react-icons/bi";
import React from "react";
import { SiCss3, SiGmail, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { IoClose, IoLogoJavascript } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function App() {
  const [succes, setSucces] = useState("succes f");
  const refForm = useRef();
  const [stackState, setStackState] = useState("stack-container off");
  const [classs, setClass] = useState("hoja");
  const [title, setTitle] = useState("Expense tracker");
  const [description, setDescription] = useState(["", "", ""]);

  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const props = useSpring({
    opacity: inView ? "1" : "0",
    config: { duration: 200 },
  });
  const props2 = useSpring({
    opacity: inView ? "1" : "0",
    config: { duration: 200 },
    delay: 200,
  });
  const props3 = useSpring({
    opacity: inView ? "1" : "0",
    config: { duration: 200 },
    delay: 200,
  });

  const propsContact = useSpring({
    opacity: inView2 ? "1" : "0",
    config: { duration: 200 },
  });
  const propsContact2 = useSpring({
    opacity: inView2 ? "1" : "0",
    config: { duration: 200 },
    delay: 200,
  });
  const propsContact3 = useSpring({
    opacity: inView2 ? "1" : "0",
    config: { duration: 200 },
    delay: 400,
  });
  const propsContact4 = useSpring({
    opacity: inView2 ? "1" : "0",
    config: { duration: 200 },
    delay: 600,
  });

  const [formulario, setFormulario] = useState({
    username: "",
    email: "",
    message: "",
  });

  const manejarCambio = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const showHoja = (x) => {
    if (classs == "hoja") {
      if (x == 1) {
        setTitle("Expense tracker");
        setDescription([
          "I created this project with the aim of enhancing my understanding of Next.js, backend development, and databases, specifically utilizing PostgreSQL and an ORM like Prisma. Simultaneously, I aimed to create something both engaging and productive.",
          "Throughout the development process, I encountered several challenges that required resolution. For instance, achieving user authentication and implementing restricted routes without authorization using NextAuth. Additionally, I had to strategize on how to store data in the database to ensure each user only accessed their own information.",
          "Concerning the application's design and aesthetics, I employed a React library for graphics and a generative AI for image creation.",
        ]);
        setClass("hoja onn on-animation");
        setTimeout(() => {
          setClass("hoja onn");
        }, 480);
      } else if (x == 2) {
        setTitle("Pacman game");
        setDescription([
          "I embarked on creating this game because I found it to be both a fun and intriguing challenge. Essentially, it's a Pacman game crafted entirely with vanilla JavaScript and a sprinkle of HTML and CSS, with about 90% of the code being JavaScript.",
          "The development process was exhilarating. Solving challenges such as representing entities on a coordinate axis, handling collisions, and ensuring smooth movement of the ghosts, all served as both a learning experience and a creative challenge. I approached every feature from scratch, without drawing inspiration from external sources.",
          "The aim was precisely that: to test my knowledge and creativity in developing each functionality. While my methods may not have always been the most efficient, they were undeniably authentic and reflective of my own journey of growth and discovery.",
        ]);
        setClass("hoja onn on-animation");
        setTimeout(() => {
          setClass("hoja onn");
        }, 480);
      }else if (x == 3) {
        setTitle("Social network");
        setDescription([
          "Atsnigram is a social network platform that I developed to enhance my knowledge in database management, Next.js, backend development, and image handling, leveraging cloud services. For this project, I employed Prisma as the ORM, Cloudinary for image uploading, and NextAuth for user authentication.",
          "The application boasts various functionalities, including the ability to upload posts with images and descriptions, delete posts, view both one's own profile and those of others on the main page, and customize profile pictures.",
          "Notably, I focused on optimizing performance, a critical aspect in a platform centered around images. To achieve this, I utilized a React library to implement lazy loading, ensuring a smoother user experience."
        ]);
        setClass("hoja onn on-animation");
        setTimeout(() => {
          setClass("hoja onn");
        }, 480);
      }
    }
  };
  const offHoja = () => {
    if (classs == "hoja onn") {
      setClass("hoja on off-animation");
      setTimeout(() => {
        setClass("hoja");
      }, 480);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormulario({
      username: "",
      email: "",
      message: "",
    });

    setSucces("succes n");
    setTimeout(() => {
      setSucces("succes f");
    }, 2000);

    const serviceId = "service_rolt4nh";
    const templateId = "template_wosgsrr";
    const apiKey = "m0xvHLEDlvV91fWk5";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((res) => console.log("OK"))
      .catch((error) => console.error(error));
  };

  function changeStack() {
    if (stackState == "stack-container off") {
      setStackState("stack-container on-animation");
      setTimeout(() => {
        setStackState("stack-container on");
      }, 480);
    }
  }
  function changeStack2() {
    if (stackState == "stack-container on") {
      setStackState("stack-container off-animation");
      setTimeout(() => {
        setStackState("stack-container off");
      }, 480);
    }
  }

  return (
    <>
      <span className="i"></span>
      <header className="header">
        <ul className="items-container">
          <li className="item">
            <Link
              className="l"
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              My work
            </Link>
          </li>
          <li className="item">
            <Link
              className="l"
              to="ref"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <main className="main">
        <div className="title-container">
          <h1 className="titulo animate">
            <Typewriter text="Hi, i'm Bruno" />
          </h1>

          <div>
            <h2>Frontend Developer</h2>
            <p className="description">
              Currently in my second year of Computer Science studies at the
              university. I solve problems quickly and efficiently, without
              losing creativity or aesthetics.
            </p>
          </div>
          <button onClick={changeStack} className="stack-button">
            Technologies stack
          </button>
          <div className={stackState}>
            <ul className="tec-items-container">
              <li>
                <FaNodeJs className="tec-item" />
              </li>
              <li>
                <BiLogoPostgresql className="tec-item" />
              </li>
              <li>
                <TbBrandNextjs className="tec-item" />
              </li>
              <li>
                <IoLogoJavascript className="tec-item" />
              </li>
              <li>
                <FaReact className="tec-item" />
              </li>
              <li>
                <FaCss3Alt className="tec-item" />
              </li>
              <li>
                <FaHtml5 className="tec-item" />
              </li>
              <li>
                <FaPython className="tec-item" />
              </li>
              <li>
                <FaGithub className="tec-item" />
              </li>
              <li>
                <IoIosClose onClick={changeStack2} className="cros tec-item" />
              </li>
            </ul>
          </div>
        </div>
      </main>
      <section className="work">
        <h2 className="subtitle">My work</h2>
        <div ref={ref} className="project-container">
          <div className={classs}>
            <h5>{title}</h5>
            <p>{description[0]}</p>
            <p>{description[1]}</p>
            <p>{description[2]}</p>
            <IoClose onClick={offHoja} className="cross"></IoClose>
          </div>
          <div className="project-cont-1">
            <animated.div style={props} className="project p1">
              <h4>Expense tracker</h4>
              <div className="tech-container">
                <SiNextdotjs className="tech"></SiNextdotjs>
                <FaNodeJs className="tech"></FaNodeJs>
                <FaReact className="tech"></FaReact>
                <FaHtml5 className="tech"></FaHtml5>
                <FaCss3Alt className="tech"></FaCss3Alt>
                <BiLogoPostgresql className="tech"></BiLogoPostgresql>
              </div>
              <div className="link-container">
                <div className="about-container">
                  <div className="about-container-c">
                    <span
                      onClick={() => {
                        showHoja(1);
                      }}
                    >
                      About this project
                    </span>
                  </div>
                  <div className="link">
                    <a
                      onClick={() => {
                        alert(
                          "You can use these credentials to test in case you don't want to register Email: TestUser1@gmail.com\nPassword: 123"
                        );
                      }}
                      target="BLANK_"
                      href="https://expensetracker89.vercel.app/"
                    >
                      <FaLink></FaLink>
                    </a>
                  </div>
                </div>
              </div>
            </animated.div>
            <animated.div style={props2} className="project p2">
              <h4>Pacman game</h4>
              <div className="tech-container">
                <IoLogoJavascript className="tech" />
                <FaHtml5 className="tech"></FaHtml5>
                <FaCss3Alt className="tech"></FaCss3Alt>
              </div>
              <div className="link-container">
                <div className="about-container">
                  <div className="about-container-c">
                    <span
                      onClick={() => {
                        showHoja(2);
                      }}
                    >
                      About this project
                    </span>
                  </div>
                  <div className="link">
                    <a
                      target="BLANK_"
                      href="https://pacmangamebybruno.netlify.app/"
                    >
                      <FaLink></FaLink>
                    </a>
                  </div>
                </div>
              </div>
            </animated.div>
            <animated.div style={props3} className="project p2">
              <h4>Social network</h4>
              <div className="tech-container">
                <SiNextdotjs className="tech"></SiNextdotjs>
                <FaNodeJs className="tech"></FaNodeJs>
                <FaReact className="tech"></FaReact>
                <FaHtml5 className="tech"></FaHtml5>
                <FaCss3Alt className="tech"></FaCss3Alt>
                <BiLogoPostgresql className="tech"></BiLogoPostgresql>
                <FaCloudUploadAlt className="tech"></FaCloudUploadAlt>
              </div>
              <div className="link-container">
                <div className="about-container">
                  <div className="about-container-c">
                    <span
                      onClick={() => {
                        showHoja(3);
                      }}
                    >
                      About this project
                    </span>
                  </div>
                  <div className="link">
                    <a
                      target="BLANK_"
                      href="https://atsnigram.vercel.app/"
                    >
                      <FaLink></FaLink>
                    </a>
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>
      <div id="ref"></div>
      <section className="contact">
        <h2 className="subtitle">Contact</h2>
        <div ref={ref2} className="form-container">
          <form ref={refForm} onSubmit={handleSubmit} action="">
            <animated.input
              style={propsContact}
              value={formulario.username}
              onChange={manejarCambio}
              required
              name="username"
              className="name inp"
              placeholder="Name"
              type="text"
            />
            <animated.input
              style={propsContact2}
              value={formulario.email}
              onChange={manejarCambio}
              required
              name="email"
              className="email inp"
              placeholder="Email"
              type="email"
            />
            <animated.textarea
              style={propsContact3}
              value={formulario.message}
              onChange={manejarCambio}
              required
              name="message"
              maxLength={600}
              className="msj inp"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              type="text"
            />
            <animated.button style={propsContact4} className="btn inp">
              Send
            </animated.button>
            <span className={succes}>The message was sent successfully</span>
          </form>
        </div>
      </section>
      <footer>
        <div className="redes-container">
          <div className="red">
            <a href="mailto:brunominighin@gmail.com">
              <SiGmail className="r" />
            </a>
          </div>
          <div className="red">
            <a
              target="_BLANK"
              href="https://www.linkedin.com/in/bruno-minighin-2161592a7/"
            >
              <FaLinkedin className="r" />
            </a>
          </div>
          <div className="red">
            <a target="_BLANK" href="https://github.com/lowlife889">
              <FaGithub className="r" />
            </a>
          </div>
        </div>
        <span className="footer-text">
          All rights reserved Bruno Minighin 2024
        </span>
      </footer>
    </>
  );
}

export default App;
