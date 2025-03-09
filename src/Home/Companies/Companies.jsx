import React, { useEffect } from "react";
import "../../index.css";
import "./Companies.css";
import styled, { keyframes, css } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import datacamp from "../../Assets/company_logo/datacamp.jpg";
import devfolio from "../../Assets/company_logo/devfolio.jpg";
import unstop from "../../Assets/company_logo/unstop.jpg";

const Companies = () => {
  // const className = "MovingCompanies";

  // const row1 = [
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  // ];

  // const row2 = [
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  // ];

  const row1 = [datacamp,  unstop, devfolio, datacamp, unstop, devfolio, datacamp, unstop, devfolio];
  // const row2 = [datacamp, company2, datacamp, company2, datacamp, company2];

  const AppContainer = "AppContainer";
  const Wrapper = "Wrapper";
  const Text = "Text";
  // const Note = "Note";

  useEffect(() => {
    AOS.init({
      duration: 1500, // duration of the animation
      once: true, // animation occurs only once
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full bg-[#000029] pb-[5rem]">
        <AppContainer className={AppContainer}>
          <Wrapper className={Wrapper}>
            <Text className={Text}>Our Partners</Text>
            {/* <div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div> */}

            <Marquee className="company-container" data-aos="fade-up">
              <MarqueeGroup className="image-container">
                {row1.map((el) => (
                  <ImageGroup className="image">
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup className="image-container">
                {row1.map((el) => (
                  <ImageGroup className="image">
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
            {/* <Marquee className="company-container" data-aos="fade-up">
              <MarqueeGroup2 className="image-container">
                {row2.map((el) => (
                  <ImageGroup className="image">
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2 className="image-container">
                {row2.map((el) => (
                  <ImageGroup className="image">
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee> */}
          </Wrapper>
        </AppContainer>
      </div>
    </>
  );
};

export default Companies;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  scale: 2;
  // background-color: white;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
