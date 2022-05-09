import React from 'react';
import Customhook from '../../../Custom hooks/Customhook';




const ProductsHalfs = () => {
  const  [products, setProducts] = Customhook()
//   console.log(products);


    return (
        <div className='pt-20'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque nesciunt ullam officiis nemo est, quod tempora ex pariatur perspiciatis dignissimos facilis totam porro corporis sint rerum. Deserunt sequi exercitationem, ratione nulla adipisci ducimus molestiae quae facilis dicta est provident consequatur iste ex necessitatibus voluptas dolore quidem aliquid porro vel.</p>
        </div>
    );
};

export default ProductsHalfs;