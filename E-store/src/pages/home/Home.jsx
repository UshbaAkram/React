import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/herosection/Herosection";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productcard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import Free from '../../components/Free'
import { useDispatch, useSelector } from "react-redux";
// import {addToCart,deleteFromCart} from "../../redux/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.Cart);
 
  const add = () => {
    dispatch(addToCart("shirt"));
  }
  console.log(cartItem);
    return ( 
      <> 
        <Layout>
          {/* <button className=' bg-gray-300 p-5' onClick={()=>add()}>Add</button> */}
          {/* <button onClick={()=>dispatch(deleteFromCart("shirt"))}>Delete</button> */}
          <HeroSection />
          <Filter />
          <ProductCard />
          <Track />
          <Testimonial />
        </Layout>
        {/* <Free/> */}
        {/* <Free items={items} /> */}
        </>
         );
}
 
export default Home;