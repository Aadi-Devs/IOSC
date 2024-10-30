import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowUpRight, FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
// import Sky from "../../Assets/Sky.jpg";
import IOSC from "../../Assets/IOSC.jpg";
import iosc1 from "../../Assets/iosc1.jpg";
import Project1 from "../../Assets/Project-1.png";
import Project2 from "../../Assets/Project-2.png";
import Project3 from "../../Assets/Project-3.png";
import Project4 from "../../Assets/Project-4.png";
// import { Lenis, useLenis } from '@studio-freight/react-lenis';
// import { SiSpacex } from "react-icons/si";

const WebD = () => {
  // const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the component mounts
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      easing: "ease-in-out", // easing of the animation
      once: false, // animation occurs only once
    });
  }, []);


  

  return (
    <>
      <div className="bg-zinc-950">
        <useLenis
          root
          options={{
            lerp: 0.05,
            infinite: true,
            syncTouch: true,
          }}
        >
          <Nav />
          <Hero />
          {/* <Schedule /> */}
          <HoverImageLinks />
          <TextParallaxContentExample />
        </useLenis>
      </div>

      <div className="h-full w-full bg-zinc-950 ">
        <section className="grid h-full w-full text-2xl gap-2 bg-zinc-950 px-4 py-12 text-white">
          <FlipLink href="#" className="w-[8rem]">
            Twitter
          </FlipLink>
          <FlipLink href="#">Linkedin</FlipLink>
          <FlipLink href="#">Facebook</FlipLink>
          <FlipLink href="https://www.instagram.com/iosc.bvcoe?igsh=bjc1dDBveXozZ3Js">
            Instagram
          </FlipLink>
        </section>
      </div>
    </>
  );
};

export default WebD;





const Nav = () => {
  return (
    <nav className=" fixed w-full top-0 z-10 flex items-center justify-between px-6 py-3 text-white">
      {/* <SiSpacex className="text-3xl mix-blend-difference" /> */}
      <div className="iosc-heading flex justify-center w-full items-center">
        <a href="" className=" text-2xl text-zinc-400 hover:text-white">
          IOSC-WEBD
        </a>
        <button
          onClick={() => {
            document.getElementById("Projects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex absolute right-[1rem] items-center gap-1 text-xs text-zinc-400 hover:text-blue-200"
        >
          Projects <FiArrowRight />
        </button>
      </div>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full "
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-bg-zinc-950 to-bg-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${iosc1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] bg-zinc-950">
      <ParallaxImg
        src={Project2}
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3 rounded-2xl"
      />
      <ParallaxImg
        src={Project1}
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-2xl"
      />
      <ParallaxImg
        src={Project3}
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-2xl"
      />
      <ParallaxImg
        src={Project4}
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-2xl"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};







// Footer Links Start

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block  overflow-hidden whitespace-nowrap text-2xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl"
      style={{
        lineHeight: 0.9,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

// Footer Links End








// Project Starts

const HoverImageLinks = () => {
  return (
    <section id="Projects" className=" bg-zinc-950 h-[60rem] md:p-20">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Project-1"
          subheading="Learn what we do here"
          imgSrc={Project1}
          href="#"
        />
        <Link
          heading="Project-2"
          subheading="We work with great people"
          imgSrc={Project2}
          href="#"
        />
        <Link
          heading="Project-3"
          subheading="Our work speaks for itself"
          imgSrc={Project3}
          href="#"
        />
        <Link
          heading="Project-4"
          subheading="We want cool people"
          imgSrc={Project4}
          href="#"
        />
        {/* <Link
          heading="Project-5"
          subheading="Incase you're bored"
          imgSrc="/imgs/random/10.jpg"
          href="#"
        /> */}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex  items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      data-aos="fade-up"

    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4 absolute right-2"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

// Project Ends








// TEXTPARALLAX STARTS

const TextParallaxContentExample = () => {
  return (
    <div className="bg-zinc-950">
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
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent3 />
      </TextParallaxContent>
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
      <div className="relative h-screen">
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
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
    </div>
  </div>
);

// Content Ends

// TEXTPARALLAX ENDS
