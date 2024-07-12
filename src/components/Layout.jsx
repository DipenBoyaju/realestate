import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
  return (
    <>
      <div>
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default Layout