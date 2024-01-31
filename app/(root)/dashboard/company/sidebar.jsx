"use client"
import React from 'react'

import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="flex-1 overflow-auto py-2 ">
    <nav className="grid items-start px-4 text-sm font-medium">
      <a
        className="flex items-center gap-6 text-2xl rounded-lg px-3 py-2  text-gray-900  transition-all hover:text-gray-900"
        href="#"
        onClick={() => router.push("/dashboard")}
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
          className="h-6 w-6"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Home
      </a>

      <a
        className="flex items-center gap-6 text-2xl rounded-lg px-3 py-2  text-gray-900  transition-all hover:text-gray-900"
        href="#"
        onClick={() => router.push("/video")}
      >
        <svg
          className="w-6 h-6 text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z"
          />
        </svg>
        Video
      </a>
    </nav>
  </div>
  )
}

export default Sidebar;
