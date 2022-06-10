import React from 'react'
import { GoLocation, GoMail } from "react-icons/go";
import { GiSmartphone } from "react-icons/gi";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsFileEarmarkCheckFill,
} from "react-icons/bs";
import Image from "next/image";
import Link from 'next/link';
const Sidebar = () => {
  return (
    <>
      <div className="border-2 border-slate-800 dark:border-white rounded-full h-36 w-36 mx-auto">
        <Image
          src="https://i.ibb.co/27rZktH/IMG-1636480719952-01.jpg"
          alt="avatar"
          className=" mx-auto rounded-full justify-center items-center"
          height="150"
          width="150"
          layout="intrinsic"
          quality="100"
        />
      </div>
      <h3 className="my-4 mb-0 text-3xl font-medium tracking-wider font-kaushan">
        Md. <span className="text-green-600">Rony</span>
      </h3>
      <p className="px-2 py-1 my-3 mt-0 rounded dark:bg-dark-200 text-md font-semibold dark:bg-black-500">
        Software Engineer
      </p>
      {/* Resume */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1KysdX1HeqMmqRilmnUu85jik4FmfFJeo/view?usp=sharing"
        className="flex items-center justify-center px-2 py-2 my-2 text-white bg-black rounded-full w-3/5 mx-auto md:w-8/12 cursor-pointer bg-gradient-to-l from-sky-400 to-blue-500 focus:outline-none dark:bg-dark-200 dark:bg-black-500"
      >
        <BsFileEarmarkCheckFill className="w-4 h-4 mr-1 text-gray-600" />
        <span>Check Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-full my-5 bg-slate-200 dark:bg-gray-800 p-5 rounded">
        <a
          target="_blank"
          rel="noreferrer"
          aria-label="FaceBook"
          href="https://www.facebook.com/profile.php?id=100007569846753"
        >
          <BsFacebook className="w-8 h-8 cursor-pointer text-blue-600" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/md-rony-92bb62159/"
        >
          <BsLinkedin className="w-8 h-8 cursor-pointer text-sky-500" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          href="https://github.com/Md-RonyAhmed"
        >
          <BsGithub className="w-8 h-8 cursor-pointer text-black" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-slate-300 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center mb-1">
          <GoLocation className="mr-1" />{" "}
          <span>Mirpur-2,Dhaka,Bangladesh </span>
        </div>
        <div className="flex items-center justify-center mb-1">
          <GoMail className="mr-1" /> <span>mdronyb313@gmail.com </span>
        </div>
        <div className="flex items-center justify-center">
          <GiSmartphone className="mr-1" />
          <span>+88 01792395386 </span>
        </div>
      </div>

      {/* Email Button */}

      <button className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-105 focus:outline-none">
        <Link href="/contact">Contact me</Link>
      </button>
      <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-l from-sky-400 to-blue-500 focus:outline-none hover:scale-105 transition-all delay-75">
        {/* //TODO remove bg black */}
        <Link href="/contact">Hire me</Link>
      </button>
    </>
  );
}

export default Sidebar