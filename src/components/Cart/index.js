import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import {getCartTotal} from "../../Redux/cartSlice"
import { useDispatch } from "react-redux";
import {removeCartItems} from "../../Redux/cartSlice"
import { Link } from "react-router-dom";
import {calculateSubTotal} from "../../Redux/cartSlice"

const Cart = () => {
  const [quantities, setQuantities] = useState([0]);

  const dispatch =useDispatch();
  
  const {items, totalquantity, totaprice ,subTotal} = useSelector((state) => state.cart);
  const removeTocart = () => {
    dispatch(removeCartItems());
}


const downloadReceipt = () => {
  const receiptContent = `
      --Cart Total--

  SubTotal:${totaprice}
  Quantity :${totalquantity}
  ---------------
   Total:  ${totaprice}
  `;

  
  const blob = new Blob([receiptContent], { type: "text/html" });

 
  const url = window.URL.createObjectURL(blob);

  
  const a = document.createElement("a");
  a.href = url;
  a.download = "receipt.text"; 
  a.style.display = "none";

  
  document.body.appendChild(a);
  a.click();

  
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};


useEffect(()=>{
  dispatch(calculateSubTotal());
 
},[items])


 useEffect(()=>{
    dispatch(getCartTotal());
  
 },[items])

  const incrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const decrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  return (
    <>
      <Header />
        <div className=" ml-32  mt-10">
        <div className="w-[1170px] h-[72px] shadow grid grid-cols-4" >
          <div> <h1 className="flex items-center justify-center mt-5"> Product</h1></div>
          <div> <h1 className="flex items-center justify-center mt-5">  Quantity</h1></div>
          <div> <h1 className="flex items-center justify-center mt-5"> Price</h1></div>
         
          <div> <h1 className="flex items-center justify-center mt-5"> Subtotal</h1></div>
        </div>
        {items.map((data , index) => (
            <div key={index}>
        <div className="w-[1170px] h-[100px] shadow  grid grid-cols-4 mt-14" >
          <div  className="flex items-center justify-center ">  
        
          <img src={data.image} alt={data.title} style={{width:"40px", height:"40"}}/>
          <h1 className="flex items-center justify-center ">{data.title}  </h1>
       </div>
       <div>   <div  className="flex items-center justify-center mt-5"> {quantities.map((quantity, index) => (
                
                <div className="w-[72px] h-[70px] ">
                  <div className=" rounded flex items-center justify-center border border-slate-400 ">
                    
                    <span>{data.quantity}</span>
                    <div className=" relative mt-[-10px]">

                    <div className={" relative "}>
                    <button onClick={() => incrementQuantity(index)}>
                      <span className=" absolute" >
                      <IoMdArrowDropup />
                        
                      </span>

                    </button>
                    </div>
                        
                    <button   onClick={() => decrementQuantity(index)}>
                      <span className="mb-[-20px]" >
                      <IoMdArrowDropdown />
                      </span>
                    </button>
                    
                  
                    </div>
                  </div>
                </div>
                
              
          ))} </div>
         </div>
          <div> <h1 className="flex items-center justify-center mt-5"> {data.newPrice}</h1></div>
          <div> <h1 className="flex items-center justify-center mt-5"> {data.newPrice*data.quantity}</h1></div>
        
         
        </div>
        </div>
      ))}

        <div className="grid grid-cols-2">
           <Link to={'/product'}> <div className="pt-7 pb-10">
              <Button variant="products">Return To Products</Button>
            </div>
            </Link> 
            <div className="ml-48 pt-7 pb-10">
              <Button variant="products" onClick={removeTocart}> Remove All</Button>
            </div>
          </div>

          <div className="h-[300px] w-[400px] bg-white border border-black ">
            <h1 className="text-xl font-semibold pt-5 pl-5">Cart Total</h1>

            <div className="ml-3 w-[370px] border border-b-black grid grid-cols-2">
              <div>
                <h1 className="text-lg font-normal pt-5">Subtotal:</h1>
              </div>
              <div>
                <h1 className="text-lg font-normal pt-5 ml-28 ">{totaprice}</h1>
              </div>
            </div>
            <div className="ml-3 w-[370px] border border-b-black grid grid-cols-2">
              <div>
                <h1 className="text-lg font-normal pt-5">Quantity:</h1>
              </div>
              <div>
                <h1 className="text-lg font-normal pt-5 ml-28 ">{totalquantity}</h1>
              </div>
            </div>

            <div className="ml-3 w-[370px]  grid grid-cols-2">
              <div>
                <h1 className="text-lg font-normal pt-5">Total:</h1>
              </div>
              <div>
                <h1 className="text-lg font-normal pt-5 ml-28 ">{totaprice}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center pt-7 pb-10">
              <Button onClick={downloadReceipt}>Download Receipt</Button>
            </div>
          </div>
          </div>

       
      
    </>
  );
};

export default Cart;
