import React from "react";
import Link from "next/link";
import one from "../../../../public/1.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <header className="flex h-14 items-center justify-around gap-4 border-b bg-gray-100/40 px-6 ">
        <div className="flex items-center gap-4">
          <svg
            class="w-6 h-6 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z" />
          </svg>
          <Link href={'/'} className="font-bold">SocialSprint</Link>
        </div>
        <a className=" ml-72" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 hidden"
          >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
            <path d="M12 3v6"></path>
          </svg>

          {/* <span className="sr-only">Home</span> */}
        </a>
        <div className="w-full flex-1">
          <form>
            <div className="relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-500 "
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="flex h-10 w-[600px] rounded-md border border-input  py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:textAccent-foreground rounded-full border border-gray-200 w-8 h-8 "
          type="button"
          id="radix-:r2n:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <Image
            src={one}
            width="32"
            height="32"
            className="rounded-full "
            alt="Avatar"
            style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
          />
          {/* <span className="sr-only">Toggle user menu</span> */}
        </button>
      </header>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <a className="flex items-center gap-2" href="#">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg> */}
                <span className="">ConnectFor Dashboard</span>
              </a>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className="flex items-center gap-4 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href={"/dashbaord/ngo"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  href={"/chat/ngo"}
                >
                  <svg
                    class="w-5 h-5 text-gray-700 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                    />
                  </svg>
                  Chat
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/raise"
                >
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z"
                    />
                  </svg>
                  Raise a Cause
                </Link>
                {/* <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                Donations
              </a> */}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                    Total Causes
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    +180.1% from last year
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                    Total Volunteers
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    +201 since last month
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                    Total Donations
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#525151"
                    className="bi bi-currency-rupee"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold">₹45,231.89</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    +20.1% from last month
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Causes Impact
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="w-full aspect-[4/3]">
                      <div className="h-full w-full">
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="416.796875"
                            height="312.59375"
                            role="application"
                            aria-label="A bar chart showing data"
                            focusable="false"
                          >
                            <rect
                              width="416.796875"
                              height="312.59375"
                              fill="transparent"
                            ></rect>
                            <g transform="translate(40,0)">
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="376.796875"
                                  y1="273"
                                  y2="273"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="376.796875"
                                  y1="186"
                                  y2="186"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="376.796875"
                                  y1="99"
                                  y2="99"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="376.796875"
                                  y1="12"
                                  y2="12"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g transform="translate(0,272.59375)">
                                <g
                                  transform="translate(41,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jan
                                  </text>
                                </g>
                                <g
                                  transform="translate(100,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Feb
                                  </text>
                                </g>
                                <g
                                  transform="translate(159,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Mar
                                  </text>
                                </g>
                                <g
                                  transform="translate(218,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Apr
                                  </text>
                                </g>
                                <g
                                  transform="translate(277,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    May
                                  </text>
                                </g>
                                <g
                                  transform="translate(336,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jun
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="376.796875"
                                  y1="0"
                                  y2="0"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: 1,
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(0,0)">
                                <g
                                  transform="translate(0,273)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    0
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,186)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    50
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,99)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    100
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,12)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    150
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="272.59375"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: 1,
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(20, 80)">
                                <rect
                                  width="41"
                                  height="193"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(79, 0)">
                                <rect
                                  width="41"
                                  height="273"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(138, 49)">
                                <rect
                                  width="41"
                                  height="224"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(197, 12)">
                                <rect
                                  width="41"
                                  height="261"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(256, 66)">
                                <rect
                                  width="41"
                                  height="207"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(315, 148)">
                                <rect
                                  width="41"
                                  height="125"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Lectures Over Time
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="w-full aspect-[4/3]">
                      <div className="h-full w-full">
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="416.796875"
                            height="312.59375"
                            role="application"
                          >
                            <rect
                              width="416.796875"
                              height="312.59375"
                              fill="transparent"
                            ></rect>
                            <g transform="translate(40,10)">
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="73.359375"
                                  x2="73.359375"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="146.71875"
                                  x2="146.71875"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="220.078125"
                                  x2="220.078125"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="293.4375"
                                  x2="293.4375"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="366.796875"
                                  x2="366.796875"
                                  y1="0"
                                  y2="262.59375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="366.796875"
                                  y1="263"
                                  y2="263"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="366.796875"
                                  y1="198"
                                  y2="198"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="366.796875"
                                  y1="134"
                                  y2="134"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="366.796875"
                                  y1="70"
                                  y2="70"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="366.796875"
                                  y1="5"
                                  y2="5"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g transform="translate(0,262.59375)">
                                <g
                                  transform="translate(0,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jan
                                  </text>
                                </g>
                                <g
                                  transform="translate(73.359375,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Feb
                                  </text>
                                </g>
                                <g
                                  transform="translate(146.71875,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Mar
                                  </text>
                                </g>
                                <g
                                  transform="translate(220.078125,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Apr
                                  </text>
                                </g>
                                <g
                                  transform="translate(293.4375,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    May
                                  </text>
                                </g>
                                <g
                                  transform="translate(366.796875,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="text-before-edge"
                                    textAnchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jun
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="366.796875"
                                  y1="0"
                                  y2="0"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: 1,
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(0,0)">
                                <g
                                  transform="translate(0,263)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    0
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,198)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    50
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,134)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    100
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,70)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    150
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,5)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: 1,
                                    }}
                                  ></line>
                                  <text
                                    dominantBaseline="central"
                                    textAnchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: 0,
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    200
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="262.59375"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: 1,
                                  }}
                                ></line>
                              </g>
                              <path
                                d="M0,185L73.359375,201L146.71875,35L220.078125,162L293.4375,139L366.796875,0"
                                fill="none"
                                strokeWidth="2"
                                stroke="#e11d48"
                              ></path>
                              <path
                                d="M0,207L73.359375,86L146.71875,184L220.078125,76L293.4375,229L366.796875,64"
                                fill="none"
                                strokeWidth="2"
                                stroke="#2563eb"
                              ></path>
                              <g>
                                <g
                                  transform="translate(366.796875, 0)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(293.4375, 139)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(220.078125, 162)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(146.71875, 35)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(73.359375, 201)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(0, 185)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(366.796875, 64)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(293.4375, 229)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(220.078125, 76)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(146.71875, 184)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(73.359375, 86)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(0, 207)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                              </g>
                              <g>
                                <rect
                                  width="366.796875"
                                  height="262.59375"
                                  fill="red"
                                  opacity="0"
                                  style={{ cursor: "auto" }}
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default page;
