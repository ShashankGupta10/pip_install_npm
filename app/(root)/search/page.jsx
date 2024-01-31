"use client";
import Link from "next/link";
import image from "./../../../public/next.svg";
import filter from "./../../../public/filter.svg";
import Image from "next/image";
import Autocomplete from "react-select";
import { useState, useEffect } from "react";
import { createContext } from "react";
import Filters from "./filters.jsx";
import axios from "axios";

export const FilterContext = createContext();

const Search = () => {
  const [data, setData] = useState([{
    category: "",
    title: "",
    description: "",
    image: "",
    location: "",
  }]);
  const [filterActive, setFilterActive] = useState(false);

  const [formData, setFormData] = useState({
    ethical: true,
    environmental: true,
    philanthropic: true,
    financial: true,
  });

  const options = [
    { value: "a", label: "Bandra" },
    { value: "b", label: "Khar" },
    { value: "c", label: "Thane" },
    { value: "d", label: "Goregaon" },
    { value: "e", label: "Andheri" },
  ];

  const search_func = async (formData) => {
    const search = formData.get("search");
    console.log(search);
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    setFilterActive(false);
  };

  useEffect(() => {
    axios.post("/api/search", {
      search: "all"
    }).then((res) => {
      console.log(res.data)
      setData(res.data);
    })
  }, []);

  return (
    <FilterContext.Provider
      value={[handleFilter, setFilterActive, formData, setFormData]}
    >
      {filterActive ? <Filters /> : null}
      <section className="w-full">
        <div className="flex justify-center gap-5">
          <form action={search_func} className="">
            <div className="relative">
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
                className="absolute z-5 top-2.5 right-12 h-4 w-4 text-gray-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <Autocomplete
                options={options}
                className="text-sm ring-offset-background w-[600px]"
              />
            </div>
          </form>
          <div className="flex align-middle">
            <button
              onClick={() => setFilterActive(!filterActive)}
              className="border w-[110px] rounded-xl flex opacity-30 hover:opacity-70 hover:cursor-pointer"
            >
              <Image
                src={filter}
                alt="filter"
                className="h-10 w-10 pl-2 py-1"
              />
              <p className="font-bold text-center w-full my-auto  pr-2">
                Filters
              </p>
            </button>
          </div>
        </div>
        <main className="container mx-auto px-4 md:px-6 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image
                  alt="Top Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Top Story Headline</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the top story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Environmental</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Image
                  alt="Politics Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Politics Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the politics story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Politics Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Politics Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the politics story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Politics Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Politics Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the politics story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ethical</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Image
                  alt="Business Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Business Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the business story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Business Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Business Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the business story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Business Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Business Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the business story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Philanthropic</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Image
                  alt="Tech Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Tech Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the tech story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Tech Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Tech Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the tech story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Tech Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Tech Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the tech story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Image
                  alt="Culture Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  Sport
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Culture Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the culture story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Culture Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Culture Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the culture story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Culture Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Culture Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the culture story. Click the link
                  to read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Financial</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Image
                  alt="Sports Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Sports Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the sports story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Sports Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Sports Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the sports story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div>
                <Image
                  alt="Sports Story Image"
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h3 className="text-xl font-bold mb-2 mt-4">
                  Sports Story Headline
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  This is a brief summary of the sports story. Click the link to
                  read more.
                </p>
                <Link
                  className="text-blue-500 hover:text-blue-700 mt-4"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
        </main>
      </section>
    </FilterContext.Provider>
  );
};
export default Search;
