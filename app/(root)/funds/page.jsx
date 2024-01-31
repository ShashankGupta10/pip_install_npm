// import { Button } from "@/components/ui/button"
import chart1 from "../../../public/chart3.svg";
import chart2 from "../../../public/chart2.svg";
import child from "../../../public/childedu.jpg";
import Image from "next/image";

export default function Funds() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center justify-between px-6 py-4 shadow-md dark:bg-gray-900">
        <div className="text-2xl font-semibold text-gray-800 dark:text-white">
          CSR Fund Allocation
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded text-xl shadow-xl transform hover:scale-105 transition-transform duration-200">
          Donate For Cause
        </button>
      </div>
      <main className="flex-1 p-6 overflow-auto">
        <section className="mb-8 p-4 border rounded-lg border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Current Cause
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Image
                alt="Current cause"
                className="w-full h-64 object-contain rounded-lg shadow-md"
                height="200"
                src={child}
                // style={{
                //   aspectRatio: "200/200",
                //   objectFit: "cover",
                // }}
                width="200"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Children's Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our current cause is focused on improving the quality of
                education for underprivileged children. We believe that every
                child deserves a chance to learn and grow.
              </p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 mt-8">
                NGO: Education for All
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Education for All is a non-profit organization that has been
                working tirelessly to ensure that every child has access to
                quality education, regardless of their socio-economic
                background.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8 ">
          <div className="flex items-center gap-10 justify-end w-5/6 ml-[10%]">
            <div style={{ width: "100%", height: "100%" }}>
              <Image
                src={chart1}
                alt=""
                className=" bg-gray-900 rounded-md h-full w-full"
              />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <Image
                src={chart2}
                alt=""
                className=" bg-gray-900 rounded-md h-full w-full"
              />
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Past Donations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="text-left font-semibold text-gray-500">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount Donated</th>
                  <th className="px-6 py-4">Cause</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Jan 1, 2024</td>
                  <td className="px-6 py-4">$10,000</td>
                  <td className="px-6 py-4">Children's Education</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Dec 1, 2023</td>
                  <td className="px-6 py-4">$8,000</td>
                  <td className="px-6 py-4">Health Care</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Nov 1, 2023</td>
                  <td className="px-6 py-4">$5,000</td>
                  <td className="px-6 py-4">Environmental Conservation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
