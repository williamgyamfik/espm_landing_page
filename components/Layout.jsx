"use client";
import React, { useEffect, useState } from "react";
import { PageWrapper } from "../app/page_wrapper.jsx";

import Link from "next/link";
import hero from "../public/images/hero4nobg.png";
import Image from "next/image";
import { Navbar } from "flowbite-react";

const Layout = ({ children }) => {
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        const scrollHeight = window.scrollY;
        const nav = document.getElementById("nav");
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        if (scrollHeight > navHeight) {
          setNavBar(true);
        } else {
          setNavBar(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);

        const sectionElementId = document.getElementById(id);
        const nav = document.getElementById("nav");

        const navHeight = nav.getBoundingClientRect().height;

        let position = sectionElementId.offsetTop - navHeight;

        if (!navBar) {
          position = position - navHeight;
        }

        window.scrollTo({
          left: 0,
          top: position,
        });
      });
    });
  }, []);

  return (
    <>
      <header className="">
        {/* <Image src={hero} alt="hero image" layout="fill" objectFit="cover" /> */}

        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col" id="home">
            {/* Navbar */}
            <div
              className={`${
                navBar ? "fixed bg-white text-black " : "bg-blue-900 text-white"
              } w-full   navbar justify-between `}
              id="nav"
            >
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link href="/">
                <div className="flex-1 px-2 mx-2">
                  <h3 className="text-sm">Euphoria Sports Management</h3>
                </div>
              </Link>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a href="#home" className="scroll-link">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#services" className="scroll-link">
                      Our services
                    </a>
                  </li>

                  <li>
                    <a href="#about" className="scroll-link">
                      About us
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="scroll-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-headingColor">
              {/* Sidebar content here */}
              <li>
                <a href="#home" className="scroll-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="scroll-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="scroll-link">
                  About us
                </a>
              </li>

              <li>
                <a href="#contact" className="scroll-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/signup">Sign up</a>
              </li>
            </ul>
          </div>
          {children}
        </div>
        {/* <div className="min-h-screen relative grid text-center items-center text-black p-5"> */}
        {/* <div className="p-2 ">
            <h1 className="uppercase text-6xl font-semibold p-2 leading-loose">
              Euphoria Sports managment
            </h1>
            <p className="leading-loose mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              est, sequi ut earum quam illo. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloremque illo ea nostrum incidunt
              facilis libero nulla ipsum excepturi minus perferendis.
            </p>
            <button className="text-white underline">
              Click here to sign up
            </button>
          </div> */}
        {/* </div> */}
      </header>
      {navBar ? <PageWrapper /> : null}
    </>
  );
};

export default Layout;
