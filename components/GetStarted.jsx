import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "./SignUpForm";

const GetStarted = () => {
  return (
    <>
      <dialog id="my_modal_1" className="  modal bg-transparent ">
        <div className="  max-w-full m-10 p-5 overflow-no-scroll-bar">
          <SignUpForm />
        </div>
      </dialog>
      <div className="mx-auto py-16 text-blue-900">
        <h1 className="sm:text-5xl text-2xl text-center  p-5 font-bold">
          Convinced yet? Get started in 3 easy steps...
        </h1>
        {/* <div className="w-full mt-12 sm:mb-10 text-white flex items-start justify-center flex-col  sm:flex-row">
          <div className="flex  mb-10 sm:mb-0">
            <p className="sm:text-1xl text-left lg:text-2xl mt-1 p-1">
              <span className="text-sm p-2 ">1.</span>Fill in your details
            </p>
            <FontAwesomeIcon
              icon={faFileSignature}
              width="30"
              className="mx-2 "
            />
          </div>

          <div className="flex  mb-10 sm:mb-0">
            <p className="sm:text-1xl text-left lg:text-2xl mt-1">
              <span className="text-sm p-2 ">2.</span>
              Submit
            </p>
            <FontAwesomeIcon icon={faPaperPlane} width="30" className="mx-2 " />
          </div>
          <div className="flex mb-10  sm:mb-0">
            <p className=" sm:text-1xl text-left lg:text-2xl mt-1">
              <span className="text-sm p-2 "> 3.</span> We get back to you
              <span className="text-lime-500 font-bold "> ASAP</span>
            </p>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              width="30"
              className="mx-2 "
            />
          </div>
        </div> */}

        <div className="flex justify-center ">
          <div className="grid grid-col-3 text-left">
            <div className="flex justify-start items-center p-5">
              <p className="p-5">
                <span className="text-sm p-2 ">1.</span>Fill in your details
              </p>
              <FontAwesomeIcon
                icon={faFileSignature}
                width="30"
                className="mx-2 "
              />
            </div>
            <div className="flex justify-start items-center p-5">
              <p className="p-5">
                <span className="text-sm p-2 ">2.</span>
                Submit
              </p>
              <FontAwesomeIcon
                icon={faPaperPlane}
                width="30"
                className="mx-2 "
              />
            </div>
            <div className="flex justify-start items-center p-5">
              <div>
                <p className="p-5">
                  <span className="text-sm p-2 "> 3.</span> We get back
                  <span className="text-lime-500 font-bold "> ASAP</span>
                </p>
              </div>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                width="30"
                className="mx-2 "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="btn w-64 mx-auto block rounded-none text-blue-900 hover:text-white bg-white hover:bg-blue-800"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Sign up here
          </button>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
