import React from "react";
import Link from 'next/link'
function Nav() {
  return (
    <nav className="flex h-18 py-4 w-full m-auto">
      <Link href="/">
        <h1 className="transform text-white duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl">
          portfolio
        </h1>
      </Link>

      <div className="flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light">
        <div>
          <p className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
            
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
