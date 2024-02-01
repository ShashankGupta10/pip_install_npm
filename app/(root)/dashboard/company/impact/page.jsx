import Image from "next/image";
import impactImage from "@/public/aid.jpg";
import Link from "next/link";
import kids from "../../../../../public/kids.jpg";

export default function Impact() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800">
        <Link className="flex items-center space-x-2" href={"/dashboard/company"}>
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
          </Link>
        <p className="text-gray-500 dark:text-gray-400">
          Making a difference, one step at a time
        </p>
      </header>
      <main className="flex-1">
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Stories</h2>
          <div
            className="flex items-center justify-center"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden">
              <div
                className="flex "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                {/* Story 1 */}
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="shrink-0 grow-0 basis-full pl-4"
                >
                  <Image
                    src={kids}
                    alt="Story 1"
                    className="rounded-lg object-cover"
                    width="600"
                    height="400"
                    style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
                  />
                  <div className="bg-black bg-opacity-60 p-4 absolute bottom-0 w-full">
                    <p className="text-white">
                      By donating towards educating poor children, you become a
                      beacon of hope, transforming lives through the gift of
                      education. Your support ensures that every child,
                      regardless of their economic background, has the
                      opportunity to learn, grow, and break the chains of
                      poverty. With each contribution, you are not just
                      investing in books and classrooms; you are investing in a
                      future where these children can realize their full
                      potential and contribute meaningfully to society.{" "}
                    </p>
                  </div>
                </div>

                {/* Story 2 */}
                {/* (Repeat similar structure for Story 2 and Story 3) */}
              </div>
            </div>
            {/* Previous and Next buttons */}
            {/* (Remain unchanged) */}
          </div>
        </section>

        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
          <div className="flex gap-6 justify-center mx-auto">
            <blockquote className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
              <p className="text-lg font-medium mb-2">
                "Amul's initiatives have made a huge difference in our
                community."
              </p>
              <footer className="flex items-center space-x-2">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    P1
                  </span>
                </span>
                <div>
                  <div className="text-sm font-medium">ConnectFor</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Founder
                  </div>
                </div>
              </footer>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
              <p className="text-lg font-medium mb-2">
                "Thanks to Amul, we've been able to double our impact."
              </p>
              <footer className="flex items-center space-x-2">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    P2
                  </span>
                </span>
                <div>
                  <div className="text-sm font-medium">Muskurate Raho</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    CO-Founder
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Impact Metrics
          </h2>
          <div className="grid gap-6 max-w-5xl mx-auto grid-cols-2">
            <div className="w-full aspect-[16/9]">
              <div className="w-full h-full">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="500"
                    height="281.25"
                    role="application"
                    aria-label="A bar chart showing data"
                    focusable="false"
                  >
                    <rect width="500" height="281.25" fill="transparent"></rect>
                    <g transform="translate(40,0)">
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="460"
                          y1="241"
                          y2="241"
                          stroke="#f3f4f6"
                          strokeWidth="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="460"
                          y1="164"
                          y2="164"
                          stroke="#f3f4f6"
                          strokeWidth="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="460"
                          y1="88"
                          y2="88"
                          stroke="#f3f4f6"
                          strokeWidth="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="460"
                          y1="11"
                          y2="11"
                          stroke="#f3f4f6"
                          strokeWidth="1"
                        ></line>
                      </g>
                      <g transform="translate(0,241.25)">
                        <g transform="translate(48,0)" style={{ opacity: "1" }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            Jan
                          </text>
                        </g>
                        <g transform="translate(121,0)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            Feb
                          </text>
                        </g>
                        <g transform="translate(194,0)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            Mar
                          </text>
                        </g>
                        <g transform="translate(267,0)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            Apr
                          </text>
                        </g>
                        <g transform="translate(340,0)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            May
                          </text>
                        </g>
                        <g transform="translate(413,0)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            Jun
                          </text>
                        </g>
                        <line
                          x1="0"
                          x2="460"
                          y1="0"
                          y2="0"
                          style={{ stroke: "transparent", strokeWidth: 1 }}
                        ></line>
                      </g>
                      <g transform="translate(0,0)">
                        <g transform="translate(0,241)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            0
                          </text>
                        </g>
                        <g transform="translate(0,164)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            50
                          </text>
                        </g>
                        <g transform="translate(0,88)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            100
                          </text>
                        </g>
                        <g transform="translate(0,11)" style={{ opacity: 1 }}>
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
                              outlineWidth: "0px",
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
                          y2="241.25"
                          style={{ stroke: "transparent", strokeWidth: 1 }}
                        ></line>
                      </g>
                      <g transform="translate(22, 71)">
                        <rect
                          width="51"
                          height="170"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          strokeWidth="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(95, 0)">
                        <rect
                          width="51"
                          height="241"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          strokeWidth="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(168, 43)">
                        <rect
                          width="51"
                          height="198"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          strokeWidth="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(241, 11)">
                        <rect
                          width="51"
                          height="230"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          strokeWidth="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(314, 58)">
                        <rect
                          width="51"
                          height="183"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          strokeWidth="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(387, 131)">
                        <rect
                          width="51"
                          height="110"
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
            <div className="w-full aspect-[16/9]">
              <div className="w-full h-full">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="500"
                    height="281.25"
                    role="application"
                  >
                    <rect width="500" height="281.25" fill="transparent"></rect>
                    <g transform="translate(10,10)">
                      <g transform="translate(240,130.625)">
                        <path
                          d="M-130.61434827522172,-1.6681275847740646A130.625,130.625,0,0,1,-75.15099999105729,-106.84202275015252L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M7.99847440693115e-15,-130.625A130.625,130.625,0,0,1,127.06111303485758,-30.30452407385976L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M65.79346682057687,112.84551541257478A130.625,130.625,0,0,1,-70.53613373471002,109.94336934421786L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M127.06111303485758,-30.30452407385976A130.625,130.625,0,0,1,65.79346682057687,112.84551541257478L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M-70.53613373471002,109.94336934421786A130.625,130.625,0,0,1,-130.61434827522172,-1.6681275847740646L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                        <path
                          d="M-75.15099999105729,-106.84202275015252A130.625,130.625,0,0,1,-2.399542322079345e-14,-130.625L0,0Z"
                          opacity="1"
                          fill="#2563eb"
                          stroke="#ffffff"
                          strokeWidth="1"
                        ></path>
                      </g>
                      <g transform="translate(240,130.625)">
                        <g
                          transform="translate(-75.10308176252984,-39.60553495198945)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            111
                          </text>
                        </g>
                        <g
                          transform="translate(52.61460356173702,-66.63913850811511)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            157
                          </text>
                        </g>
                        <g
                          transform="translate(-1.8070508904398794,84.88701818382985)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            129
                          </text>
                        </g>
                        <g
                          transform="translate(78.05741095971878,33.40826070492259)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            150
                          </text>
                        </g>
                        <g
                          transform="translate(-74.76317028400975,40.243504546034046)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            119
                          </text>
                        </g>
                        <g
                          transform="translate(-25.617964574473046,-80.94931241291394)"
                          opacity="1"
                          style={{ pointerEvents: "none" }}
                        >
                          <text
                            text-anchor="middle"
                            dominant-baseline="central"
                            style={{
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              fill: "rgb(255, 255, 255)",
                              outlineWidth: "0px",
                              outlineColor: "transparent",
                            }}
                          >
                            72
                          </text>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-6">
            Financial Breakdown
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
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
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <div className="space-y-1">
                <div className="text-lg font-medium">Donations</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  $2M+
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-4">
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
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <div className="space-y-1">
                <div className="text-lg font-medium">Operations</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  $500K
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-4">
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
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <div className="space-y-1">
                <div className="text-lg font-medium">Carbon Offsets</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  $100K
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-6 bg-white dark:bg-gray-800">
        <div className="text-center text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
