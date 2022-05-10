import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase key/Fire';
import Myproduct from './Myproduct';





const MyProducts = () => {
const [userwise , setUserwise] = useState([])
const [user] = useAuthState(auth)

useEffect(() => {
    const usersubmit = async()=> {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:8000/myitem?email=${email}`
        console.log(url);
        const {data} = await axios.get(url,{
            headers : {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        } );
        setUserwise(data)
    }
    usersubmit()
}, [user])


const deletebutton = id => {
    const procced = window.confirm('are you sure?')
    if(procced){
        const url =`http://localhost:8000/product${id}`
        console.log(url);
        fetch(url, {
           method: 'DELETE',
        })
        .then(res => res.json())
        .then(data=> {
            const deleted = userwise.filter(pr=> pr._id !== id)
            setUserwise(deleted)
            console.log(data);
       })
    }
}

    return (
        <div className='pt-20'>
          <p>fdsffhffhg</p>
            {
                userwise.map(pro =>  <Myproduct pro={pro} deletes={deletebutton} ></Myproduct> )
            }
        </div>
    );
};

export default MyProducts;