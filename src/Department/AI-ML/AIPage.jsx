import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import twitter from "../../Assets/icons8-twitter-48.png";
import instagram from "../../Assets/instagram.png";
import "../../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AIPage = () => {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fade-Up
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      easing: "ease-in-out", // easing of the animation
      once: false, // animation occurs only once
    });
  }, []);

  return (
    <>
      <Nav />
      <Projects />
      <TextParallaxContentExample />
      <About />
      {/* <Info /> */}
      <Footer />
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
        <div className="flex justify-between w-full items-center fixed p-4 z-10">
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
            Our Team
          </li>
          <li
            className="cursor-pointer text-lg"
            onClick={() => {
              setIsOpen(false);
              document.getElementById("AiParallax")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Events
          </li>
          <li
            className="cursor-pointer text-lg"
            onClick={() => {
              document.getElementById("AiFooter")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>

      {/* Animated arrow at the bottom */}
      {/* <div className="h-[50px] absolute w-full flex flex-col items-center justify-end bottom-[0.1px]">
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
        <div className="ai-arrow-line absolute flex justify-center w-full bg-white h-[20px]"></div>
      </div> */}
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
            <Tab setPosition={setPosition}>Our Team</Tab>
          </div>
          <div
            onClick={() => {
              document.getElementById("AiParallax")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Tab setPosition={setPosition}>Events</Tab>
          </div>

          <div
            onClick={() => {
              document.getElementById("AiFooter")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Tab setPosition={setPosition}>Contact Us</Tab>
          </div>

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
      className="min-h-screen w-full bg-fixed z-[1] bg-[#000029]"
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
      <div
        className="mb-4 grid grid-cols-1 md:grid-cols-12 gap-4"
        data-aos="fade-down"
      >
        <BounceCardLeft className="col-span-12 md:col-span-4">
          <CardTitle>Deep Fake Detection</CardTitle>
        </BounceCardLeft>
        <BounceCardRight className="col-span-12 md:col-span-8 overflow-x-hidden">
          <CardTitle>AI Gym Trainer</CardTitle>
        </BounceCardRight>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-4"
        data-aos="fade-up"
      >
        <BounceCardLeft className="col-span-12 md:col-span-8">
          <CardTitle>AI Projectile Motion Calculator</CardTitle>
        </BounceCardLeft>
        <BounceCardRight className="col-span-12 md:col-span-4 overflow-x-hidden">
          <CardTitle>AI Ball Dodge Game</CardTitle>
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
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <div
      id="AiAbout"
      className="flex items-center justify-center h-full w-full bg-[#000029] p-4 overflow-x-hidden"
    >
      <div className="main-container flex flex-col items-center h-full w-full mt-7">
        <div className="team-and-heading-cont flex flex-col items-center gap-[8rem] mt-5">
          {/* Heading */}
          <div className="heading-container" data-aos="fade-up">
            <h1 className="text-7xl text-white font-semibold">Our Team</h1>
          </div>

          {/* Team Members */}
          {/* <div className="team-card-container flex gap-[6rem]">
            <div
              className="flex flex-col items-center gap-6"
              data-aos="fade-right"
            >
              <div className="team-cards h-[20rem] w-[20rem] bg-zinc-700 hover:scale-105 transition-all duration-700 rounded-2xl"></div>
              <h3 className="text-white text-2xl">Priyanshu Satapathy</h3>
            </div>

            <div
              className="flex flex-col items-center gap-6"
              data-aos="fade-left"
            >
              <div className="team-cards h-[20rem] w-[20rem] bg-zinc-700 hover:scale-105 transition-all duration-700 rounded-2xl"></div>
              <h3 className="text-white text-2xl">Bhumik Kumar</h3>
            </div>
          </div> */}

          {/* Team Members */}
          <div className="team-member flex gap-[6rem]">
            {/* Member - 1 */}
            <div className="flex flex-col gap-8" data-aos="fade-right">
              <div
                className={`card flip-card h-[20rem] w-[20rem] hover:scale-105 transition-all duration-700 ${
                  isFlipped1 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped1(!isFlipped1)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    // style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="absolute bottom-0 flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Click to Flip
                    </h1>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    // style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <p className="text-center text-xl">
                      "Priyanshu Satapathy, head of IOSC-BVP's AI/ML department,
                      is a visionary leader fostering a collaborative community.
                      Through projects, hackathons, and workshops, he empowers
                      students to apply AI/ML to real-world challenges."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-white text-center text-2xl">
                  Priyanshu Satapathy
                </h1>
              </div>
            </div>

            {/* Member - 2 */}
            <div className="flex flex-col gap-8" data-aos="fade-left">
              <div
                className={`card flip-card h-[20rem] w-[20rem] hover:scale-105 transition-all duration-700 ${
                  isFlipped2 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped2(!isFlipped2)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    // style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="absolute bottom-0 flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Click to Flip
                    </h1>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    // style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <p className="text-center text-xl">
                      "Bhumik, head of IOSC-BVP's AI/ML department, inspires
                      students through hands-on workshops and hackathons. He
                      fosters ethical AI practices, multidisciplinary
                      applications, and a collaborative environment, building a
                      skilled, socially aware community."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-white text-center text-2xl">
                  Bhumik Kumar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Ends-----------------------------------------------------------------------------------------------------------------------------

// Info Starts----------------------------------------------------------------------------------------------------------------------------

// const Info = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center h-screen w-full">
//         <div className="flex items-center justify-center bg-red-600 h-[42rem] w-[90rem]">
//           {/* container - 1 */}
//           <div className="">
//             <div className="">
//               <img src="" alt="" className="" />
//             </div>
//             <div className="">
//               <p className=""></p>
//             </div>
//           </div>

//           {/* container 2 */}
//           <div className="">
//             <div className="">
//               <img src="" alt="" className="" />
//             </div>
//             <div className="">
//               <p className=""></p>
//             </div>
//           </div>

//           {/* container 3 */}
//           <div className="">
//             <div className="">
//               <img src="" alt="" className="" />
//             </div>
//             <div className="">
//               <p className=""></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// TEXTPARALLAX STARTS

const TextParallaxContentExample = () => {
  return (
    <div id="AiParallax" className="pt-20 bg-[#000029]">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Let's Build Together"
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent3 />
      </TextParallaxContent> */}
    </div>
  );
};

// Image Heading Starts

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      data-aos="fade-up"
    >
      <div className="relative h-screen ">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// Image Heading Ends

// Images Function Starts

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden  rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

// Images Function Ends

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white "
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

// Content Starts

const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 ">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      INTEL SPEAKER SESSION BY OUR PRESIDENT VISHAL GUPTA FOR FRESHERS
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-zinc-500">
        Under President Vishal Gupta's leadership, IOSC-BVP hosted an Intel
        Speaker Session, introducing new members to the club’s mission,
        achievements, and goals. Vishal covered ML basics, offering foundational
        insights for beginners.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        He also presented Intel’s OneAPI toolkit, highlighting its diverse
        accelerator support.
      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      AI FOR EVERYONE
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        The IOSC-BVP AI/ML department held 'AI for Everyone', a multi-day event
        introducing foundational AI concepts. Day one covered Python basics,
        followed by data visualization techniques using Matplotlib and Seaborn,
        and machine learning algorithms on day three.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Students concluded by creating interactive ML web apps with Streamlit.
      </p>
    </div>
  </div>
);

// const ExampleContent3 = () => (
//   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
//     <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
//       Additional content explaining the above card here
//     </h2>
//     <div className="col-span-1 md:col-span-8">
//       <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
//         blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
//         maiores voluptate est ut saepe accusantium maxime doloremque nulla
//         consectetur possimus.
//       </p>
//       <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//         reiciendis blanditiis aliquam aut fugit sint.
//       </p>
//     </div>
//   </div>
// );

// Content Ends

// TEXTPARALLAX ENDS

// Info Ends----------------------------------------------------------------------------------------------------------------------------

// Footer Starts-----------------------------------------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    <footer
      id="AiFooter"
      className="relative h-full w-full pt-[10rem] content-center bg-[#000029] pb-6 transition delay-500"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="info-wrapper flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white">Contact Us</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Intellectual OneApi's Students Club
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className=" text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  <img
                    src={twitter}
                    alt=""
                    className="rounded-full hover:scale-125"
                  />
                </a>
              </button>
              <button
                className="text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  <img src={instagram} alt="" className="w-8 hover:scale-125" />
                </a>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  <img src="" alt="" />
                </a>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="">
                  <img src="" alt="" />
                </a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="links-container flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      One
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Two
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Three
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Four
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      One
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Two
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Three
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Four
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"></hr>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Developed By
              <a
                href="https://linktr.ee/Aditya__Shrivastav?utm_source=linktree_admin_share"
                className="text-white hover:text-blue-600"
                target="_blank"
              >
                {" "}
                Aditya Shrivastav
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Ends-----------------------------------------------------------------------------------------------------------------------------
