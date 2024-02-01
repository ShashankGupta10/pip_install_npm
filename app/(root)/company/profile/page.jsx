"use client";
import one from "./../../../../public/1.png";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import amul from "./../../../../public/amul.png";

const MentorProfile = () => {
  const handleDownload = () => {
    const downloadUrl = '/company/csr.pdf';
        window.open(downloadUrl, '_blank');
  };
  const download = () => {
    const fileUrl = "./csr.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "downloaded-file.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fileUrl = "csr.pdf";
  const filename = "File.pdf";
  const router = useRouter();

  const plans = [
    {
      name: "Basic plan",
      price: 12,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Startup",
      price: 35,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    // {
    //     name: "Enterprise",
    //     price: 60,
    //     features: [
    //         "Curabitur faucibus",
    //         "massa ut pretium maximus",
    //         "Sed posuere nisi",
    //         "Pellentesque eu nibh et neque",
    //         "Suspendisse a leo",
    //         "Praesent quis venenatis ipsum",
    //         "Duis non diam vel tortor",
    //     ],
    // },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        className="mb-4"
        onClick={() => {
          router.push("/dashboard/company");
        }}
      >
        <IoMdArrowBack className="w-6 h-6" />
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center lg:block h-48 w-full overflow-hidden rounded-lg shadow-md bg-white ">
            <Image
              src={amul}
              alt="Mentor's avatar"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
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
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500 ">
            4 average rating
          </div>
          <div className="mt-6">
            <h2 className="text-center text-2xl font-bold">
              Tribhuvandas Patel
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500 ">
              Founder of Amul.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 mt-4 text-white bg-black rounded-lg duration-150 hover:bg-gray-800 "
              onClick={handleDownload}
            >
              Generate CSR
            </button>
          </div>
          {/* <div>
            <button
              className="px-4 py-2 mt-4 bg-white text-black rounded-lg duration-150 hover:bg-gray-800 "
              onClick={() => router.push("/freeTrial")}
            >
              Audio Call
            </button>
          </div> */}
          <div className="mt-6">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <dl className="mt-2 space-y-2">
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="flex text-sm text-gray-500 ">
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
                    className="h-5 w-5 mr-2 text-gray-400 "
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  amuldoodh@gmail.com
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="flex text-sm text-gray-500 ">
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
                    className="h-5 w-5 mr-2 text-gray-400 "
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 86571 92360
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium">Areas of Expertise</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-500 ">Doodh</li>
              <li className="text-sm text-gray-500 ">Dahi</li>
              <li className="text-sm text-gray-500 ">Paneer</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-2">
          <div className="px-4 py-5 bg-white shadow rounded-lg ">
            <h2 className="text-xl font-bold">Bio</h2>
            <p className="mt-2 text-sm text-gray-500 ">
              🚀 About:
              <br /> Amul, an acronym for Anand Milk Union Limited, is a
              cooperative dairy brand based in Anand, Gujarat, India. The brand
              is managed by the Gujarat Co-operative Milk Marketing Federation
              Ltd. (GCMMF), which is a cooperative organization formed by
              various dairy cooperatives in Gujarat. Amul is one of the most
              well-known and successful dairy cooperatives in the world.
              <br />
              <br /> 🌐 Expertise:
              <br /> Amul, a pioneer in the Indian dairy industry, has
              cultivated expertise in the successful implementation of a
              cooperative model, empowering farmers and ensuring a robust supply
              chain. Known for its unwavering commitment to quality, Amul has
              diversified its product portfolio and demonstrated innovation in
              adapting to consumer preferences. The brand's iconic marketing
              strategies, global expansion, and focus on community development
              showcase its multifaceted expertise.
              <br />
              <br /> 🧑‍🏫 Mentoring Philosophy:
              <br /> Amul's philosophy revolves around fostering a cooperative
              model that empowers dairy farmers and ensures a resilient supply
              chain. Committed to unwavering quality and safety standards, Amul
              embraces innovation, diversification, and global outreach,
              showcasing a dynamic approach to consumer needs. Amul's philosophy
              extends beyond commercial success, emphasizing community
              development, sustainability, and a positive global impact, making
              it a symbol of socio-economic progress in the dairy industry.
            </p>
          </div>
          <div className="mt-6 px-4 py-5 bg-white shadow rounded-lg ">
            <h2 className="text-xl font-bold">Ratings &amp; Reviews</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div className="ml-2 text-sm text-gray-500 ">ChildCare NGO</div>
              </div>
              <p className="mt-2 text-sm text-gray-500 ">
                AMUL has been an amazing spporter. They're knowledgeable,
                patient, and really takes the effort to solve problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
