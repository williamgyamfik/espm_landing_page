import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  return (
    <div className=" text-white w-full p-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 ">
      <div className="mt-5 flex flex-col">
        <div className="">
          <FontAwesomeIcon icon={faUser} className="fa-3x" width="100" />
        </div>
        <h1 className="text-xl sm:text-3xl text-center   font-bold">
          Scouting
        </h1>
        <p className="p-3 text-left">
          We develop a deep understanding of our clients’ vision, conduct
          context specific evaluation of the marketplace, and use our extensive
          network to advise on the best synergies between brand strategy and
          rights holder assets.
        </p>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="">
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="fa-3x"
            width="100"
          />
        </div>
        <h1 className="text-xl sm:text-3xl text-center font-bold ">
          Marketing
        </h1>
        <p className="p-3 text-left">
          We explore the elaborate marketing needs and digital innovations
          impacting events, teams, players, and endorsements.
        </p>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="">
          <FontAwesomeIcon icon={faUsers} className="fa-3x" width="100" />
        </div>
        <h1 className="text-xl sm:text-3xl text-center  font-bold">
          Collaboration
        </h1>

        <p className="p-3 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, vitae.
        </p>
      </div>

      <div className="mt-5  flex flex-col">
        <div className="">
          <FontAwesomeIcon
            icon={faHandshakeSimple}
            className="fa-3x"
            width="100"
          />
        </div>
        <h1 className="text-xl sm:text-3xl text-center  font-bold">
          Contract Negotiation
        </h1>
        <p className="p-3 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, vitae.
        </p>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="">
          <FontAwesomeIcon icon={faPhone} className="fa-3x" width="100" />
        </div>
        <h1 className="text-xl sm:text-3xl text-center  font-bold">Support</h1>
        <p className="p-3 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, vitae.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
