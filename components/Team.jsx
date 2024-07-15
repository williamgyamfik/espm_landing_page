import React from "react";

import founder from "../public/images/teamNoBackgroundImages/founder1.png";
import accountant from "../public/images/teamNoBackgroundImages/accountant.png";
import scout from "../public/images/teamNoBackgroundImages/scout.png";
import TeamCard from "./TeamCard";
import GhanaianScout from "../public/images/teamNoBackgroundImages/scoutGh.png";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: " Roosevelt Asamoah",
      position: "Ceo",
      image: founder,
      email: "euphoriaspm@gmail.com",
      linkedIn: "https://www.linkedin.com/in/roosevelt-asamoah-b22153174",
    },

    {
      id: 2,
      name: "David Nogotey",
      position: "Scout",
      image: scout,
      email: "euphoriaspm@gmail.com",
      linkedIn: "https://www.linkedin.com/in/david-xornamtey-6a454679",
    },
    {
      id: 3,
      name: "Kwabena Nuamah Ayimadu ",
      position: "Accountant ",
      image: accountant,
      email: "ayimadukwabena@live.com",
      linkedIn: "https://www.linkedin.com/in/kwabena-nuamah-ayimadu-59483574",
    },
    {
      id: 4,
      name: "Elvis Amoako Appiah",
      position: "Scout in Ghana",
      image: GhanaianScout,
      email: "ayimadukwabena@live.com",
      linkedIn: "https://www.linkedin.com/in/kwabena-nuamah-ayimadu-59483574",
    },
  ];

  return <TeamCard teamMembers={teamMembers} />;
};

export default Team;
