import React from "react";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="w-full bg-blue-50">
            <footer className="w-full max-w-[80rem] py-10 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                    <div className="col-span-full  lg:col-span-3 lg:block">
                        <Link
                            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                            to="/"
                            aria-label="Brand"
                        >
                            <img src={logo} alt="err" className="w-64" />
                        </Link>
                        <p className="mt-3 text-xs sm:text-sm text-gray-600">
                            © 2024 GraphEngine Labs.
                        </p>
                        <p className="mt-5 text-xs text-justify sm:text-sm text-gray-600">
                            At GraphEngine, we provide innovative data integration solutions
                            designed to transform complex data into visually engaging graphs and
                            analytics. Our services include data visualization, custom
                            dashboards, real-time analytics, and seamless API integration,
                            empowering businesses to make informed decisions based on actionable
                            insights. Join us in unlocking the full potential of your data!
                        </p>
                    </div>

                    <div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 uppercase">
                            Developers
                        </h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                    to="/"
                                >
                                    Api
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                    to="/"
                                >
                                    Status
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                    to="/"
                                >
                                    GitHub
                                </Link>{" "}
                                <span className="inline text-blue-600">— New</span>
                            </p>
                        </div>

                        <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase">
                            Industries
                        </h4>
                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                    to="/"
                                >
                                    Financial Services
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                    to="/"
                                >
                                    Education
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* End Grid */}

                <div className="pt-5 mt-5 border-t border-gray-200">
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Language Dropdown */}
                            <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                                <button
                                    id="hs-footer-language-dropdown"
                                    type="button"
                                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-haspopup="menu"
                                    aria-expanded="true"
                                    aria-label="Dropdown"
                                >
                                    <svg
                                        className="shrink-0 size-3 rounded-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="flag-icon-css-us1"
                                        viewBox="0 0 512 512"
                                    >
                                        <g fillRule="evenodd">
                                            <g strokeWidth="1pt">
                                                <path
                                                    fill="#bd3d44"
                                                    d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                    transform="scale(3.9385)"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                    transform="scale(3.9385)"
                                                />
                                            </g>
                                            <path
                                                fill="#192f5d"
                                                d="M0 0h98.8v70H0z"
                                                transform="scale(3.9385)"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                transform="scale(3.9385)"
                                            />
                                        </g>
                                    </svg>
                                    <span>ENG</span>
                                    {/* <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg> */}
                                </button>
                            </div>
                            {/* End Language Dropdown */}

                            <Link
                                className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                to="/"
                            >
                                Terms & Conditons
                            </Link>
                            <Link
                                className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                                to="/"
                            >
                                Privacy
                            </Link>
                        </div>

                        <div className="mt-5 sm:mt-0 hidden">
                            <p className="text-sm text-white text-center sm:text-right">
                                Made with ❤️ by{" "}
                                <Link className="text-gray-800 hover:text-gray-900" to="/">
                                    Preline Labs
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
