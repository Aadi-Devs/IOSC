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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-screen w-full relative  overflow-hidden">
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
        <div className="relative bg-opacity-40 backdrop-blur-md bg-transparent h-[5.5rem]">
          <header className="navbar-smooth flex items-center justify-between bg-opacity-5 text-white">
            <div className="container mx-auto flex items-center h-20">
              <a href="" className="flex items-center justify-center">
                <img src={Iosclogo} alt="Logo" className="h-14" />
              </a>

              {/* Hamburger Icon for small screens */}
              <button
                className="ham-burger-button absolute right-12 custom:hidden flex items-center px-3 py-2 border rounded text-blue-400 border-blue-950 hover:text-blue-600 hover:border-blue-600"
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
                  <li className="list-items p-5 xl:p-8 active hover:text-blue-600">
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
                  <Link onClick={() => scrollToElement("Footer", 1800)}>
                    <button className="absolute right-3 top-5 bg-transparent text-whit h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-700 hover:text-white hover:bg-blue-400 hover:border-black">
                      Contact Us
                    </button>
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
                  <li className="list-items p-5 xl:p-8 hover:text-blue-600">
                    <a href="">Home</a>
                  </li>
                  <Link className="p-5 xl:p-8 hover:text-blue-600" to="/team">
                    Team
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Departments", 1500)}
                  >
                    Departments
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-600"
                    onClick={() => scrollToElement("Events", 1000)}
                  >
                    Events
                  </Link>
                  <Link onClick={() => scrollToElement("Footer", 1800)}>
                    <button className="bg-transparent text-blue-200 h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-700 hover:text-white hover:bg-blue-400 hover:border-black mt-6">
                      Contact Us
                    </button>
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

export default Home;

// import React, { useEffect, useState } from "react";
// import "../index.css";
// import { Link } from "react-router-dom";
// import Iosclogo from "../Assets/website background.png";
// import videoSrc from "../Assets/Nature.mp4";

// const Home = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

//   useEffect(() => {
//     const handleScroll = () => {
//       requestAnimationFrame(() => {
//         setScrollY(window.scrollY);
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToElement = (elementId, duration) => {
//     const target = document.getElementById(elementId);
//     if (!target) return;

//     const startPosition = window.pageYOffset;
//     const targetPosition = target.getBoundingClientRect().top + startPosition;
//     const startTime = performance.now();

//     const easeInOutQuad = (t) =>
//       t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

//     const animateScroll = (currentTime) => {
//       const timeElapsed = currentTime - startTime;
//       const progress = easeInOutQuad(timeElapsed / duration);
//       const run = progress * (targetPosition - startPosition) + startPosition;
//       window.scrollTo(0, run);

//       if (timeElapsed < duration) {
//         requestAnimationFrame(animateScroll);
//       } else {
//         window.scrollTo(0, targetPosition);
//       }
//     };

//     requestAnimationFrame(animateScroll);
//   };

//   return (
//     <>
//       <div className="h-screen w-full relative z-[1] overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={videoSrc}
//           autoPlay
//           loop
//           muted
//           style={{
//             transform: `translateY(${scrollY * 0.5}px)`, // Adjust the parallax effect speed
//             willChange: "transform", // Optimize for better performance
//           }}
//         />

//         <div className="relative bg-transparent h-[5.5rem]">
//           <header className="flex items-center justify-center bg-opacity-5 text-white">
//             <div className="container mx-auto flex items-center h-20 justify-between">
//               <a href="" className="flex items-center justify-center">
//                 <img src={Iosclogo} alt="" className="h-14" />
//               </a>

//               {/* Hamburger Icon for smaller screens */}
//               <div className="absolute md:hidden right-6">
//                 <button
//                   className="text-white focus:outline-none"
//                   onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                   {/* Icon for hamburger */}
//                   <svg
//                     className="w-8 h-8 z-[10]"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16m-7 6h7"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>

//               {/* Navigation menu */}
//               <nav
//                 className={`${
//                   menuOpen ? "block" : "hidden"
//                 } md:flex contents font-semibold g-black text-base lg:text-lg`}
//               >
//                 <ul
//                   className="absolute right-1 top-16 flex flex-col bg-opacity-40 backdrop-blur-md md:flex-row items-center rounded-lg p-5 z-[1]"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))", // Glass-like gradient
//                     boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // Subtle shadow for depth
//                     border: "1px solid rgba(255, 255, 255, 0.18)", // Light border for contrast
//                   }}
//                 >
//                   <li className="p-5 xl:p-8 active hover:text-blue-600">
//                     <a href="">
//                       <span>Home</span>
//                     </a>
//                   </li>
//                   <Link className="p-5 xl:p-8 hover:text-blue-600" to="/team">
//                     <span>Team</span>
//                   </Link>
//                   <Link
//                     className="p-5 xl:p-8 hover:text-blue-600"
//                     onClick={() => scrollToElement("Departments", 1500)}
//                   >
//                     <span>Departments</span>
//                   </Link>
//                   <Link
//                     className="p-5 xl:p-8 hover:text-blue-600"
//                     onClick={() => scrollToElement("Events", 1000)}
//                   >
//                     <span>Events</span>
//                   </Link>

//                   {/* Contact Us button in menu on small screens */}
//                   <li className="p-3 xl:p-8 md:hidden">
//                     <Link onClick={() => scrollToElement("Footer", 1800)}>
//                       <span className="bg-transparent  h-10 w-32 hover:text-blue-600">
//                         Contact Us
//                       </span>
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>

//               {/* Contact Us button for larger screens */}
//               <div className="hidden md:block">
//                 <Link onClick={() => scrollToElement("Footer", 1800)}>
//                   <button className="bg-transparent text-blue-200 h-10 w-32 ">
//                     Contact Us
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </header>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
