import React from "react";
import adidas_logo from "../../../public/adidas_logo.png";
import Image from "next/image";
import pizza_hut from "../../../public/pizza_hut.png";
import cotton_king from "../../../public/cotton_king.jpeg";
import kfc from "../../../public/kfc.jpeg";
import puma from "../../../public/puma.png";
import gold from "../../../public/gold.jpeg";
import silver from "../../../public/silver.jpeg";
import bronze from "../../../public/bronze.jpeg";

const page = async () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Company Leaderboard</h2>
            <span className="text-xs text-gray-500">
              View the CSR based companies
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40"></div>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Name of Company</th>
                  <th className="px-5 py-3">Field</th>
                  <th className="px-5 py-3">Donated latest at</th>
                  <th className="px-5 py-3">Donated Amount</th>
                  <th className="px-5 py-3">Reward</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">1</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={adidas_logo}
                          alt="sdasd"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Adidas</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Shoe-sellers</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-semibold text-green-900">
                      50Cr
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={gold}
                          alt="sdasd"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Gold badge</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">2 </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={pizza_hut}
                          alt="pizza"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Pizza-hut</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Food-seller</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-semibold text-green-900">
                      40Cr
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={silver}
                          alt="silver"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Silver Badge</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">3</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={cotton_king}
                          alt="cotton"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Cotton-king</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Clothing</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-semibold text-black-900">
                      35Cr
                    </span>
                  </td>
                  
                    <td>
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <Image
                            className="h-full w-full rounded-full"
                            src={bronze}
                            alt="bronze"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">Bronze badge</p>
                        </div>
                      </div>
                    </td>
                  
                </tr>
                <tr>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">4</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={kfc}
                          alt="kfc"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">KFC</p>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Food-seller</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-semibold text-black-900">
                      32Cr
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">-</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">5</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          className="h-full w-full rounded-full"
                          src={puma}
                          alt="puma"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Puma</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Shoe-Seller</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-black-200 px-3 py-1 text-xs font-semibold text-black-900">
                      20Cr
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">-</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              {" "}
              Showing 1 to 5 of 12 Entries{" "}
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
