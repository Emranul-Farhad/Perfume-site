import React, { useEffect, useState } from 'react';
import Customhook from '../Custom hooks/Customhook';
import Manage from '../Manage/Manage';





const Manages = () => {
const [product, setProduct] = Customhook([])



//    deleted part
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
             const deleted = product.filter(pr=> pr._id !== id)
             setProduct(deleted)
             console.log(data);
        })
     }
 }



    return (
        <div className='pt-20'>
            <div >  
                {
                    product.map(manageP => <Manage  manage={manageP} 
                        delet={deletebutton} key={manageP._id} ></Manage>)
                }
            </div>
        </div>
    );
};

export default Manages;