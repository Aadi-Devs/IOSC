import React, { useEffect } from "react";
import "./index.css";
import X from "./Assets/X.png";
import instagram from "./Assets/instagram.png";
import Home from "./Home/Home.jsx";
import Cards from "./Home/Card/Cards.jsx";
import MovingText from "./Home/Moving Text/MovingText.jsx";
import Departments from "./Department/Departments.jsx";
import Companies from "./Home/Companies/Companies.jsx";
import Gmail from "./Assets/Gmail.svg";
import Linkedin from "./Assets/linkedin.png";
// import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 600, // duration of the animation
  //     once: true, // animation occurs only once
  //   });
  // }, []);

  return (
    <>
      <Home />
      <Cards />
      <Departments />
      <Companies />
      <MovingText />

      <footer
        id="Footer"
        className="relative h-full w-full pt-[4rem] content-center bg-[#000029]  pb-6 transition delay-500"
      >
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="info-wrapper flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white">Contact Us</h4>
              <div className="flex sm:flex-row flex-col gap-8 mt-4">
                <div className="flex flex-col text-white">
                  <p>Faculty Incharge: Dr. Monica Gupta</p>
                  <p>(monica.gupta.me@gmail.com)</p>
                </div>
                <div className="flex flex-col text-white">
                  <p>President: Bhumik Kumar</p>
                  <p>(bhumikkapoo27@gmail.com)</p>
                </div>
              </div>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="text-lightBlue-400 font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://x.com/iosc_bvcoe/status/1838946162931278156?s=46">
                    <img
                      src={X}
                      alt=""
                      className="rounded-full hover:scale-125"
                    />
                  </a>
                </button>
                <button
                  className="text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.instagram.com/iosc.bvcoe?igsh=bjc1dDBveXozZ3Js">
                    <img
                      src={instagram}
                      alt=""
                      className="w-8 hover:scale-125"
                    />
                  </a>
                </button>
                <button
                  className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="mailto:iosc.bvcoe@gmail.com">
                    <img src={Gmail} alt="" className="w-8 hover:scale-125" />
                  </a>
                </button>
                <button
                  className=" text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.linkedin.com/company/iosc-bvcoe/">
                    <img
                      src={Linkedin}
                      alt=""
                      className="w-8 hover:scale-125"
                    />
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
                        href="https://docs.google.com/forms/d/1u-7eLNTuSxuNtt6_zEQpsxxu5CLNhLHKiK0wCg7PmPY/edit?pli=1"
                      >
                        Join Community
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                        href="https://docs.google.com/forms/d/1u-7eLNTuSxuNtt6_zEQpsxxu5CLNhLHKiK0wCg7PmPY/edit?pli=1"
                      >
                        Registration
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blue-400 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Four
                      </a>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
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
                </div> */}
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

      {/* <h1 className="text-7xl">IOSC</h1> */}
    </>
  );
};

export default App;
