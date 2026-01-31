//import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import { Layout } from "./layout"
import { Home } from "./home"
import { AboutUs } from "./aboutus"
import { Contact } from "./contact"
import { Location } from "./location"
import { ReturnPolicy } from "./returnPolicy"
import { ShippingInfo } from "./shippingInfo"
import { Terms } from "./terms"
import { AllProducts } from "./allproducts"
import { SingleProduct } from "./singleProduct"
import { Wishlist } from "./wishlist"
import { Cart } from "./cart"
import { Signin } from "./signin"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children:[
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/aboutus',
            element: <AboutUs />
          },
          {
            path: '/contactus',
            element: <Contact />
          },
          {
            path: '/location',
            element: <Location />
          },
          {
            path: '/returnpolicy',
            element: <ReturnPolicy />
          },
          {
            path: '/shippinginfo',
            element: <ShippingInfo />
          },
          {
            path: '/terms',
            element: <Terms />
          },
          {
            path: '/wishlist',
            element: <Wishlist />
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/signin',
            element: <Signin />
          },
          {
            path: '/allproducts',
            element: <AllProducts />
          },
          {
            path: '/allproducts/:productID',
            element: <SingleProduct />
          }
        ]
      }
    ]
  )
  return <RouterProvider router = {router} />
}

export default App
