import React, { useEffect } from "react";
import "./index.css";
import twitter from "./Assets/icons8-twitter-48.png";
import instagram from "./Assets/instagram.png";
import Home from "./Home/Home.jsx";
import Cards from "./Home/Card/Cards.jsx";
import MovingText from "./Home/Moving Text/MovingText.jsx";
import Departments from "./Department/Departments.jsx";
import Companies from "./Home/Companies/Companies.jsx";
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

      <footer id="Footer" className="relative h-full w-full pt-[4rem] content-center bg-[#000029] pt-8 pb-6 transition delay-500">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="info-wrapper flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white">Contact Us</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                doloremque.
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
                    <img
                      src={instagram}
                      alt=""
                      className="w-8 hover:scale-125"
                    />
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
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href=""
                  className="text-white hover:text-blue-600"
                  target="_blank"
                >
                  {" "}
                  Blah Blah Blah
                </a>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-blueGray-800"
                ></a>
                .
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
