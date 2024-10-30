import React, { useState, useEffect } from "react";
import "../../index.css";
import "./Cards.css";
// import Earth from "../../Assets/Earth.jpg";
// import Sky from "../../Assets/Sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Vite from "../../Assets/vite.svg";

const Cards = () => {
  // Card States
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

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
          {/* Event 1 */}
          <div
            className="event-wrapper flex items-center gap-60  h-[28rem] m-16"
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
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Techgenesis 2023
                    </h1>
                    <p className="flip-card-p text-center">
                      "Embark on a journey through innovation, creativity, and
                      real-world challenges with our flagship event featuring
                      DevFusion, Projexon, and Hire Harbour."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="text-2xl font-bol my-[1.5rem]">
                      Techgenesis 2023
                    </h1>
                    <p className="text-center">
                      "Techgenesis, our first-ever flagship event, brought
                      together brilliant minds to compete and showcase their
                      skills across three unique events: DevFusion, a 24-hour
                      hackathon; Projexon, a project exhibition."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-end text-white">
                <h1>Techgenesis 2023</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-end text-2xl text-white">
                <p>
                Techgenesis 2023 by IOSC-BVP featured a 24-hour hackathon, DevFusion, fostering innovation. Projexon highlighted student projects, while Hire Harbour simulated job placements, enhancing skills and teamwork among aspiring tech leaders.
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
                <h1>Summer Hack 2023</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-2xl text-white">
                <p>
                  Summer Hack 2023, organized by IOSC-BVP, offered students a
                  platform to showcase technical skills and creativity. Guided
                  by mentors, participants explored innovative ideas using
                  cutting-edge technology.
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
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                    // style={{ backgroundColor: `cornflowerblue` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Summer Hack 2023
                    </h1>
                    <p className="flip-card-p text-center">
                      "Unleash your creativity and problem-solving skills in a
                      fast-paced environment. Tackle real-world challenges with
                      innovative solutions alongside like-minded individuals."
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                    // style={{ backgroundColor: `red` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">
                      Summer Hack 2023
                    </h1>
                    <p className="text-center">
                      "Summer Hack 2023 brought together coders, designers, and
                      problem solvers to innovate, build, and present solutions
                      to real-world problems. Participants worked in teams to
                      create projects within a 48-hour deadline."
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
                  isFlipped1 ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped1(!isFlipped1)}
              >
                <div className="flip-card-inner w-[100%] h-[100%]">
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Sky
                    </h1>
                    <p className="flip-card-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                  >
                    <h1 className="text-2xl font-bol my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-event-info-container flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="flip-card-event-heading text-6xl text-end text-white">
                <h1>Event Heading</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-end text-2xl text-white">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
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
                <h1>Event Heading</h1>
              </div>
              <div className="flip-card-event-info flex justify-center text-2xl text-white">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
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
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                    // style={{ backgroundColor: `cornflowerblue` }}
                  >
                    <h1 className="flip-card-h1 text-2xl font-bold/ my-[1.5rem]">
                      Sky
                    </h1>
                    <p className="flip-card-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Vite})` }}
                    // style={{ backgroundColor: `red` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
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
