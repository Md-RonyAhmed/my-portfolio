import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
   const router = useRouter();
  
  return (
    <>
      <div className="navbar bg-slate-300 dark:bg-gray-900 text-black dark:text-white h-20 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <Link href="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/blogs">
                <li>
                  <a>Blogs</a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a>Projects</a>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="my-4 mb-4 ml-2 text-xl md:text-2xl lg:text-2xl font-medium tracking-wider font-kaushan">
            Md. <span className="text-green-600">Rony</span>
          </div>
        </div>
        <div className="navbar-start hidden lg:block md:block">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? `text-green-600 btn btn-ghost btn-outline normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/blogs">
            <a
              className={
                router.pathname == "/blogs"
                  ? `text-green-600 btn btn-ghost btn-outline normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Blogs
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname == "/projects"
                  ? `text-green-600 btn btn-outline btn-ghost normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname == "/contact"
                  ? `text-green-600 btn btn-outline btn-ghost normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Contact
            </a>
          </Link>
        </div>
        {/* <button>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={changeTheme} />

            {theme === "dark" ? (
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </label>
        </button> */}
        <div className="flex-none gap-2 ml-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-white text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header