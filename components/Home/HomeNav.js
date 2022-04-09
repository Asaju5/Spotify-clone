import React from "react";
import Link from 'next/link'

function HomeNav() {
  return (
    <div className="overflow-hidden">
      <div className="font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700">
        <h1 className="text-indigo-400"> My Tools </h1>
      </div>

      <div
        className="flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end 
            justify-center mt-8 md:mt-6 mb-6 md:mb-12 font-body text-gray-700"
      >
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-blue-800 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            CSS
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-orange-700 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            HTML
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            Javascript
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-blue-500 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            ReactJS
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            NextJS
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-indigo-800 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            Tailwindcss
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-green-400 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            MongoDB
          </button>
        </div>
        <div className="">
          <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            ExpressJS
          </button>
        </div>

        <div className="">
          <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            React Native
          </button>
        </div>

        <div className="">
          <button className="p-2 border-2 rounded-lg bg-blue-600 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            Firebase
          </button>
        </div>

        <div className="">
          <button className="p-2 border-2 rounded-lg bg-emerald-300 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">
            Blockchain Dev
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
