import React from 'react';
import Customhook from '../../Custom hooks/Customhook';
import Product from '../Product/Product';

const Products = () => {

   const  [products, setProducts] = Customhook()
   const sixproducts = products.slice(0, 6)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    sixproducts.map(product => <Product product={product} ></Product> )
                }
            </div>
        </div>
    );
};

export default Products;