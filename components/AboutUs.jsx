import React from "react";

const AboutUs = () => {
  return (
    <div className="px-5 md:px-10 lg:px-64 container mx-auto ">
      <div className=" p-3 ">
        <h1 className="text-4xl text-center mb-10 font-bold text-blue-900">
          About us
        </h1>
        <h2 className="text-3xl  text-left text-blue-900 font-bold mb-3">
          Our story
        </h2>

        <p className="leading-10 text-white">
          Our story began in 2018 when the founders had a{" "}
          <span className="font-bold  leading-10">vision</span> to develop and
          represent talents in{" "}
          <span className="font-bold leading-10">Africa</span>, who may not have
          professional representatives to manage them. Since then, we have grown
          into a successful business with a team of dedicated
          <span className="font-bold leading-10"> professionals</span> who share
          our passion for developing and representing{" "}
          <span className="font-bold leading-10">talents</span> . We have
          expertise in soccer (football), boxing and other key sporting
          disciplines.
        </p>
      </div>

      <div className="mt-16 p-3   ">
        <h2 className="text-3xl  text-left text-blue-900 leading-10 font-bold mb-3">
          What we believe in
        </h2>
        <p className="leading-10 text-white">
          We believe in professionalism and excellence. Our goal is to provide
          our clients with the highest standards of representation and
          management while maintaining our commitment to ethical and sustainable
          practices. We are proud of what we have accomplished so far and are
          excited about the future
        </p>
      </div>

      <div className="mt-16 p-3  ">
        <h2 className="text-3xl  text-left text-blue-900 leading-10 font-bold mb-3">
          Our mission
        </h2>
        <p className="leading-10 text-white">
          Euphoria Sports Management (ESPM) is a sports management, marketing
          and consulting business. We have expertise in representing athletes
          across a variety of sports, as well as advising governing bodies and
          drawing investment strategies for individuals or institutions. We help
          provide sponsorship acquisition, work hand in hand with brands to
          create successful partnerships in sports for our athletes and the firm
          as a whole.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
