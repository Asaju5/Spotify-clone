import React from "react";
import Link from "next/link";

function Collection() {
  return (
    <div>
      <div className="font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700">
        <h1 className="text-indigo-400"> Projects </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 mx-8 mb-14 gap-x-8 gap-y-12 mt-16">
        <div>
          <a href="https://real-estate-xi-eight.vercel.app/">
            <img
              className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75 "
              src="/realestate.jpg"
              alt=""
            />

            <div className="font-body text-lg flex flex-col-reverse md:flex-row md:justify-between md:text-xl py-3 cursor-pointer">
              an amazing Real Estate UI Application
            </div>
          </a>
        </div>

        <div>
          <a href="https://uberclone-neon.vercel.app/">
            <img
              className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75 "
              src="/Uber.png"
              alt=""
            />

            <div className="font-body text-lg flex flex-col-reverse md:flex-row md:justify-between md:text-xl py-3 cursor-pointer">
              A Web 3.0 Blockchain Uber Clone
            </div>
          </a>
        </div>

        <div>
          <a href="https://next-cloud-xi.vercel.app/">
            <img
              className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75 "
              src="/clod.jpg"
              alt=""
            />

            <div className="font-body text-lg flex flex-col-reverse md:flex-row md:justify-between md:text-xl py-3 cursor-pointer">
              Cloud Web App UI
            </div>
          </a>
        </div>

        <div>
          <a href="https://housing-beryl.vercel.app/">
            <img
              className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75 "
              src="/house.png"
              alt=""
            />

            <div className="font-body text-lg flex flex-col-reverse md:flex-row md:justify-between md:text-xl py-3 cursor-pointer">
              Improved Real Estate
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
