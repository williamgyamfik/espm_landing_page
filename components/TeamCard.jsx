import React from "react";
import Image from "next/image";

const TeamCard = ({ teamMembers, i }) => {
  return (
    <>
      <div className="min-h-0  mx-5 p-5 text-black">
        <div className="mt-16 p-3  mx-auto">
          <h1 className="text-3xl text-center   text-blue-900 leading-10 font-bold">
            Meet our team
          </h1>
          <p className="leading-10">
            We are a team of passionate individuals dedicated to representing
            sports professionals and organisations and helping them reach the
            highest heights in their career.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-3">
          {teamMembers?.map((teamMember) => {
            return (
              <div key={i}>
                <div className="p-3 m-5 mx-auto flex justify-center  bg-blue-900">
                  <div className="text-center ">
                    <Image className="" src={teamMember.image} width="200" />
                    <p className="uppercase">{teamMember.name}</p>
                    <p className="uppercase ">{teamMember.position}</p>
                  </div>
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
