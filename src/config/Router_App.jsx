import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Products } from '../pages/Products'
import { Product_Details } from '../pages/Product_Details';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Products />} />
        {/* Dynamic Routes */}
        <Route path='products/:id' element={<Product_Details />} />
  </Route>
    )
  )

function Router_App() {
  return (
    <>
    <div className='box'>
    <RouterProvider router={router} />
    </div>
    </>
  )
}

export default Router_App


