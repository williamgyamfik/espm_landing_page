// "use client";
import React, { useState } from "react";
import { Label } from "flowbite-react";
import { supabase } from "../Utils/supabaseClient";
import Spinner from "./Spinner";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignUpForm = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [dob, setDob] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const [userInput, setUserInput] = useState({
    first_name: "",
    last_name: "",
    Date_of_birth: "",
    gender: "",
    email: "",
    phone: "",
    video_link: "",
    otherSportsType: "",
    sportsType: "",
  });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    try {
      let age;
      const currentDate = new Date();
      const birthYear = new Date(userInput.age);

      if (birthYear.getFullYear() > currentDate.getFullYear()) {
        setDob(true);
      } else {
        age = currentDate.getFullYear() - birthYear.getFullYear();
      }

      const { data, error } = await supabase
        .from("userProfile")
        .insert([
          {
            first_name: userInput.first_name,
            last_name: userInput.last_name,
            email: userInput.last_name,
            video_link: userInput.video_link,
            gender: userInput.gender,
            phone: phoneNumber,
            age: userInput.age,
            Date_of_birth: userInput.Date_of_birth,
            sports_type:
              userInput.sportsType === "Other"
                ? userInput.otherSportsType
                : userInput.sportsType,
          },
        ])
        .select("*");
      userInput.first_name = "";
      userInput.last_name = "";
      userInput.email = "";
      userInput.age = "";
      userInput.video_link = "";
      userInput.gender = "";
      setPhoneNumber((phoneNumber) => {
        phoneNumber = "";
      });
      userInput.otherSportsType = "";
      userInput.sportsType = "";
      setDob(false);
    } catch (error) {}
    setShowSpinner(false);
  };

  // if (showSpinner) {
  //   <Spinner />;
  // }
  return (
    <div className=" flex flex-col flex-1 pt-4 sm:px-0  ">
      <div className="flex flex-1 flex-col p-2 text-sm   shadow-xl text-blue-900 bg-blue-900">
        <p className="py-4 text-center text-2xl font-bold text-white">
          ESPM talent Sign up form
        </p>
        <div className="flex align-center justify-center  ">
          <form className="mx-2 w-full" onSubmit={signUpHandler}>
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
                  onChange={userInputHandler}
                  value={userInput?.first_name}
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
                  onChange={userInputHandler}
                  value={userInput?.last_name}
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
                  onChange={userInputHandler}
                  value={userInput?.email}
                  required
                />
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="dob1" value="Date of Birth" />
                </div>
                <input
                  className=" p-2 bg-white "
                  id="dob1"
                  type="date"
                  name="Date_of_birth"
                  onChange={userInputHandler}
                  value={userInput?.Date_of_birth}
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
                  onChange={userInputHandler}
                  value={userInput?.gender}
                  required
                >
                  <option defaultValue="select" disabled value="select">
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
                <div className="w-64">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    className="  p-2 w-64 PhoneInputCountry PhoneInputInput"
                    id="Phone1"
                    type="tel"
                    name="phone"
                    onChange={setPhoneNumber}
                    value={phoneNumber}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="sports_type1" value="Sports type" />
                </div>
                <select
                  id="sportsType"
                  className="bg-white p-2"
                  name="sportsType"
                  onChange={userInputHandler}
                  value={userInput?.sportsType}
                >
                  <option value="Soccer">Soccer</option>
                  <option value="Boxing">Boxing</option>
                  <option value="Other">Other</option>
                </select>

                {userInput?.sportsType === "Other" ? (
                  <div className="w-full px-3 -mx-3 mt-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Please specify"
                      onChange={userInputHandler}
                      name="otherSportsType"
                      value={userInput.other}
                      required
                    />
                  </div>
                ) : null}
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
                onChange={userInputHandler}
                value={userInput?.video_link}
                required
              />
            </div>
            <div className="flex flex-wrap gap-5 my-5 justify-center center-align">
              <button className="btn w-full sm:w-64 mx-auto block rounded-none focus:outline-blue-900 text-white border-blue-900 hover:text-white bg-blue-600 hover:bg-green-500">
                SAVE
              </button>
              <button
                className="btn w-full sm:w-64 mx-auto block rounded-none focus:outline-blue-900 text-blue-900 border-blue-900 hover:text-white bg-white  hover:bg-red-500"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
