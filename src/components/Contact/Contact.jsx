import React, { useRef } from "react";
import { Input, Social, TextArea } from "../index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service from "../../appwrite/config";
import { Bounce, toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  let subHeading = useRef();
  let mainHeading = useRef();
  let contactForm = useRef();
  let contactVideo = useRef();

  useGSAP(() => {
    gsap.from(subHeading.current, {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: subHeading.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 40%",
      },
    });
    gsap.from(mainHeading.current, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: mainHeading.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 40%",
      },
    });
    gsap.from(contactForm.current, {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: contactForm.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    gsap.from(contactVideo.current, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: contactVideo.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });

  //   TODO: submit functionality
  const submit = async (data) => {
    const mail = await service.sendMail({ ...data });
    console.log(mail);
    if (mail) {
      toast.success("Message send!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full px-8 lg:px-20 md:px-20 pt-32 overflow-hidden"
    >
      <h3 ref={subHeading} className="text-sm lg:text-xl md:text-xll">
        GET IN TOUCH
      </h3>
      <h1
        ref={mainHeading}
        className="text-5xl lg:text-7xl md:text-7xl font-semibold pt-4"
      >
        Contact.
      </h1>
      <div className="w-full min-h-[90vh] flex flex-col lg:flex-row md:flex-row justify-between">
        <div
          ref={contactVideo}
          className="lg:w-1/2 md:w-1/2 w-full max-h-[550px] mt-10 flex justify-center items-center"
        >
          <video
            src="../../../contact-bg.mp4"
            alt="contact-bg"
            muted
            loop
            autoPlay
          />
        </div>
        <div
          ref={contactForm}
          className="bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-cyan-500 w-full lg:w-1/2 md:w-1/2 mt-10 h-fit rounded-3xl p-[2px]"
        >
          <div className="bg-zinc-950/90 w-full rounded-3xl">
            <form
              className="w-full h-full p-10 flex flex-col  items-start justify-center gap-10"
              onSubmit={handleSubmit(submit)}
            >
              <Input
                inputClasses="px-3 py-3 rounded-xl text-zinc-800 "
                className="flex flex-col gap-3 font-semibold"
                label="Your Name"
                placeholder="Enter your name"
                required
                {...register("name", { require: true })}
              />
              <Input
                inputClasses="px-3 py-3 rounded-xl text-zinc-800 "
                className="flex flex-col gap-3 font-semibold"
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                required
                {...register("email", { require: true })}
              />
              <TextArea
                textareaClasses="px-3 py-3 rounded-xl text-zinc-800 "
                className="flex flex-col gap-3 font-semibold"
                label="Your Message"
                placeholder="What's do you want to say?"
                required
                {...register("message", { required: true })}
              />
              <button className="px-5 py-2 border-none shadow-inner shadow-zinc-800 rounded-full hover:shadow-zinc-500 duration-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
