import { RiDoubleQuotesL } from "react-icons/ri"
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28">
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex-1 relative">
          <img src={aboutImg} alt="" className="rounded-3xl rounded-tr-[155px] w-[488px]" />
          <div className="bg-white absolute bottom-16 left-16 max-w-xs p-4 rounded-lg flexCenter flex-col">
            <span className="relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full">
              <RiDoubleQuotesL className="text-2xl" />
            </span>
            <p className="text-center relative bottom-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi unde ea maxime, maiores perferendis?</p>
          </div>
        </div>
        <div className="">
          <span></span>
        </div>
      </div>
    </section>
  )
}
export default About