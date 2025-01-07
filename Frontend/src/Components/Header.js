import React, { useState } from "react";
import logo from "../Assets/logo.png";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="overflow-hidden border-b bg-blue-50">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-4 lg:px-0">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="pr-4 lg:pr-6 border-r-2 border-transparent lg:border-gray-200">
              <Link to="/">
                <img src={logo} alt="" className="w-32 lg:w-48" />
              </Link>
            </div>
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <Link
                  className="flex items-center flex-wrap gap-2 group"
                  to="/demo"
                >
                  <span className="group-hover:text-opacity-70 transition duration-200">
                    Demos
                  </span>
                  <div className="group-hover:text-opacity-70 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13 5.5L8 10.5L3 5.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <SignedIn>
                <div className="text-end mx-3">
                  {/* <h1 className="text-xs text-blue-900">{user.fullName}</h1>
                <h1 className="text-xs text-blue-900">{user.primaryEmailAddress.emailAddress}</h1> */}
                </div>
                <UserButton></UserButton>
              </SignedIn>
            </div>

            <SignedOut>
              <button className="relative group inline-block py-2 px-4 text-sm text-blue-50 rounded-sm overflow-hidden transition duration-300 bg-gradient-to-tl from-blue-600 to-violet-600">
                <div className="absolute top-0 right-full w-full h-full bg-slate-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative font-semibold">
                  <SignInButton mode="modal">Get Started Now</SignInButton>
                </span>
              </button>
            </SignedOut>

            <button
              className="ml-4 lg:hidden focus:outline-none"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-8 h-8 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
            mobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-80"
            onClick={() => setMobileNavOpen(false)}
          ></div>
          <nav
            className={`fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white py-6 px-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
              mobileNavOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <Link to="/">
                <img src={logo} alt="" className="w-48" />
              </Link>
              <button
                className="focus:outline-none"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="space-y-6">
              <li>
                <Link to="/demo">Demos</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <Link
              className="block mt-8 w-full text-center py-3 px-5 rounded bg-blue-900 border border-blue-700 shadow text-sm font-semibold text-white hover:bg-purple-800 focus:ring focus:ring-purple-800 transition duration-200"
              to="/"
            >
              Get Started Now
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
