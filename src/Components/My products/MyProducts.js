import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase key/Fire';





const MyProducts = () => {
const [userwise , setUserwise] = useState([])
const [user] = useAuthState(auth)

useEffect(() => {
    const usersubmit = async()=> {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:8000/product?email=${email}`
        console.log(url);
        const {data} = await axios.get(url);
        setUserwise(data)
    }
    usersubmit()
}, [])


    return (
        <div className='pt-20'>
            <p>fff</p>
            {
                userwise.map(pro =>  <p> order {pro.Name} </p> )
            }
        </div>
    );
};

export default MyProducts;