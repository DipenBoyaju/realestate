import { useQuery } from "react-query";
import { useLocation } from "react-router-dom"
import { getProperty } from "../utilis/api";
import { PuffLoader } from "react-spinners";
import HeartBtn from "../components/HeartBtn";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0]
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))

  if (isError) {
    return (
      <div>
        <span>Error while detching data</span>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader height='80' width='80' radius={1} color="#555" aria-label="puff-loading" />
      </div>
    )
  }
  return (
    <section className="max-padd-container my-[99px]">
      <div className="pb-2 relative">
        <img src={data?.image} alt={data?.title} className="rounded-xl max-h-[27rem] self-center w-full object-cover" />
        <div className="absolute top-8 right-8">
          <HeartBtn />
        </div>
      </div>
      <div className="xl:flexBetween gap-8">
        <div className="flex-1">
          <h5 className="bold-16 my-1 text-secondary">{data?.city}</h5>
          <div className="flexBetween">
            <h4 className="medium-18 line-clamp-1">{data?.title}</h4>
            <div className="bold-20">${data?.price}.00</div>
          </div>

          <div className="flex gap-x-4 py-2">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBed /> {data?.facilities.bedrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBathtub /> {data?.facilities.bathrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineGarage /> {data?.facilities.parkings}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <CgRuler /> 400
            </div>
          </div>
          <p className="pt-2 mb-4">{data?.description}</p>
          <div className="flexStart gap-x-2 my-5">
            <FaLocationDot />
            <div className="">
              {data?.address} {data?.city} {data?.country}
            </div>
          </div>
          <div className="flexBetween">
            <button className="btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm">Book the visit</button>
          </div>
        </div>
        <div className="flex-1">
          <Map address={data?.address} city={data?.city} country={data?.country} />
        </div>
      </div>

    </section>
  )
}
export default Property