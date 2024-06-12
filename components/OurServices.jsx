import React from "react";
import ServicesCard from "./ServicesCard";

import {
  marketingIcon,
  scoutingIcon,
  contractIcon,
  collaborationIcon,
  supportIcon,
} from "./Svg";

const OurServices = () => {
  const services = [
    {
      id: 1,
      name: "Scouting",
      message:
        "We deeply understand our clients' vision, evaluate the marketplace, and use our network to advise on optimal brand strategy and rights holder synergies.",

      icon: scoutingIcon,
    },
    {
      id: 2,
      name: "Marketing",
      message:
        "We address complex marketing needs and digital innovations for events, teams, players, and endorsements.",
      icon: marketingIcon,
    },

    {
      id: 3,
      name: "Contract Negotiation",
      message:
        "We have a dedicated team to understand and guide athletes through contract negotiations.",
      icon: contractIcon,
    },

    {
      id: 4,
      name: "Support",
      message:
        " Our support team is ready to answer all your queries. Reach out to us and lets talk.",
      icon: supportIcon,
    },

    {
      id: 5,
      name: "Collaboration",
      message:
        "We're eager to collaborate. If you need our expertise or have a joint venture idea, contact us today.",
      icon: collaborationIcon,
    },
  ];

  return (
    <div className=" mx-auto">
      <h1 className="text-4xl text-center text-blue-900 font-bold">
        Our Services
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch  justify-items-center">
          {services.map((service) => {
            return (
              <div>
                <ServicesCard
                  id={service.id}
                  name={service.name}
                  message={service.message}
                  icon={service.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
