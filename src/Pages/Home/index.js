import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "../../components/Button";
import Banner from "../../components/Banner";
import {AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { likecart } from "../../Redux/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const {items, totalquantity, totaprice} = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const likeproduct=()=>{
    dispatch(likecart(items))
  }

  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    if (likedProducts.includes(product)) {
    
      setLikedProducts(likedProducts.filter((p) => p !== product));
    } else {
      
      setLikedProducts([...likedProducts, product]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Data.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header  
    likedProducts={likedProducts.length} />
      <Banner />
      <div className="flex items-center justify-center   gap-5 pt-32 pb-10">
        <div className="grid grid-cols-4">
          {products
            .slice(0, showAllProducts ? products.length : 4)
            .map((product, index) => (
              <div key={index} className="px-5 relative">
                <div className=" bg-[#F5F5F5] w-[270px] h-[250px] ">
                  <div className=" flex items-center justify-center pt-10">
                    <img
                      className="  "
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className=" absolute w-14 h-8 top-0 left-0 ml-9 mt-2">
  {product.discountInPercentage > 0 && (
    <div className="bg-[#DB4444] rounded">
      <p className="flex items-center justify-center text-white pt-1">
        {product.discountInPercentage}%
      </p>
    </div>
  )}
</div>
                  <div
                    className=" absolute  top-2 right-6 pl-2 pt-2 bg-white w-9 h-9 rounded-full  "
                    
                  >
                    {likedProducts.includes(product) ? (
                                        <span>
                                            <AiFillHeart
                                                color="red"
                                                size={'20'}
                                                className="flex items-center justify-center bottom-4"

                                                onClick={() => toggleLike(product)}
                                            />
                                        </span>
                                     ) : ( 
                                        <span>
                                            <AiOutlineHeart
                                                size={'20'}
                                                className="flex items-center justify-center"
                                                onClick={() => toggleLike(product)}
                                            />
                                        </span>
                                     )} 
                  </div>
                </div>
                <h3 className="text-black font-medium">{product.title}</h3>
                <p>
                  {" "}
                  <span className="text-[#DB4444] pr-2">
                    ${product.newPrice}
                  </span>
                  {product.discountInPercentage>0 &&
                  <span>${product.oldPrice}</span>
}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center pt-7 pb-10">
        <Button onClick={() => setShowAllProducts(!showAllProducts)}>
          {showAllProducts ? "Show Less Products" : "View All Products"}
          View All Products
        </Button>
      </div>
    </>
  );
};
export default Home;
