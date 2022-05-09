import React from 'react';
import Hero from '../Heropart/Hero';
import Products from '../Products/Products';
import ProductsHalfs from './products and details/ProductsHalfs';


const Home = () => {
    return (
        <div>
 {/* hero banner section */}
            <div>
                <Hero></Hero>
            </div>

{/* products section  */}
            <div>
                <Products></Products>
            </div>


        </div>
    );
};

export default Home;