"use client";
import hero from "../public/images/hero4nobg.png";
import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
// import Contact from "../components/Contact";
import Team from "../components/Team";
import GetStarted from "@/components/GetStarted";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <section className=" text-slide" id="home">
        <div className=" w-full flex sm:flex-row items-center justify-center flex-wrap  p-5 leading-loose">
          <div className="p-5 lg:w-72 w-full">
            <h1 className="uppercase  text-3xl text-blue-900 font-extrabold ">
              we develop and manage sports talents
            </h1>

            <div className="my-5 w-full ">
              <button
                className="btn w-64 mx-auto block rounded-none text-white hover:text-white bg-blue-900 hover:bg-green-500"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Click here to sign up
              </button>
            </div>
          </div>

          <Image src={hero} alt="hero image" priority="true" width="500" />
        </div>

        <dialog
          id="my_modal_1"
          className=" min-h-0 modal bg-transparent  overflow-scroll"
        >
          <div className=" mt-7 p-5">
            <SignUpForm />
          </div>
        </dialog>
      </section>

      <section className=" w-full  " id="services">
        <OurServices />
      </section>

      <section className=" w-full  " id="about">
        <div className="relative  flex items-center justify-center -z-10  bg-parallax bg-fixed bg-cover  opacity-100">
          <AboutUs />
        </div>
      </section>

      <section className=" bg-white ">
        <Team />
      </section>

      <section className="bg-gray-100">
        <GetStarted />
      </section>

      <section>
        <Subscribe />
      </section>
    </>
  );
}
