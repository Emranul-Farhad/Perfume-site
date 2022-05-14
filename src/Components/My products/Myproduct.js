import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



const Myproduct = (props) => {
    const navigate = useNavigate()
    const  {img, price, Name, _id,} = props.pro
    const {deletes} = props

    return (
        <div>
            
            <div className='pt-5'>

<div className='mb-0 mx-auto w-[80%] justify-center justify-items-center'>
    <div className="bg-slate-200 w-[95%] lg:w-5/6  flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl">
    <div className="flex justify-between lg:w-3/4 px-4 py-2">
        <img
            className="lg:w-20 w-20 rounded-2xl shadow-2xl"
            src={img}
            alt=""
        />
        <div className="flex flex-col justify-center">
            <p className="flex justify-evenly font-bold font-serif  text-gray-800 ">
                Price:${price}
            </p>
            <p className="flex justify-evenly font-thin font-mono text-gray-800 ">
                Name: {Name}
            </p>

        </div>
    </div>
    <div className="flex lg:w-1/4 py-2 px-8 lg:py-0 justify-between items-center  text-xl mt-2 lg:mt-0 dark:text-white lg:flex-col ">
    

        <button onClick={()=> deletes(_id)} >
            <AiFillDelete></AiFillDelete>
        </button>

         <button onClick={()=> navigate(`/My-products/${_id}`)} >
            <AiFillEye></AiFillEye>
        </button> 

    </div>
</div>
</div>
</div>
        </div>
    );
};

export default Myproduct;