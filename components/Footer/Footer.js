import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-200 bg-opacity-40 pt-8 pb-28">
      <div
        className="flex flex-col md:flex-row justify-center w-5/6 2xl:w-7/12 m-auto
        space-y-12 md:space-y-0"
      >
        <div className="flex space-x-6 md:space-x-24">
          <div className="flex flex-col space-y-4">
            <h1 className="font-display font-medium text-3xl text-gray-900">
              Contact
            </h1>
            <div className="flex flex-row items-center">
              <ul className=" flex space-x-4">
                <li>
                  <SiGmail size={50} className="text-red-600" />
                </li>
                <li className="font-body  text-2xl text-gray-700 items-center mt-3">
                  bamidelesimeon05.com
                </li>
              </ul>
            </div>

            <div className="flex flex-row items-center mt-3">
              <ul className=" flex space-x-4">
                <p>
               <a href="https://www.linkedin.com/in/bamidele-simeon-406a10181/"> <BsLinkedin size={50} className="text-blue-400" /></a>  
                </p>
                <li className="font-body  text-2xl text-gray-700 items-center mt-3 cursor-pointer">
                  Linkedin
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
