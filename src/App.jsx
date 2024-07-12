import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddProperty from "./pages/AddProperty"
import Listing from "./pages/Listing"
import Favourites from "./pages/Favourites"
import Bookings from "./pages/Bookings"
import Layout from "./components/Layout"
import { QueryClient, QueryClientProvider } from "react-query"
import { Suspense } from "react"
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'react-toastify/ReactToastify.css'
import Property from "./pages/Property"

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading data ...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/listing">
                <Route index element={<Listing />} />
                <Route path=":propertyId" element={<Property />} />
              </Route>
              <Route path="/addproperty" element={<AddProperty />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/bookings" element={<Bookings />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App