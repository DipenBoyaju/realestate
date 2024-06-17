import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddProperty from "./pages/AddProperty"
import Listing from "./pages/Listing"
import Favourites from "./pages/Favourites"
import Bookings from "./pages/Bookings"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Route element={<Layout />}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
      {/* </Route> */}
    </BrowserRouter>
  )
}
export default App