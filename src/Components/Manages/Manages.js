import React from 'react';
import Customhook from '../Custom hooks/Customhook';
import Manage from '../Manage/Manage';

const Manages = () => {
const [products, setProducts] = Customhook()
console.log(products);

    return (
        <div className='pt-20'>
            <div>
                {
                    products.map(manageP => <Manage manage={manageP} ></Manage>)
                }
            </div>
        </div>
    );
};

export default Manages;