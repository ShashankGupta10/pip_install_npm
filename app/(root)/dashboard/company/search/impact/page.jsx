import Image from "next/image";
import impactImage from "@/public/aid.jpg"

export default function Impact() {
  return (
    <div className=" grid grid-cols-2 gap-5">


      <div className="w-[650px] p-5 border rounded-xl ">
        <section class="w-full">
          <div class="container flex items-start gap-8 px-4 md:px-6">
            <Image
              src={impactImage}
              width="300"
              height="400"
              alt="Image"
              class="aspect-[1/1] object-cover object-center"
            />
            <div class="space-y-6">
              <h1 class="text-4xl font-bold tracking-tighter">
                Financial Impact
              </h1>
              <div class="flex"></div>
              <p class="text-base text-zinc-500 dark:text-zinc-400">
                Committed to social impact, our company integrates charitable
                giving into our business model. By empowering communities and
                addressing financial challenges, we create a positive,
                sustainable difference in lives.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-[650px] p-5 border rounded-xl ">
        <section class="w-full">
          <div class="container flex items-start gap-8 px-4 md:px-6">
            <Image
              src={impactImage}
              width="300"
              height="400"
              alt="Image"
              class="aspect-[1/1] object-cover object-center"
            />
            <div class="space-y-6">
              <h1 class="text-4xl font-bold tracking-tighter">
                Financial Impact
              </h1>
              <div class="flex"></div>
              <p class="text-base text-zinc-500 dark:text-zinc-400">
                Committed to social impact, our company integrates charitable
                giving into our business model. By empowering communities and
                addressing financial challenges, we create a positive,
                sustainable difference in lives.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-[650px] p-5 border rounded-xl ">
        <section class="w-full">
          <div class="container flex items-start gap-8 px-4 md:px-6">
            <Image
              src={impactImage}
              width="300"
              height="400"
              alt="Image"
              class="aspect-[1/1] object-cover object-center"
            />
            <div class="space-y-6">
              <h1 class="text-4xl font-bold tracking-tighter">
                Financial Impact
              </h1>
              <div class="flex"></div>
              <p class="text-base text-zinc-500 dark:text-zinc-400">
                Committed to social impact, our company integrates charitable
                giving into our business model. By empowering communities and
                addressing financial challenges, we create a positive,
                sustainable difference in lives.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-[650px] p-5 border rounded-xl ">
        <section class="w-full">
          <div class="container flex items-start gap-8 px-4 md:px-6">
            <Image
              src={impactImage}
              width="300"
              height="400"
              alt="Image"
              class="aspect-[1/1] object-cover object-center"
            />
            <div class="space-y-6">
              <h1 class="text-4xl font-bold tracking-tighter">
                Financial Impact
              </h1>
              <div class="flex"></div>
              <p class="text-base text-zinc-500 dark:text-zinc-400">
                Committed to social impact, our company integrates charitable
                giving into our business model. By empowering communities and
                addressing financial challenges, we create a positive,
                sustainable difference in lives.
              </p>
            </div>
          </div>
        </section>
      </div>


    </div>
  );
}
