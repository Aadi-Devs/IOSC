import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Sky from "../../Assets/Sky.jpg";
import Night from "../../Assets/night.jpg";
import "../../index.css";

const AIPage = () => {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Projects />
      <About />
    </>
  );
};

export default AIPage;

// NavBar Starts-------------------------------------------------------------------------------------------------------------------------

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize to adjust for screen width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="AiNav"
      className="mobile-screen bg-transparent bg-fixed w-full z-[1] h-screen"
      style={{
        backgroundColor: "pink",
      }}
    >
      {windowWidth < 850 ? (
        // Show hamburger icon for screens smaller than 850px
        <div className="flex justify-between w-full items-center fixed p-4">
          <div className="text-white">Logo</div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-5 cursor-pointer text-white"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      ) : (
        <SlideTabs />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div
          onClick={() => setIsOpen(false)}
          className="self-end p-4 cursor-pointer"
        >
          {/* Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="flex flex-col items-center space-y-4">
          <li
            className="cursor-pointer text-lg"
            onClick={() => {
              setIsOpen(false);
              document.getElementById("AiProjects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-lg"
            onClick={() => {
              setIsOpen(false);
              document.getElementById("AiAbout")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li className="cursor-pointer text-lg">Docs</li>
          <li className="cursor-pointer text-lg">Blog</li>
        </ul>
      </div>

      {/* Animated arrow at the bottom */}
      <div className="h-[50px] w-full flex flex-col items-center justify-center">
        <div
          onClick={() => {
            document.getElementById("AiProjects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="ai-arrow-container absolute flex items-center text-center bg-white w-[3rem] h-[3rem] rounded-full bottom-[0.1px] cursor-pointer"
        >
          <svg
            className="w-8 h-8 text-purple-600 mx-auto animate-bounce cursor-pointer z-[10]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="ai-arrow-line absolute flex justify-center bottom-[0.1px] w-full  h-[20px]"></div>
      </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <>
      <div className="w-full h-[5rem] flex flex-col justify-center items-center">
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="absolute top-[0.1px]  w-max-[40rem] mx-auto flex flex-wrap justify-center items-center rounded-full border-[3px] border-[#000029] bg-transparent p-1"
        >
          <Tab setPosition={setPosition}>Home</Tab>
          <div
            onClick={() => {
              document.getElementById("AiProjects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Tab setPosition={setPosition}>Projects</Tab>
          </div>
          <div
            onClick={() => {
              document.getElementById("AiAbout")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Tab setPosition={setPosition}>About</Tab>
          </div>
          <Tab setPosition={setPosition}>Docs</Tab>
          <Tab setPosition={setPosition}>Blog</Tab>

          <Cursor position={position} />
        </ul>
      </div>
    </>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#000029] md:h-12"
    />
  );
};

// NavBar Ends-------------------------------------------------------------------------------------------------------------------






// Projects Starts----------------------------------------------------------------------------------------------------------------

const Projects = () => {
  return (
    <div
      id="AiProjects"
      className="min-h-screen w-full bg-fixed z-[1]"
      style={{
        backgroundColor: "green",
      }}
    >
      <div className="flex flex-col h-full px-4 md:px-6">
        <BouncyCardsFeatures />
      </div>
    </div>
  );
};

// BouncingCards Starts--------------------------------

const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto  w-full h-full px-4 py-6 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg font-bold md:text-4xl text-slate-400">
          Our Projects
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <BounceCardLeft className="col-span-12 md:col-span-4">
          <CardTitle>Project-1</CardTitle>
        </BounceCardLeft>
        <BounceCardRight className="col-span-12 md:col-span-8 overflow-x-hidden">
          <CardTitle>Project-2</CardTitle>
        </BounceCardRight>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <BounceCardLeft className="col-span-12 md:col-span-8">
          <CardTitle>Project-3</CardTitle>
        </BounceCardLeft>
        <BounceCardRight className="col-span-12 md:col-span-4 overflow-x-hidden">
          <CardTitle>Project-4</CardTitle>
        </BounceCardRight>
      </div>
    </section>
  );
};

const BounceCardLeft = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9, rotate: "-5deg" }}
      whileTap={{ scale: 0.8 }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const BounceCardRight = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9, rotate: "5deg" }}
      whileTap={{ scale: 0.8 }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

// BouncingCards Ends-----------------------------------

// Projects Ends--------------------------------------------------------------------------------------------------------------------------







// About Starts---------------------------------------------------------------------------------------------------------------------------

const About = () => {
  return (
    <div id="AiAbout" className="min-h-screen w-full bg-red-950 p-4 md:p-6">
      <h1 className="text-white text-2xl md:text-4xl">About Us</h1>
      <p className="text-white mt-4 text-sm md:text-base">
        Some content about the project or company.
      </p>
    </div>
  );
};

// About Ends-----------------------------------------------------------------------------------------------------------------------------
