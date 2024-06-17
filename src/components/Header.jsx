import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import userIcon from '../assets/user.svg'

const Header = () => {
  const [active, setActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const showMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        //close menu if scrolling occurs
        if (menuOpen) {
          setMenuOpen(false)
        }
      }
      //detect scroll
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    //cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [menuOpen])
  return (
    <header className="max-padd-container fixed top-1 w-full left-0 ring-0 z-50">
      <div className={`${active ? "py-0" : "py-1"} max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5`}>
        <div className="flexBetween py-3">
          <Link to='/' className="flex items-center gap-x-2">
            <span className="font-[900] text-[24px]">Casa <span className="font-[600] medium-20">Central</span></span>
          </Link>
          <div className="">
            <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 capitalize medium-15 ring-1 ring-slate-900/10 rounded-full bg-primary p-2"} />
            <Navbar setMenuOpen={setMenuOpen} containerStyles={`${menuOpen ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"}`} />
          </div>
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {
              !menuOpen ? (<MdMenu className="xl:hidden cursor-pointer text-3xl hover:text-secondary" onClick={showMenu} />) : (<MdClose className="xl:hidden cursor-pointer text-3xl hover:text-secondary" onClick={showMenu} />)
            }
            <button className="btn-secondary flexCenter gap-x-2 medium-16 rounded-full">
              <img src={userIcon} alt="" height={22} width={22} />
              <span>login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header