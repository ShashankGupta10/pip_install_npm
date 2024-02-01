import React from "react";
import Image from "next/image";
import photo from "../../../public/camera.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div class="flex justify-center items-center h-16">
        <div className="px-10">
          <Link href={"/dashboard/ngo"}>
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
        </div>
        <h1 class="text-3xl font-bold">Raise Issue Form</h1>
      </div>
      <br></br>
      {/* <hr className="font-bold"></hr> */}
      <div className="flex flex-col lg:flex-row gap-6 ml-3 ">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <label
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5"
              htmlFor="ngo-name"
            >
              NGO Name
            </label>

            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="ngo-name"
              placeholder="Enter the name of your NGO"
              fdprocessedid="jdbe6"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5"
              for="place"
            >
              Place
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="place"
              placeholder="Enter the place"
              fdprocessedid="qobx3l"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5"
              for="date"
            >
              Date
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="date"
              type="date"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5"
              for="address"
            >
              Address
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="address"
              placeholder="Enter the address"
              fdprocessedid="693wja"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-5 "
                  htmlFor="concern"
                >
                  Issue
                </label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  id="concern"
                  placeholder="Describe your cause"
                ></textarea>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-end space-y-6">
              <div className="flex justify-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm px-3 py-2  text-white bg-gray-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <label
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="photo"
            >
              Upload Photo
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="photo"
              type="file"
            />
          </div>
          <Image
            src={photo}
            alt="Placeholder"
            className="w-full h-64 object-cover rounded-md"
            width="200"
            height="200"
            style={{ aspectRatio: 200 / 200, objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
};

export default page;
