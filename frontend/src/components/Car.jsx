import React from "react";
import list from "../../public/list.json";
import Cars from "../cars/Cars";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Car() {
  return (
    <>
      <div className="max-w-screen container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Welcome to the <span className="text-blue-400">Car</span> section
          </h1>
          <p className="mt-12">
           Browse our latest car listings. 
           Find the model you love and contact sellers instantly.
          </p>
          <Link to="/">
            <button className="btn mt-10 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3  ">
          {list.map((item) => (
            <Cards key={item.title} item={item} />
          ))}
          {list.map((item) => (
            <Cards key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Car;