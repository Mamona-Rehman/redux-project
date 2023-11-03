import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { BsSearch} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCartTotal} from "../../Redux/cartSlice"


const NavBar = ({ likedProducts }) => {

  const {items, totalquantity} = useSelector((state) => state.cart);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getCartTotal());
  
 },[items])
  
  return (
    <header>
      <nav>
        <div className="shadow  grid grid-cols-3">
          <div className="h-10 flex items-center justify-center pt-5">
            <h1 className="text-xl font-bold">Exclusive</h1>
          </div>
          <div>
          <div className="  flex  h-16 px-10 items-center ">
            <div className="flex space-x-4 items-center">
            <Link className=" text-black" to={'/'}> Home </Link>
              <Link className=" text-black" to={'/product'}> Products </Link>
            </div>
          </div>
        </div>
        <div className="pt-4 relative  flex  flex-wrap items-stretch">
           <Input
              id={'search'}
              type={'search'}
              placeholder={'What are you looking for?'} 
              varient={"Primary"}
              />
              <button>
              <div className="absolute  inset-y-0 left-0 flex  pl-52 items-center  pointer-events-none">
               <BsSearch />
               </div>
               </button>
               <Link to={'/'}>
               <div  className=" pl-10 pt-2  relative">
               <AiOutlineHeart style={{width:"25px" , height:"25px"}} />
               <span className=" absolute top-[-3px] right-[-6px] ml-5 bg-red-500 h-5 w-5 rounded-full text-white flex items-center justify-center">
                                    {likedProducts}
                                </span>
               </div>
               </Link>
             <Link to={'/cart'}> <div  className=" pl-8 pt-2 " >
             
               <AiOutlineShoppingCart style={{width:"25px" , height:"25px"}} />
               <span className=" absolute  top-3 ml-3 bg-red-500 h-5 w-5 rounded-full text-white flex items-center justify-center">
               { totalquantity}
                                </span>
               </div>
               </Link> 
               
               
              
        </div>
        </div>
       
       
      </nav>
    </header>
  );
};
export default NavBar;
