import React from "react";
import { Button } from "../Button";
import {BsArrowRight} from "react-icons/bs"

const Banner =()=>{
    return (
        <>
        <div className="mt-10 w-[1170px] h-[370px]  bg-black ml-36 ">
        <div className="  grid grid-cols-3 ">
            <div>
            <div className=" flex items-center justify-center mr-20 pt-10"> 
            <img
                    className="mr-5 "
                    style={{ height: "49px", width: '40px' }}
                    src="apple.png"
                    alt="banner"
                ></img>
              <h1 className="text-white  text-base">iPhone 14 Series</h1>
              </div>
              <h1 className="text-6xl text-white ml-16 pt-4 font-semibold leading-tight">Up to 10% off Voucher</h1>
              <div className="pt-4 mr-36 flex items-center justify-center ">
              <Button variant="shopnow">
              Shop Now
              </Button>
              <BsArrowRight style={{color:"white"}} className="mt-4 ml-3"/>
              </div>
            </div>
        <div className="flex items-center justify-center ">
                <img
                    className="sm:w-full"
                    style={{ height: "344px", width: '1170px' }}
                    src="Banner.png.svg"
                    alt="banner"
                ></img>
            </div>
            <div></div>
       
       
        </div>
        </div>
        </>
    )
}

export default Banner;