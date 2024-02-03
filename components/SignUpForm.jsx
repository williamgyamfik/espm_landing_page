// "use client";
import React from "react";
import { Label } from "flowbite-react";

const SignUphtmlForm = () => {
  return (
    <div className=" flex flex-col flex-1 pt-4 sm:px-0  ">
      <div className="flex flex-1 flex-col p-2 text-sm m-10  shadow-xl text-blue-900 bg-blue-900">
        <p className="py-4 text-center text-2xl font-bold text-white">
          ESPM talent Sign up form
        </p>
        <div className="flex align-center justify-center  ">
          <form className="mx-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label className="" htmlFor="firstName1" value="First Name" />
                </div>
                <input
                  className="bg-white p-2"
                  id="firstName1"
                  type="text"
                  name="first_name"
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap">
                <div className="mb-2 block">
                  <Label htmlFor="lastName1" value="Surname" />
                </div>
                <input
                  className="bg-white p-2"
                  id="lastName1"
                  type="text"
                  name="last_name"
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <input
                  className="bg-white p-2"
                  id="email1"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="dob1" value="Date of Birth" />
                </div>
                <input
                  className="bg-white p-2 text-blue-900"
                  id="dob1"
                  type="date"
                  name="Date of birth"
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="gender1" value="Gender" />
                </div>
                <select
                  id="gender1"
                  className="bg-white p-2"
                  name="gender"
                  required
                >
                  <option defaultValue="select" disabled selected="select">
                    Select....
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="Phone1" value="Phone" />
                </div>
                <input
                  className="bg-white p-2"
                  id="Phone1"
                  type="tel"
                  name="phone"
                  required
                />
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="sports_type1" value="Sports type" />
                </div>
                <select
                  id="sportsType"
                  className="bg-white p-2"
                  name="sportsType"
                >
                  <option value="Soccer">Soccer</option>
                  <option value="Boxing">Boxing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="mb-2 block">
                <Label htmlFor="video_link1" value="Video link" />
              </div>
              <input
                className="bg-white p-2"
                id="video_link1"
                type="text"
                name="video_link"
                required
              />
            </div>
            <div className="flex flex-wrap gap-5 my-5 justify-center center-align">
              <button className="btn   w-64 mx-auto block rounded-none focus:outline-blue-900 text-blue-900 border-blue-900 hover:text-white bg-white hover:bg-blue-800">
                SAVE
              </button>
              <button className="btn   w-64 mx-auto block rounded-none focus:outline-blue-900 text-blue-900 border-blue-900 hover:text-white bg-white hover:bg-red-500">
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUphtmlForm;
