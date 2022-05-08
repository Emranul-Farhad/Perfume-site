import React from 'react';
import Hero from '../Heropart/Hero';
import Products from '../Products/Products';

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