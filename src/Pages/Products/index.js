import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
 import Header from "../../components/Header"
import { Button } from "../../components/Button"
import { useDispatch } from "react-redux";
import { addItemToCart  } from "../../Redux/cartSlice";
import { moveAll } from "../../Redux/cartSlice";

const Products = () => {

    const [products, setProducts] = useState(['']);

    const dispatch = useDispatch();

    const moveAlltoCart=()=>{
     dispatch(moveAll(products))
    }

    const handleAddToCart = (product) => {
        dispatch(addItemToCart (product));
      };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Data.json');
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);
    

    return (
        <><Header />
            <div className="grid grid-cols-2 pt-14">
                <div className="flex items-start justify-start">
                    <h1 className="font-normal text-[20px] pl-44">Total Product ({products.length})</h1>
                </div>
                <div className="flex items-end justify-end pr-20">
                    <Button
                      onClick={moveAlltoCart}
                      variant="products"
                    >
                        Move All To Cart
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center pt-6 pb-7">
                <div className="grid grid-cols-4 gap-5">
                    {products.map((product) => (
                        <div key={product.id} className="px-2 relative pt-9">
                            <div className="flex items-center justify-center bg-[#F5F5F5] w-[270px] h-[200px] rounded relative">
                                <img src={product.image} alt={product.title} />
                                {product.discountInPercentage > 0 &&
                                    <div className="bg-[#DB4444] w-[55px] h-[26px] text-white absolute top-2 left-2">
                                        <p className="flex items-center justify-center rounded">{product.discountInPercentage}%</p>
                                    </div>
                                }
                            </div>
                            <div>
                                <Button
                                    variant="addToCart"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <AiOutlineShoppingCart size={'20'} className="mr-3" />
                                    Add To Cart
                                </Button>
                            </div>
                            <h3 className="font-medium text-[16px] pt-2">{product.title}</h3>
                            <p>
                                <span className="text-[#DB4444]">${product.newPrice}</span>
                                {product.discountInPercentage > 0 &&
                                    <span className="text-[#000000] pl-3 line-through text-opacity-50"> ${product.oldPrice}</span>
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div></>
    );
}

export default Products;