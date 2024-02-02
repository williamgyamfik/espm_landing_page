"use client";
// import Layout from "@/components/Layout";
import hero from "../public/images/hero4nobg.png";
import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Contact from "../components/Contact";
import bgImage2 from "../public/images/bgImage2.jpg";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <section className="h-auto" id="home">
        <div className=" w-full flex sm:flex-row items-center justify-center flex-wrap  p-5 leading-loose">
          <div className="p-5 lg:w-72 w-full">
            <div className=" ">
              <h1 className="uppercase  text-3xl text-blue-900 font-extrabold ">
                we develop and manage sports talents
              </h1>
            </div>
            <div className="">
              <p className="text-black">We develop and manage talents</p>
            </div>
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
            <Image src={hero} alt="hero image" width="500" />
          </div>
        </div>

        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box w-full max-w-full bg-white ">
            <p className="py-4 text-center ">
              ESPM Sign up form for talent managment
            </p>
            <div className="modal-action">
              {/* <form method="dialog"> */}
              <SignUpForm />
              {/* </form> */}
            </div>
          </div>
        </dialog>
      </section>

      <section className="bg-blue-900 min-h-0 text-center" id="services">
        <h1 className="text-5xl p-5 text-white">Our Services</h1>
        <OurServices />
      </section>

      <section
        className="relative flex items-center justify-center h-min-0 bg-parallax bg-fixed bg-cover overflow-no-scroll opacity-100 "
        id="about"
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-20">
          <AboutUs />
        </div>
      </section>

      <section className="min-h-0 bg-white ">
        <Team />
      </section>

      <section className=" bg-blue-900   " id="contact">
        <Contact />
      </section>
    </div>
  );
}
