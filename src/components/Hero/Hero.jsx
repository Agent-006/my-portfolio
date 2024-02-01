import { ArrowBigDownDash } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  let vid = useRef();
  let heading = useRef();
  let name = useRef();
  let introLeft = useRef();
  let introRight = useRef();
  let btn = useRef();

  useGSAP(() => {
    gsap.from(heading.current, {
      x: -300,
      duration: 1,
      delay: 1,
      opacity: 0,
      ease: "power1.out",
    });

    gsap.from(name.current, {
      x: 300,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power1.out",
    });

    gsap.from(introLeft.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
      x: 200,
      stagger: 0.3,
    });

    gsap.from(introRight.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
      x: -200,
      stagger: 0.3,
    });

    gsap.from(btn.current, {
      y: 200,
      delay: 2.5,
      duration: 1,
      opacity: 0,
    });

    gsap.from(vid.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(vid.current, {
      scale: 1.3,
      ease: "power1",
      scrollTrigger: {
        trigger: vid.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full z-40 min-h-[100vh] flex flex-col items-center justify-center py-44 overflow-hidden">
      <div className="my-10">
        <h1 className="text-5xl md:text-8xl lg:text-8xl font-extrabold flex">
          <h1 className="pb-5" ref={heading}>
            Hi, I'm
          </h1>
          <span
            className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
            ref={name}
          >
            <span className="pl-5">Sagar</span>
          </span>
        </h1>

        <div>
          <h3
            ref={introLeft}
            className="text-xl md:text-3xl lg:text-3xl font-semibold tracking-wide"
          >
            I develop user interfaces
          </h3>
          <h3
            ref={introRight}
            className="text-xl md:text-3xl lg:text-3xl font-semibold tracking-wide"
          >
            and web applications.
          </h3>
        </div>
      </div>
      <div className="mb-10">
        <button
          ref={btn}
          className="flex items-center justify-center gap-4 font-medium text-sm lg:text-md md:text-lg px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full"
        >
          scroll down
          <span className="bg-zinc-900 text-zinc-100 p-1 rounded-full">
            <ArrowBigDownDash />
          </span>
        </button>
      </div>
      <video
        ref={vid}
        className="object-cover w-[80%] h-full scale-90"
        src="../../../hero-bg.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </div>
  );
}

export default Hero;
