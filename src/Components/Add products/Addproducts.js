import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase key/Fire';
import './Addproducts.css'



const Addproducts = () => {

    const [user] = useAuthState(auth)
    const hanedelsubmit = event => {
        console.log(event.target);
        event.preventDefault()
        const data = {
            img: event.target.img.value,
            Name: event.target.Name.value,
            price: event.target.price.value,
            supplierName: event.target.supplierName.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            email: event.target.email.value
        }

        const url = `https://secure-chamber-07199.herokuapp.com/product`
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json(data))
            .then(data => {

            })
    }

    return (
        <div className='mt-16'>
            <h1 className='pt-20 add font-extrabold md:pt-20 '> Add Your <br /> <span className='own font-extrabold '> Own Products </span></h1>



            <form onSubmit={hanedelsubmit} className='pt-16 addproducts flex flex-col w-[70%] mx-auto  ' >
                <input required className='mb-3  inputfields ' name='img' type="text" placeholder='Give your products photo url' />
                <input required className='mb-3 inputfields' name='Name' type="text" placeholder='Type your Products Name' />
                <input required className='mb-3  inputfields' name='price' type="text" placeholder='Type your Products Price' />
                <input required className=' inputfields ' type="text" name='supplierName' placeholder='Type your company Name/Supplier Name' />
                <input required className='mt-3  inputfields ' name='quantity' type="number" placeholder='products quantity' />
                <input className='h-10 inputfields' placeholder="products description" type="text" name='description' />

                <input value={user?.email} readOnly className='h-10 inputfields' placeholder="email" type="email" name='email' />

                <input className='mt-3 subbutton' type="submit" placeholder='submit' />
            </form>

        </div>
    );
};

export default Addproducts;