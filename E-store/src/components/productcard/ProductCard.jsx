import myContext from "../../context/data/myContext";
import Card from "./Card";
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/CartSlice'

const ProductCard = () => {
    const context = useContext(myContext)
    const { mode,product } = context
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return ( 
        <section className="text-gray-600">
            <div className="container px-4  py-8 md:py-16 mx-auto">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {product.map((product,index)=>{
                        return(
                            <Card key={index} product={product} />    
                        )
                    })}
                   

                </div>
            </div>

        </section>
    );
}
 
export default ProductCard;