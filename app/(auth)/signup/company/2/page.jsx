import Link from "next/link";
import connectToDatabase from "@/lib/connect";
import Company from "@/db/company.schema";
import { redirect } from "next/navigation";
// import part1 from "./part1";

const page = async () => {
  const back = async () => {
    "use server";
    redirect("/signup/company");
  };

  const company_signup = async (formData) => {
    "use server";
    await connectToDatabase();
    const areasofinterest = formData.get("areasOfInterest");
    const turnover = formData.get("turnover");
    const mission = formData.get("mission");
    console.log(areasofinterest, turnover, mission);

    await Company.create({
      areasOfInterest: areasofinterest,
      turnover: turnover,
      mission: mission,
    });
    redirect("/login/company");
    // return { message: "Company created successfully" };
    // console.log(name, email, password);
    // await Company.create({ name: name, email: email, password: password });
    // return { message: "Company created successfully" };
  };
  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          logo
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Start growing your business quickly
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days, No
              credit card required.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Join 5.000+ users
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <div className="mb-10 h-4 rounded-lg bg-gray-200 ">
                <div className="h-full bg-gray-800 rounded-lg w-3/6"></div>
                <div className="flex justify-between">
                  <p className="text-gray-800">50%</p>
                  <p className="text-gray-800">Complete</p>
                </div>
              </div>
              <form action={back}>
                <button>
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
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
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Fill Details
              </h3>
              {/* <p className="">
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  className="font-semibold hover: text-gray-700"
                >
                  Log in
                </Link>
              </p> */}
            </div>
          </div>

          <form className="space-y-5" action={company_signup}>
            <div>
              <label className="font-medium">Areas of Interest</label>
              <select
                required
                name="areasOfInterest"
                // value={areasOfInterest}
                // onChange={(e) => setAreasOfInterest(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div>
              <label className="font-medium">Turnover (in Crores)</label>
              <select
                name="turnover"
                required
                // value={turnover}
                // onChange={(e) => setTurnover(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="5-10 Cr">5-10 Cr</option>
                <option value="1 - 5">10 - 100 Cr</option>
                <option value="More than 100 Cr">More than 100Cr</option>
              </select>
            </div>
            <div>
              <label className="font-medium">Mission</label>
              <input
                type="text"
                name="mission"
                // value={mission}
                // onChange={(e) => setMission(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                placeholder="Enter your mission"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-gray-600 active:bg-gray-700 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
