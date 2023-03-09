import Layout from "@/components/layout/Layout";
import { Icon } from "@iconify/react";
import { Space_Grotesk } from "next/font/google";
const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <Layout>
      {/* <img
        src="/circleRed.svg"
        alt="circleRed"
        className="absolute -bottom-1/2 -left-60 w-3/5 "
      />
      <img
        src="/circleBlue.svg"
        alt="circleBlue"
        className="absolute -top-2/3 -left-80 w-3/5"
      /> */}
      <div className="fixed w-full">
        <div className="flex flex-row justify-between text-white mx-10 my-5">
          <span>
            Asst.Prof. Arthit Laphirattanakul CMU Tel : (+66) 66-576-795
          </span>
          <span>© 2023 MisterSatang. All rights reserved</span>
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="container grid grid-cols-2 gap-10">
          <div className="col-span-1 flex justify-end">
            <div className="flex flex-col">
              <h1 className={`${space_Grotesk.className} text-8xl font-bold`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00AAFF] to-[#00FFAA]">
                  RISING
                </span>
                <span className="text-5xl font-bold text-white ml-5">&</span>
              </h1>
              <h1 className={`${space_Grotesk.className} text-8xl font-bold`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFAA00] to-[#FF00AA]">
                  SETTING
                </span>
              </h1>
              <h2 className="text-white text-xl font-light">
                Planet approximating of rising and setting time
              </h2>
              <section className="flex flex-row items-center bg-zinc-900/70 border-2 border-white/70 rounded-full mt-4 px-5">
                <Icon
                  icon="ph:planet-fill"
                  className="text-gray-50 text-8xl py-2"
                />
                <nav className="flex flex-col gap-1 text-white/50 text-xl font-light mx-4">
                  <ul className="flex flex-row gap-5">
                    <li className="text-white font-medium">JUPITER</li>
                    <li>MERCURY</li>
                    <li>MARS</li>
                  </ul>
                  <ul className="flex flex-row gap-3">
                    <li>SATURN</li>
                    <li>VENUS</li>
                  </ul>
                </nav>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
