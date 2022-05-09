import React, { useEffect, useState } from 'react';
import Customhook from '../Custom hooks/Customhook';
import Manage from '../Manage/Manage';




const Manages = () => {
const [product, setProduct] = useState([])

useEffect(()=> {
    fetch('http://localhost:8000/product')
    .then(res=>res.json())
    .then(data => setProduct(data))
},[])


//    deleted part

 const deletebutton = id => {
     const procced = window.confirm("are you sure?")
     if(procced){
         const deleturl = `http://localhost:8000/product/${id}`
         fetch(deleturl,{
            method: 'DELETE',
         })
         .then(res=> res.json)
         .then(data=> {
             const deletd = product.filter(other => other._id !== id )
             setProduct(deletd)
         })
     }
 }



    return (
        <div className='pt-20'>
            <div >  
                {
                    product.map(manageP => <Manage manage={manageP} delet={deletebutton} ></Manage>)
                }
            </div>
        </div>
    );
};

export default Manages;