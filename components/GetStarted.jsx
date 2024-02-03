import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const GetStarted = () => {
  return (
    <div className="mx-auto py-16">
      <h1 className="text-3xl  text-center text-white p-3 font-bold">
        Convinced yet? Get started in 3 easy steps...
      </h1>
      <div className="w-full mt-12 sm:mb-10 text-white flex  justify-around flex-col items-center sm:flex-row">
        <div className="flex justify-center mb-10 sm:mb-0">
          <p className="sm:text-1xl lg:text-2xl mt-1 p-1">
            <span className="text-sm p-2 ">1.</span>Fill in your details
          </p>
          <FontAwesomeIcon
            icon={faFileSignature}
            width="30"
            className="mx-2 "
          />
        </div>

        <div className="flex justify-center mb-10 sm:mb-0">
          <p className="sm:text-1xl lg:text-2xl mt-1">
            <span className="text-sm p-2 ">2.</span>
            Submit
          </p>
          <FontAwesomeIcon icon={faPaperPlane} width="30" className="mx-2 " />
        </div>
        <div className="flex justify-center  sm:mb-0">
          <p className=" sm:text-1xl lg:text-2xl mt-1">
            <span className="text-sm p-2 "> 3.</span> We get back to you
            <span className="text-lime-500 font-bold "> ASAP</span>
          </p>
          <FontAwesomeIcon icon={faPhoneVolume} width="30" className="mx-2 " />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn w-64 mx-auto block rounded-none text-blue-900 hover:text-white bg-white hover:bg-blue-800">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
