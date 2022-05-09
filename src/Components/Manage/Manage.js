import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
const Manage = (props) => {
    console.log(props);
    const {img, price, Name} = props.manage


    return (
		<div className='pt-5'>

        <div className='mb-0 mx-auto w-[80%] justify-center justify-items-center'>
            <div className="bg-slate-200 w-[95%] lg:w-5/6  flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl">
			<div className="flex justify-between lg:w-3/4 px-4 py-2">
				<img
					className="lg:w-20 w-20  rounded-2xl"
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
			<dir className="flex lg:w-1/4 py-2 px-8 lg:py-0 justify-between items-center  text-xl mt-2 lg:mt-0 dark:text-white lg:flex-col ">
				{/* <Link
					className="mb-4"
					state={{ from: location }}
					to={`/review/${_id}`}
				>
					<MdPreview />
				</Link> */}

				<button >
					<AiFillDelete></AiFillDelete>
				</button>
{/* 
				<Link
					className="mt-4"
					to={"/edit-car/" + _id}
					state={{ from: location }}
				>
					<MdEdit />
				</Link> */}
			</dir>
		</div>
        </div>
		</div>
    );
};

export default Manage;