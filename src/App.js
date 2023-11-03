import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Products from "./Pages/Products"
import Cart from "../src/components/Cart"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product",
    element: <Products/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

function App() {
  return (
   <>  <RouterProvider router={router} /></>
  );
}

export default App;
