import React from 'react';
import './Addproducts.css'
const Addproducts = () => {


    
    return (
        <div className='mt-16'>

        <h1 className='pt-20 add font-extrabold md:pt-20 '> Add Your <br /> <span className='own font-extrabold '> Own Products </span></h1>

            <form className='pt-16 addproducts flex flex-col w-[70%] mx-auto  ' >
            <input required className='mb-3  inputfield ' type="text" placeholder='Give your products photo url'/>
                <input required className='mb-3 inputfield ' type="text" placeholder='Type your Products Name'/>
                <input required className='mb-3  inputfield ' type="text" placeholder='Type your Products Price'/>
                <input required className=' inputfield ' type="text" placeholder='Type your company Name/Supplier Name' />
                <input required className='mt-3  inputfield ' type="number" placeholder='products quantity' />
                <textarea required className='mt-3  inputfield ' rows="5" cols="50" name="comment" form="usrform">
                    products discreption...</textarea>

                <input className='mt-3 subbutton' type="submit" placeholder='submit' />
            </form>

        </div>
    );
};

export default Addproducts;