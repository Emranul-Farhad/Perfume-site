import React from 'react';


const Addproducts = () => {


    
    return (
        <div className='mt-16' >
            <form className='pt-16 addproducts flex flex-col w-[70%] mx-auto  ' >
            <input className='mb-3' type="text" placeholder='Give your products photo url'/>
                <input className='mb-3' type="text" placeholder='Type your Products Name'/>
                <input className='mb-3' type="text" placeholder='Type your Products Price'/>
                <input type="text" placeholder='Type your company Name/Supplier Name' />
                <input className='mt-3' type="number" placeholder='products quantity' />
                <textarea className='mt-3' rows="5" cols="50" name="comment" form="usrform">
                    products discreption...</textarea>
            </form>

        </div>
    );
};

export default Addproducts;