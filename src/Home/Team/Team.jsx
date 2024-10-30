import React, { useEffect, useState } from "react";
// import "../../Home/index.css";
import { Link } from "react-router-dom";
import Iosclogo from "../../Assets/website background.png";
// import videoSrc from "../../Assets/Nature.mp4";  

const Team = () => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     requestAnimationFrame(() => {
  //       setScrollY(window.scrollY);
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-screen w-full relative  overflow-hidden">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Adjust the parallax effect speed
            willChange: "transform", // Optimize for better performance
          }}
        /> */}
        <div className="h-full w-screen bg-red-400 z-[1]">

        </div>
        <div className="relative bg-opacity-40 backdrop-blur-md bg-transparent h-[5.5rem] z-[10]">
          <header className="navbar-smooth flex items-center justify-between bg-opacity-5 text-white">
            <div className="container mx-auto flex items-center h-20">
              <a href="" className="soc-logo flex items-center justify-center">
                <img src={Iosclogo} alt="Logo" className="h-14" />
              </a>

              {/* Hamburger Icon for small screens */}
              <button
                className="ham-burger-button absolute right-5 custom:hidden flex items-center px-3 py-2 border rounded text-blue-400 border-blue-950 hover:text-blue-600 hover:border-blue-600"
                onClick={handleToggle}
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Nav Links for larger screens */}
              <nav
                className={`navBar hidden custom:contents bg-opacity-40 backdrop-blur-md font-semibold text-base lg:text-lg`}
              >
                <ul className="lists-container mx-auto flex pr-[7rem]">
                  {/* <li className="list-items p-5 xl:p-8 active hover:text-blue-600">
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li> */}
                  <Link className="p-5 xl:p-8 hover:text-blue-600" to="/team">
                    <span>AI/ML Team</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Departments", 1500)}
                  >
                    <span>WebD Team</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Events", 1000)}
                  >
                    <span>IOT</span>
                  </Link>
                </ul>
              </nav>

              {/* Mobile Menu */}
              <div
                className={`${
                  isOpen ? "slide-in" : "slide-out"
                } w-[15rem] h-[21rem] ham-burger custom:hidden backdrop-blur-lg bg-opacity-40 absolute top-20 right-0 z-10 transition-transform duration-300`}
              >
                <ul className="flex flex-col items-center bg-opacity-40 backdrop-blur-md">
                  {/* <li className="list-items p-5 xl:p-8 hover:text-blue-600">
                    <a href="">Home</a>
                  </li> */}
                  <Link className="p-5 xl:p-8 hover:text-blue-600" to="/team">
                    AI/ML Team
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Departments", 1500)}
                  >
                    WebD Team
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Events", 1000)}
                  >
                    IOT
                  </Link>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Team;
