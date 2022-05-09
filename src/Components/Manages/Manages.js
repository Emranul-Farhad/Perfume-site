import React, { useEffect, useState } from 'react';
import Customhook from '../Custom hooks/Customhook';
import Manage from '../Manage/Manage';

const Manages = () => {
// const [products, setProducts] = Customhook()
// console.log(products);

const [product, setProduct] = useState([])

useEffect(()=> {
    fetch('http://localhost:8000/product')
    .then(res=>res.json())
    .then(data => setProduct(data))
},[])

    return (
        <div className='pt-20'>
            <div >  
                {
                    product.map(manageP => <Manage manage={manageP} ></Manage>)
                }
            </div>
        </div>
    );
};

export default Manages;