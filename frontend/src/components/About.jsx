import React from "react";
import Jadab from "../../public/jadab.jpg";
import Pm from "../../public/pm.jpg";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />

      {/* Team section with top margin */}
      <div className="mt-24 flex flex-col md:flex-row justify-center gap-12 px-4 md:px-20">
  {/* Jadab */}
  <div className="flex flex-col items-center justify-start">
    <h1 className="text-3xl md:text-4xl text-indigo-400 mb-4">Jadab Lal Sarkar</h1>
    <img
      src={Jadab}
      className="w-48 md:w-64 h-48 md:h-64 border-gray-900 rounded-3xl border-8 object-cover shadow"
      alt="Jadab"
    />
  </div>

  {/* Pavel */}
  <div className="flex flex-col items-center justify-start">
    <h1 className="text-3xl md:text-4xl text-indigo-400 mb-4">Pavel Mahmud Raj</h1>
    <img
      src={Pm}
      className="w-48 md:w-64 h-48 md:h-64 border-gray-900 rounded-3xl border-8 object-cover shadow"
      alt="Pavel"
    />
  </div>
</div>

     


      {/* About description section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12 md:mb-20">
        <p className="text-base md:text-lg leading-relaxed">
          This project is developed by Jadab Lal Sarkar and Pavel Mahmud Raj as
          a part of the final project for the Web Application Development course
          at the University of Asia Pacific (UAP). The project aims to create a
          user-friendly platform for buying, selling, and exploring cars online.
          It focuses on clean design, responsive layout, and smooth user experience.
          The app also showcases team members, their contributions, and project features.
        </p>
      </div>
    </>
  );
}

export default About;