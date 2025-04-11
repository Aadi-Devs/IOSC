import React, { useState, useEffect } from "react";
import "../../index.css";
import "./Cards.css";
// import Earth from "../../Assets/Earth.jpg";
// import Sky from "../../Assets/Sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import Vite from "../../Assets/vite.svg";

import TechGenesis2025Front from "../../Assets/TechGenesis2025Front.jpg";
import TechGenesis2025Back from "../../Assets/TechGenesis2025Back.png";
import TechGenesisFront from "../../Assets/TechGenesisFront.jpg";
import TechGenesisBack from "../../Assets/TechGenesisBack.jpg";
import IdeateFront from "../../Assets/IdeateFront.jpg";
import IdeateBack from "../../Assets/IdeateBack.jpg";
import ai_event_front from "../../Assets/AI_Workshop_home.jpg";
import ai_event_back from "../../Assets/AI_ws_home_card_bg.jpg";
import WebD_front from "../../Assets/WebD_front.jpg";
import WebD_back from "../../Assets/WebD_back.png";

const Cards = () => {
  // Card States
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      easing: "ease-in-out", // easing of the animation
      once: false, // animation occurs only once
    });
  }, []);

  return (
    <>
      <div
        id="Events"
        className="flex flex-col gap-8 justify-center bg-[#000029] h-full   p-4 pt-12"
      >
        <div className="h-[5rem]" data-aos="fade-up">
          <h1 className="text-6xl text-center text-white">Our Events</h1>
        </div>

        <div className="event-container h-full w-full flex flex-col">
          {/* Event 5 */}
          <div
            className="event-wrapper event-wrapper2 flex items-center gap-60 h-[28rem] m-16"
            data-aos="fade-up"
          >
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-white">
                <h1>Tech Genesis 2025</h1>
              </div>
              <div className="flip-card-event-info flex flex-col gap-10 text-2xl justify-center text-white">
                <p className="">
                  "TechGenesis 2.0 by IOSC-BVP is a hybrid hackathon featuring a
                  bootcamp on April 10th, an online Devयुद्ध hackathon on April
                  11th with an offline round on 12th April, and an offline pitch
                  event HardwareX on April 12th, with prizes totaling $400."
                </p>
              </div>
            </div>
            <div>
              <div
                className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${
                  isFlipped5 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped5(!isFlipped5)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${TechGenesis2025Front})` }}
                  >
                    <h1 className="flip-card-h1 text-2xl my-[1.5rem]">
                      Tech Genesis 2025
                    </h1>
                    <p className="flip-card-p text-center text-xl">
                      "TechGenesis 2.0, a hybrid hackathon with expert sessions,
                      coding battles, hardware showcases, mentorship, and
                      exciting prizes!"
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${TechGenesis2025Back})` }}
                  >
                    {/* <p className="text-center text-xl">
                      "High participation with a collaborative and competitive
                      spirit. Successful presentations of unique ideas with
                      real-world applications. Recognition for top-performing
                      teams, opening doors for future development. Ideate was a
                      success in sparking innovative thinking and showcasing the
                      creative potential of our students."
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event 1 */}
          <div
            className="event-wrapper flex items-center gap-60 h-[28rem] m-16"
            data-aos="fade-up"
          >
            <div>
              <div
                className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${
                  isFlipped1 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped1(!isFlipped1)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${TechGenesisFront})` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Tech Genesis 2024
                    </h1>
                    <p className="flip-card-p text-center text-xl">
                      "Embark on a journey through innovation, creativity, and
                      real-world challenges with our flagship event featuring
                      DevFusion, Projexon, and Hire Harbour."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${TechGenesisBack})` }}
                  >
                    <p className="text-center text-xl">
                      "So many participants, along with mentorship from tech
                      industry experts. Hands-on project demonstrations and
                      awards in Projexon. Placement simulator experience through
                      Hire Harbour for career readiness. Techgenesis set the
                      foundation for future flagship events with high
                      engagement, technical achievements, and industry
                      interactions."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-end text-white">
                <h1>Tech Genesis 2024</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-end text-2xl text-white">
                <p>
                  "Techgenesis 2024 by IOSC-BVP featured a 24-hour hackathon,
                  DevFusion, fostering innovation. Projexon highlighted student
                  projects, while Hire Harbour simulated job placements,
                  enhancing skills and teamwork among aspiring tech leaders."
                </p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div
            className="event-wrapper event-wrapper2 flex items-center gap-60 h-[28rem] m-16"
            data-aos="fade-up"
          >
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-white">
                <h1>Ideate</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-2xl text-white">
                <p>
                  "Ideate, IOSC-BVP’s first ideathon, challenged 100+ students
                  to creatively solve modern issues, fostering teamwork,
                  mentorship, and innovation. Top ideas received awards,
                  establishing IOSC-BVP as a problem-solving hub."
                </p>
              </div>
            </div>
            <div>
              <div
                className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${
                  isFlipped2 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped2(!isFlipped2)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${IdeateFront})` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Ideate
                    </h1>
                    <p className="flip-card-p text-center text-xl">
                      "The first major ideathon of IOSC-BVP: A challenge to
                      brainstorm solutions. Expert mentorship sessions guiding
                      ideation. Awards for top ideas with development
                      opportunities."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${IdeateBack})` }}
                  >
                    <p className="text-center text-xl">
                      "High participation with a collaborative and competitive
                      spirit. Successful presentations of unique ideas with
                      real-world applications. Recognition for top-performing
                      teams, opening doors for future development. Ideate was a
                      success in sparking innovative thinking and showcasing the
                      creative potential of our students."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div
            className="event-wrapper flex items-center gap-60  h-[28rem] m-16"
            data-aos="fade-up"
          >
            <div>
              <div
                className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${
                  isFlipped3 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped3(!isFlipped3)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${ai_event_front})` }}
                  >
                    <h1 className="flip-card-h1 text-center text-2xl font-bold/ mt-[1.2rem]">
                      AI for Everyone - AI/ML Bootcamp
                    </h1>
                    <p className="flip-card-p text-center text-xl">
                      "A week-long bootcamp exploring AI/ML fundamentals:
                      Beginner-friendly sessions from Python basics to ML
                      models. Hands-on AI and ML project work. Guidance from
                      industry mentors."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover bg-center border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${ai_event_back})` }}
                  >
                    <p className="text-center text-xl">
                      "Covered foundational concepts and advanced applications
                      in AI/ML. Hands-on project experience applying machine
                      learning skills. Industry networking and mentorship that
                      supported learning."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-end text-white">
                <h1>AI for Everyone</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-end text-2xl text-white">
                <p>
                  "AI for Everyone, a beginner-friendly bootcamp, introduced
                  students to Python, data analysis, and ML projects with
                  hands-on guidance from mentors, building a solid foundation in
                  AI through practical application"
                </p>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div
            className="event-wrapper event-wrapper2 flex items-center gap-60 h-[28rem] m-16"
            data-aos="fade-up"
          >
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-white">
                <h1>WebD Workshop</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-2xl text-white">
                <p>
                  "The WebD Workshop was a week-long bootcamp teaching web
                  development fundamentals to advanced JavaScript. Participants
                  built portfolio-ready projects, gained practical skills, and
                  connected with fellow aspiring developers."
                </p>
              </div>
            </div>
            <div>
              <div
                className={`card flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500 ${
                  isFlipped4 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped4(!isFlipped4)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${WebD_front})` }}
                    // style={{ backgroundColor: `cornflowerblue` }}
                  >
                    <h1 className="flip-card-h1 text-center text-2xl font-bold/ mt-[1.2rem]">
                      WebD Workshop - Web Development Bootcamp
                    </h1>
                    <p className="flip-card-p text-center text-xl">
                      "A week-long bootcamp for aspiring web developers: Basics
                      of HTML, CSS, and JavaScript. Hands-on projects for
                      practical experience. Portfolio building and networking
                      opportunities."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center justify-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${WebD_back})` }}
                  >
                    <p className="text-xl text-center">
                      "Engaging sessions covering essential web dev skills.
                      Practical projects to build a strong development
                      portfolio. Collaboration and mentorship to guide progress.
                      The WebD Workshop was a success, establishing solid web
                      foundations for many students and encouraging further
                      exploration in development."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
