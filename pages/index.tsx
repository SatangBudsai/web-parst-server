import DatePicker from "@/components/datepicker/DatePicker"
import Layout from "@/components/layout/Layout"
import { Icon } from "@iconify/react"
import Slider from "@mui/material/Slider"
import { Space_Grotesk } from "next/font/google"
import { useState } from "react"
const space_Grotesk = Space_Grotesk({ subsets: ["latin"] })
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

// function valuetext(value: number) {
//   return `${value}`
// }
export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: '#ffaa003e',
      borderColor: '#FFAA00',
      borderWidth: 1,
    },
  ],
}

export default function index() {
  const [value, setValue] = useState<number[]>([2200, 2250])

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  )

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
      <div className="w-full min-h-screen flex justify-center items-center pt-10">
        <div className="container grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <div className="flex flex-col">
              <h1 className={`${space_Grotesk.className} text-7xl font-bold`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00AAFF] to-[#00FFAA]">
                  RISING
                </span>
                <span className="text-5xl font-bold text-white ml-5">&</span>
              </h1>
              <h1 className={`${space_Grotesk.className} text-7xl font-bold`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFAA00] to-[#FF00AA]">
                  SETTING
                </span>
              </h1>
              <h2 className="text-gray-50 text-xl">
                Planet approximating of rising and setting time
              </h2>
              <section className="flex flex-row border-2 border-white/10 drop-shadow-xl rounded-gl mt-5 p-3 rounded-2xl">
                <nav className="flex flex-col text-white/50 text-lg font-light mt-6 ml-5">
                  <ul className="flex flex-col gap-5 ">
                    <li className="text-amber-500 font-extrabold">
                      <div className="inline-flex h-4 w-4 rounded-full bg-amber-500 mr-2 items-center" />
                      JUPITER
                    </li>
                    <li>MERCURY</li>
                    <li>MARS</li>
                    <li>SATURN</li>
                    <li>VENUS</li>
                  </ul>
                </nav>
                <DatePicker />
              </section>
              <Slider
                getAriaLabel={() => "year range"}
                color="secondary"
                valueLabelDisplay="on"
                defaultValue={value}
                min={2200}
                max={2300}
              />
            </div>
          </div>
          <div className="col-span-1 justify-center w-fit">
            <Radar data={data}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
