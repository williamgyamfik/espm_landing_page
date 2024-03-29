"use client";
import hero from "../public/images/hero4nobg.png";
import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Contact from "../components/Contact";
import Team from "../components/Team";
import GetStarted from "@/components/GetStarted";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <section className="min-h-0 text-slide" id="home">
        <div className=" w-full flex sm:flex-row items-center justify-center flex-wrap  p-5 leading-loose">
          <div className="p-5 lg:w-72 w-full">
            <h1 className="uppercase  text-3xl text-blue-900 font-extrabold ">
              we develop and manage sports talents
            </h1>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, suscipit.
            </p>
            <div className="mb-5 w-full">
              <p
                className="underline cursor-pointer hover:text-blue-900 uppercase"
                role="button"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Click here to sign up
              </p>
            </div>
          </div>
          <div className=" ">
            <Image src={hero} alt="hero image" priority="true" width="500" />
          </div>
        </div>

        <dialog
          id="my_modal_1"
          className=" min-h-0 modal bg-transparent  overflow-scroll"
        >
          {/* <div className="modal-box w-full max-w-full bg-black ">
            <p className="py-4 text-center text-2xl font-bold">
              ESPM Sign up form for talent managment
            </p> */}
          {/* <div className="modal-action"> */}

          <div className=" mt-7 p-5">
            <SignUpForm />
          </div>

          {/* </div> */}
          {/* </div> */}
        </dialog>
      </section>

      <section className="bg-blue-900 min-h-0 text-center" id="services">
        <h1 className="text-3xl p-5 text-white font-bold">Our Services</h1>
        <OurServices />
      </section>

      <section
        className="relative px-10 sm:px-28  flex items-center justify-center -z-10 h-min-0 bg-parallax bg-fixed bg-cover  opacity-100 "
        id="about"
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-20">
          <h1 className="text-blue-900 text-center font-bold text-3xl p-5">
            About us
          </h1>
          <AboutUs />
        </div>
      </section>

      <section className="min-h-0 bg-white ">
        <Team />
      </section>

      <section className="bg-blue-900">
        <GetStarted />
      </section>

      <section>
        <Subscribe />
      </section>

      <section className=" bg-blue-900" id="contact">
        <div className="p-5">
          <h1 className="text-3xl text-white text-center font-bold">
            Contact{" "}
          </h1>
        </div>
        <Contact />
      </section>
    </>
  );
}
