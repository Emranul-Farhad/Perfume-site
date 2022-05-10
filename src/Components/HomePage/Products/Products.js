import React from 'react';
import { useNavigate } from 'react-router-dom';
import Customhook from '../../Custom hooks/Customhook';
import Product from '../Product/Product';

const Products = () => {

   const  [products, setProducts] = Customhook()
   const navigate = useNavigate()

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.slice(0, 6).map(product => <Product product={product} key={product._id} ></Product> )
                }
            </div>
            <button onClick={()=> navigate(`/Manage`)} className='p-2 bg-[pink]'>show more...</button>
        </div>
    );
};

export default Products;