import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
     const router = useRouter();
  return (
    <>
      <div className="navbar bg-slate-300 dark:bg-gray-900 text-black dark:text-white h-20">
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
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
              <Link href="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/">
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
          <div className="my-4 mb-4 text-3xl font-medium tracking-wider font-kaushan">
            Md. <span className="text-green">Rony</span>
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
          <Link href="/">
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
        <div className="flex-none gap-2">
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