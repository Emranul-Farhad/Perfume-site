import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase key/Fire';
import Myproduct from './Myproduct';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';




const MyProducts = () => {

    const [userwise, setUserwise] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        const usersubmit = async () => {
            const email = user.email;
            console.log(email);
            const url = `https://secure-chamber-07199.herokuapp.com/myitem?email=${email}`

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setUserwise(data)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        usersubmit()
    }, [user])


    const deletebutton = id => {
        const procced = window.confirm('are you sure?')
        if (procced) {
            const url = `https://secure-chamber-07199.herokuapp.com/product${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const deleted = userwise.filter(pr => pr._id !== id)
                    setUserwise(deleted)
                    console.log(data);
                })
        }
    }

    return (
        <div className='pt-20'>
            <p className='own' >My Products :- {userwise.length} </p>
            
            {
                userwise.map(pro => <Myproduct pro={pro} deletes={deletebutton} ></Myproduct>)
            }
        </div>
    );
};

export default MyProducts;