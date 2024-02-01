import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "./../../../public/hero.svg";
export default function Page() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#" rel="ugc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" x2="22" y1="12" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span className="sr-only">Social Impact Platform</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Chat
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Impact
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Profiles
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            CSR Reports
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            NFT Information
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] my-2">
                  Connect. Collaborate. Create Impact.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A platform that brings together companies and NGOs to work for
                  social causes. Find your cause, start a conversation, and make
                  a difference.
                </p>
                <div className="flex gap-10">
                  <div className="space-x-4 my-4">
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="/signup/company"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href={"/login/company"}
                    >
                      Login
                    </Link>
                  </div>
                  <div className="space-x-4 my-4">
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="/signup/ngo"
                    >
                      NGO Signup
                    </Link>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href={"/login/ngo"}
                    >
                      NGO Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src={hero}
                  width="550"
                  height="310"
                  alt="Social Impact"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl mb-4 font-bold tracking-tighter sm:text-5xl">
                  Our Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the various features of our platform designed to
                  facilitate collaboration and impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 mb-2"
                >
                  <path d="M17 6.1H3"></path>
                  <path d="M21 12.1H3"></path>
                  <path d="M15.1 18H3"></path>
                </svg>
                <h3 className="text-lg font-bold">
                  Chat with NGOs and Companies
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Directly connect with NGOs and companies to discuss potential
                  collaborations.
                </p>
              </div>
              <div className="grid gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 mb-2"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                <h3 className="text-lg font-bold">Track Impact</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitor the impact of your collaborations through our impact
                  tracking feature.
                </p>
              </div>
              <div className="grid gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 mb-2"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h3 className="text-lg font-bold">Create Profiles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create profiles to showcase your organization's work and find
                  potential collaborators.
                </p>
              </div>
              <div className="grid gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 mb-2"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <line x1="10" x2="8" y1="9" y2="9"></line>
                </svg>
                <h3 className="text-lg font-bold">Access CSR Reports</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access detailed CSR reports to understand the social impact of
                  companies.
                </p>
              </div>
              <div className="grid gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 mb-2"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <h3 className="text-lg font-bold">Learn about NFTs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn about how NFTs can be used for social causes and track
                  their impact.
                </p>
              </div>
              <div className="grid gap-1">
                <svg
                  class="w-10 mb-2 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                <h3 className="text-lg font-bold">Learn about NFTs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn about how NFTs can be used for social causes and track
                  their impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Social Impact Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
