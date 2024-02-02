import React from "react";
import Image from "next/image";

const TeamCard = ({ teamMembers, i }) => {
  return (
    <>
      <div className="min-h-0 m-5 flex justify-center flex-wrap items-center  p-5 text-black">
        <div className=" p-2 w-64 ">
          <h1 className="text-3xl   text-blue-900 leading-10 font-bold">
            Meet our team
          </h1>
          <p className="leading-10">
            We are a team of passionate individuals dedicated to representing
            sports professionals and organisations and helping them reach the
            highest heights in their career.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 grid-cols-1  p-5  ">
          {teamMembers?.map((teamMember) => {
            return (
              <div className=" flex items-center justify-center " key={i}>
                <Image
                  className="rounded-full overflow-hidden p-5 m-3"
                  src={teamMember.image}
                  width="250"
                />
                <div className="p-3 ">
                  <p className="uppercase ">{teamMember.name}</p>
                  <p className="uppercase text-center text-blue-900 font-bold">
                    {teamMember.position}
                  </p>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default TeamCard;
