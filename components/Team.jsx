import React from "react";

import founder from "../public/images/teamNoBackgroundImages/founder1.png";
import accountant from "../public/images/teamNoBackgroundImages/accountant.png";
import scout from "../public/images/teamNoBackgroundImages/scout.png";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: " Roosevelt Asamoah",
      position: "Ceo",
      image: founder,
      email: "euphoriaspm@gmail.com",
      linkedIn: "https://www.linkedin.com/in/roosevelt-asamoah-b22153174",
    },

    {
      name: "David Nogotey",
      position: "Scout",
      image: scout,
      email: "euphoriaspm@gmail.com",
      linkedIn: "https://www.linkedin.com/in/david-xornamtey-6a454679",
    },
    {
      name: "Kwabena Nuamah Ayimadu ",
      position: " Accountant ",
      image: accountant,
      email: "ayimadukwabena@live.com",
      linkedIn: "https://www.linkedin.com/in/kwabena-nuamah-ayimadu-59483574",
    },
  ];

  return (
    // "grid grid-cols-1 sm:grid-cols-3 place-items-center gap-4 mt-14 p-5"

    <TeamCard teamMembers={teamMembers} />
  );
};

export default Team;
