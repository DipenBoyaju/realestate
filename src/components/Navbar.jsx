import { MdHomeWork } from "react-icons/md"
import { RiCheckboxMultipleBlankFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"

const Navbar = ({ containerStyles, setMenuOpen }) => {

  const menuClose = () => {
    setMenuOpen(false)
  }
  return (
    <nav className={`${containerStyles}`} >
      <NavLink to='/' className={({ isActive }) => isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"} onClick={menuClose}>
        <MdHomeWork />
        <div className="">Home</div>
      </NavLink>
      <NavLink to='/listing' className={({ isActive }) => isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"} onClick={menuClose}>
        <RiCheckboxMultipleBlankFill />
        <div className="">Listing</div>
      </NavLink>
      <NavLink to='mailto:inquiries.dawn.uptech@gmail.com' className={"flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
        <MdHomeWork />
        <div className="">Contact</div>
      </NavLink>
      <NavLink to='/addproperty' className={" flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
        <MdHomeWork />
        <div className="">Add property</div>
      </NavLink>
    </nav >
  )
}
export default Navbar