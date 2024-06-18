import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md"
import HeartBtn from "./HeartBtn"
import { Link } from "react-router-dom"

const Item = ({ property }) => {
  return (
    <div className="rounded-2xl bg-white">
      <div className="pb-2 relative">
        <img src={property.image} alt={property.title} className="rounded-lg" />
        <div className="absolute top-4 right-6">
          <HeartBtn />
        </div>
      </div>
      <h5 className="bold-16 my-1 text-secondary">{property.city}</h5>
      <h4 className="medium-18 line-clamp-1">{property.title}</h4>
      <div className="flex gap-x-2 py-2">
        <div className="flexCenter gap-x-2 border-r border-slate-900/5 pr-4 font-[500]">
          <MdOutlineBed /> {property.facilities.bedrooms}
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/5 pr-4 font-[500]">
          <MdOutlineBathtub /> {property.facilities.bathrooms}
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/5 pr-4 font-[500]">
          <MdOutlineGarage /> {property.facilities.parkings}
        </div>
      </div>
      <p className="pt-2 mb-4 line-clamp-2">{property.description}</p>
      <div className="flexBetween">
        <div className="bold-20">${property.price}.00</div>
        <Link to=''><button className="btn-secondary rounded-sm !py-[7px] !px-5 shadow-sm">View Details</button></Link>
      </div>
    </div>
  )
}
export default Item