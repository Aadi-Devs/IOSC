import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../index.css";
import AIML from "../Assets/AI-ML.jpg";
import WebD from "../Assets/Web.jpg";
import IOT from "../Assets/IOT.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import IronMan from "../Assets/iron-man.svg" 

const Example = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      easing: 'ease-in-out', // easing of the animation
      once: false, // animation occurs only once
    });
  }, []);


  return (
    <div id="Departments" className="grid h-[45rem] w-[94.55rem]  gap-4 place-content-center bg-[#000029]  px-4  text-slate-900">
      <div className="text-6xl h-[10rem] text-white text-center" data-aos="fade-up">
        <h1>Our Departments</h1>
      </div>
      {/* <div className="flex gap-[10rem]"  data-aos="fade-up">
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={AIML} route="/AI/ML" />
        </div>
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={WebD} route="/WebD" />
        </div>
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={IOT} route="/IOT" />
        </div>
      </div> */}
      <div className="flex gap-[10rem]">
        <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="0">
          <TiltCard imageSrc={AIML} route="/AI/ML" />
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
          <TiltCard imageSrc={WebD} route="/WebD" />
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="400">
          <TiltCard imageSrc={IOT} route="/IOT" />
        </div>
      </div>

    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ imageSrc, route }) => {
  const ref = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    navigate(route, { state: { fromCard: true } }); // Navigate with state
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        transform,
        cursor: "pointer",
      }}
      className="relative h-96 w-72 rounded-xl bg-blue-200 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <img
          src={imageSrc}
          alt=""
          className="absolute h-[22rem] grid place-content-center rounded-xl bg-white shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Example;
