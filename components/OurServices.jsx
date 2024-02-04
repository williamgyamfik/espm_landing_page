import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  return (
    <div className=" text-white w-full p-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
      <div className="flex flex-col items-center">
        <div className="p-2">
          <FontAwesomeIcon icon={faUser} className="fa-2x" />
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl text-center ">Scouting</h1>
          <p className="p-3 text-left leading-2">
            We develop a deep understanding of our clients’ vision, conduct
            context specific evaluation of the marketplace, and use our
            extensive network to advise on the best synergies between brand
            strategy and rights holder assets.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2">
          <FontAwesomeIcon icon={faArrowTrendUp} className="fa-2x" />
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl text-center  ">Marketing</h1>
          <p className="p-3 text-left leading-2">
            We explore the elaborate marketing needs and digital innovations
            impacting events, teams, players, and endorsements.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2">
          <FontAwesomeIcon icon={faUsers} className="fa-2x" />
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl text-center  ">Collaboration</h1>

          <p className="p-3 text-left leading-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            vitae.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2">
          {" "}
          <FontAwesomeIcon icon={faHandshakeSimple} className="fa-2x" />
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl text-center  ">
            Contract Negotiation
          </h1>
          <p className="p-3 text-left leading-2">
            We understand the needs of every athlete we work with and we have in
            place a dedicated team ready to guide you through the contract
            negotiation process
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2">
          <FontAwesomeIcon icon={faPhone} className="fa-2x" />
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl text-center  ">Support</h1>
          <p className="p-3 text-left">
            Our support team is ready to answer all your queries. Reach out to
            us and lets talk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
