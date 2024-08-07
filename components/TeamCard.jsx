import React from "react";
import Image from "next/image";

const TeamCard = ({ teamMembers, i }) => {
  return (
    <>
      <div className="m-10  flex justify-center flex-wrap items-center  text-black">
        <div className="  w-full sm:w-96  sm:p-2">
          <h1 className="text-3xl   text-blue-900 leading-10 font-bold">
            Meet our team
          </h1>
          <p className="leading-10">
            We are a team of passionate individuals dedicated to representing
            sports professionals and organisations and helping them reach the
            highest heights in their career.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 p-1 m-3 gap-5">
          {teamMembers?.map((teamMember) => {
            return (
              <div
                className=" flex items-center h-64 flex-col  "
                key={teamMember.id}
              >
                <div className="w-40">
                  <Image src={teamMember.image} alt="team images" />
                </div>
                <div className="p-3 text-left mb-10">
                  <p className="uppercase ">{teamMember.name}</p>
                  <p className="uppercase text-center text-blue-900 font-bold">
                    {teamMember.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
