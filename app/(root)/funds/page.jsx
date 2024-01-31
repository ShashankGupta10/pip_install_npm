// import { Button } from "@/components/ui/button"
import chart1 from "../../../public/chart3.svg";
import chart2 from "../../../public/chart2.svg";
import child from "../../../public/childedu.jpg";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Funds() {
  const back = async () => {
    "use server";
    redirect("/search");
  };
  return (
    <main className="flex flex-col gap-8 p-8">
      <section className="flex justify-between gap-32 items-center">
        <div className="flex flex-col w-full justify-end">
          <form action={back} className="w-full">
            <button>
              <svg
                class="w-8 h-8 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </button>
          </form>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold">Supporting Local Education</h1>
            <p className="text-gray-500 dark:text-gray-400">
              We're proud to partner with{" "}
              <span className="font-semibold">Education First</span>, an NGO
              dedicated to improving education for underprivileged children.
              {"\n                  "}
              Education First focuses on providing quality education, resources,
              and support to children who may not have access to these
              opportunities. Through various initiatives and programs, they aim
              to make a positive impact on the lives of young learners,
              empowering them for a better future.
            </p>

            <button
              className="bg-gray-800 rounded-lg py-2 hover:bg-gray-900 text-white"
              variant="solid"
            >
              Pay for the Cause
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            alt="Education First"
            className="rounded-lg object-cover object-center"
            height="300"
            src={child}
            // style={{
            //   aspectRatio: "500/300",
            //   objectFit: "cover",
            // }}
            width="500"
          />
        </div>
      </section>
      <section className="flex flex-row gap-8">
        <div className="md:w-full">
          <h2 className="text-2xl font-bold">Past Donations</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Month
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Amount
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Beneficiary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  January 2024
                </td>
                <td className="py-4 px-6 border-b border-grey-light">2 Cr</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  Healthy World
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  November 2023
                </td>
                <td className="py-4 px-6 border-b border-grey-light">1.5 Cr</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  SaveSoil
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  September 2023
                </td>
                <td className="py-4 px-6 border-b border-grey-light">2.5 Cr</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  Muskurate Raho
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="flex flex-col gap-4 md:flex-row md:gap-8">
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold">Donation Breakdown</h2>
          <p class="text-gray-500 dark:text-gray-400">
            We donate 2% of our monthly turnover to Education First.
          </p>
          <div class="w-full aspect-[4/3]">
            <div className="h-full w-full">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="622.375"
                  height="466.765625"
                  role="application"
                >
                  <rect
                    width="622.375"
                    height="466.765625"
                    fill="transparent"
                  ></rect>
                  <g transform="translate(40,10)">
                    <g>
                      <line
                        opacity="1"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="114.475"
                        x2="114.475"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="228.95"
                        x2="228.95"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="343.42499999999995"
                        x2="343.42499999999995"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="457.9"
                        x2="457.9"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="572.375"
                        x2="572.375"
                        y1="0"
                        y2="416.765625"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                    </g>
                    <g>
                      <line
                        opacity="1"
                        x1="0"
                        x2="572.375"
                        y1="417"
                        y2="417"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="572.375"
                        y1="315"
                        y2="315"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="572.375"
                        y1="212"
                        y2="212"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="572.375"
                        y1="110"
                        y2="110"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="572.375"
                        y1="8"
                        y2="8"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                    </g>
                    <g transform="translate(0,416.765625)">
                      <g transform="translate(0,0)" style={{ opacity: "1" }}>
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(114.475,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(228.95,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(343.42499999999995,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(457.9,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(572.375,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        x2="572.375"
                        y1="0"
                        y2="0"
                        style={{ stroke: "transparent", strokeWidth: "1" }}
                      ></line>
                    </g>
                    <g transform="translate(0,0)">
                      <g transform="translate(0,417)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,315)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,212)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,110)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,8)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                        y2="416.765625"
                        style={{ stroke: "transparent", strokeWidth: "1" }}
                      ></line>
                    </g>
                    <path
                      d="M0,294C38.15833333333333,306.5,76.31666666666666,319,114.475,319C152.63333333333333,319,190.79166666666666,55,228.95,55C267.1083333333333,55,305.26666666666665,257,343.42499999999995,257C381.5833333333333,257,419.7416666666666,245,457.9,221C496.05833333333334,197,534.2166666666667,98.5,572.375,0"
                      fill="none"
                      strokeWidth="2"
                      stroke="#b01de1"
                    ></path>
                    <path
                      d="M0,329C38.15833333333333,233,76.31666666666666,137,114.475,137C152.63333333333333,137,190.79166666666666,292,228.95,292C267.1083333333333,292,305.26666666666665,121,343.42499999999995,121C381.5833333333333,121,419.7416666666666,364,457.9,364C496.05833333333334,364,534.2166666666667,233,572.375,102"
                      fill="none"
                      strokeWidth="2"
                      stroke="#25eb8b"
                    ></path>
                    <g>
                      <g
                        transform="translate(572.375, 0)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(457.9, 221)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(343.42499999999995, 257)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(228.95, 55)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(114.475, 319)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(0, 294)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#b01de1"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(572.375, 102)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(457.9, 364)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(343.42499999999995, 121)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(228.95, 292)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(114.475, 137)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(0, 329)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb8b"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                    </g>
                    <g>
                      <rect
                        width="572.375"
                        height="416.765625"
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
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold">Future Projections</h2>
          <p class="text-gray-500 dark:text-gray-400">
            Estimated donations for the next 6 months based on current trends.
          </p>
          <div class="w-full aspect-[4/3]">
            <div className="h-full w-full">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="590.421875"
                  height="442.8125"
                  role="application"
                >
                  <rect
                    width="590.421875"
                    height="442.8125"
                    fill="transparent"
                  ></rect>
                  <g transform="translate(40,10)">
                    <g>
                      <line
                        opacity="1"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="108.084375"
                        x2="108.084375"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="216.16875"
                        x2="216.16875"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="324.25312499999995"
                        x2="324.25312499999995"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="432.3375"
                        x2="432.3375"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="540.421875"
                        x2="540.421875"
                        y1="0"
                        y2="392.8125"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                    </g>
                    <g>
                      <line
                        opacity="1"
                        x1="0"
                        x2="540.421875"
                        y1="393"
                        y2="393"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="540.421875"
                        y1="297"
                        y2="297"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="540.421875"
                        y1="200"
                        y2="200"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="540.421875"
                        y1="104"
                        y2="104"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                      <line
                        opacity="1"
                        x1="0"
                        x2="540.421875"
                        y1="8"
                        y2="8"
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      ></line>
                    </g>
                    <g transform="translate(0,392.8125)">
                      <g transform="translate(0,0)" style={{ opacity: "1" }}>
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(108.084375,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(216.16875,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(324.25312499999995,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(432.3375,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        transform="translate(540.421875,0)"
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
                          dominant-baseline="text-before-edge"
                          text-anchor="middle"
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
                        x2="540.421875"
                        y1="0"
                        y2="0"
                        style={{ stroke: "transparent", strokeWidth: "1" }}
                      ></line>
                    </g>
                    <g transform="translate(0,0)">
                      <g transform="translate(0,393)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,297)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,200)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,104)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                      <g transform="translate(0,8)" style={{ opacity: "1" }}>
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
                          dominant-baseline="central"
                          text-anchor="end"
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
                        y2="392.8125"
                        style={{ stroke: "transparent", strokeWidth: "1" }}
                      ></line>
                    </g>
                    <path
                      d="M0,250C36.028124999999996,240,72.05625,225,108.084375,210C144.11249999999998,195,180.140625,175,216.16875,160C252.19687499999998,145,288.22499999999997,125,324.25312499999995,110C360.28124999999994,95,396.309375,75,432.3375,60C468.36562499999997,45,504.39375,25,540.421875,10"
                      fill="none"
                      strokeWidth="2"
                      stroke="#e11d48"
                    ></path>

                    {/* <path
                      d="M0,310C36.028124999999996,219.5,72.05625,129,108.084375,129C144.11249999999998,129,180.140625,275,216.16875,275C252.19687499999998,275,288.22499999999997,114,324.25312499999995,114C360.28124999999994,114,396.309375,343,432.3375,343C468.36562499999997,343,504.39375,219.5,540.421875,96"
                      fill="none"
                      strokeWidth="2"
                      stroke="#25eb32"
                    ></path> */}
                    <g>
                      {/* <g
                        transform="translate(540.421875, 0)"
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
                        transform="translate(432.3375, 208)"
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
                        transform="translate(324.25312499999995, 243)"
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
                        transform="translate(216.16875, 52)"
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
                        transform="translate(108.084375, 300)"
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
                        transform="translate(0, 277)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#e11d48"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g> */}
                      {/* <g
                        transform="translate(540.421875, 96)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(432.3375, 343)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(324.25312499999995, 114)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(216.16875, 275)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(108.084375, 129)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g>
                      <g
                        transform="translate(0, 310)"
                        style={{ pointerEvents: "none" }}
                      >
                        <circle
                          r="3"
                          fill="#25eb32"
                          stroke="transparent"
                          strokeWidth="0"
                          style={{ pointerEvents: "none" }}
                        ></circle>
                      </g> */}
                    </g>
                    <g>
                      <rect
                        width="540.421875"
                        height="392.8125"
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
      </section>
    </main>
  );
}
