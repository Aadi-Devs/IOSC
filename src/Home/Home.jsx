import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Iosclogo from "../Assets/website background.png";
import videoSrc from "../Assets/Nature.mp4";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (elementId, duration) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const startTime = performance.now();

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = easeInOutQuad(timeElapsed / duration);
      const run = progress * (targetPosition - startPosition) + startPosition;
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <div className="h-screen w-full relative z-[1] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Adjust the parallax effect speed
            willChange: "transform", // Optimize for better performance
          }}
        />

        <div className="relative  bg-transparent h-[5.5rem]">
          <header className="flex items-center justify-center bg-opacity-5 text-white hidden md:block">
            <div className="container mx-auto flex items-center h-20">
              <a href="" className="flex items-center justify-center">
                <img src={Iosclogo} alt="" className="h-14" />
              </a>
              <nav className="contents font-semibold text-base lg:text-lg">
                <ul className="mx-auto flex items-center">
                  <li className="p-5 xl:p-8 active hover:text-blue-600">
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li>
                  <Link className="p-5 xl:p-8 hover:text-blue-600" to="/team">
                    <span>Team</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Departments", 1500)}
                  >
                    <span>Departments</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Events", 1000)}
                  >
                    <span>Events</span>
                  </Link>
                </ul>
              </nav>
              <Link onClick={() => scrollToElement("Footer", 1800)}>
                <button className="bg-transparent text-blue-200 h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-700 hover:text-white hover:bg-blue-400 hover:border-black">
                  Contact Us
                </button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Home;


