import React from 'react'
import { GoLocation } from "react-icons/go";
import { BsFacebook, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";
// import { useTheme } from "next-themes";
import Image from "next/image";
const Sidebar = () => {
//      const { theme, setTheme } = useTheme();

//      const changeTheme = () => {
//        setTheme(theme === "light" ? "dark" : "light");
//      };
  return (
    <>
      <Image
        src="https://i.ibb.co/6Rjt92g/MdRony.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="150px"
        width="150px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Md. <span className="text-green">Rony</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-slate-300 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-slate-300 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <BsDownload className="w-4 h-4 mr-1" />
        <span>Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <BsFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <BsLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/">
          <BsGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-slate-300 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kolkata,India </span>
        </div>
        <p className="my-2 "> code.sumax@gmail.com </p>
        <p className="my-2"> 8514961665 / 8640960375 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:mdronyb313@gmail.com")}
      >
        Contact me
      </button>
      <button
         //  onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
}

export default Sidebar