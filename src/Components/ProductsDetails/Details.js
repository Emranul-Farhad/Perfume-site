import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Details = () => {
    const [singelproduct, setSingelProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:8000/product/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSingelProduct(data))
    }, [id])

    return (
        <div className='pt-20'>
            <div className="min-h-screen pt-[14vh] lg:px-8 xl:px-26 2xl:px-36 overflow-x-hidden ">
                <div className="flex items-center justify-between">
                    <div className="lg:flex  items-center justify-center py-12 2xl:px-20 lg:px-6 px-2">
                        <div className="xl:w-2/6 lg:w-2/5 w-80 lg:block hidden">
                            <img className="w-full" alt="" src={singelproduct?.img} />
                        </div>
                        <div className="lg:hidden">
                            <img className="w-full" alt="" src={singelproduct?.img} />
                        </div>
                        <div className="xl:w-2/5 lg:w-1/2 lg:ml-6 lg:mt-0 mt-6">
                          

                            <div>
                                <p className="xl:pr-48 text-base lg:leading-tight leading-normal dark:text-gray-300 text-gray-800 mt-7">
                                    {singelproduct?.description}
                                </p>
                                <p className="text-base leading-4 mt-2 text-gray-400">
                                    Product id: {singelproduct?._id}
                                </p>

                                {singelproduct.quantity > 0 ? (
                                    <p className="text-base leading-4 mt-4 text-blue-600">
                                        Stocks: {singelproduct?.quantity !== 0 && singelproduct?.quantity}
                                    </p>
                                ) : (
                                    <p className="text-base leading-4 mt-4 text-red-600">
                                        out of stock
                                    </p>
                                )}
                                {/* <p className="text-base leading-4 mt-4 text-purple-600">
								sold : {singelproduct?.sold}
							</p> */}
                                <p className="text-base leading-4 mt-4 text-green-600">
                                    Supplier : {singelproduct?.supplierName}
                                </p>
                                <p className="text-base leading-4 mt-4 text-red-600">
                                    Price: ${singelproduct?.price}
                                </p>
                                <div className="flex justify-center">
                                    {singelproduct.quantity > 0 && (
                                        <button
                                            // onClick={handleDelivere}
                                            className="text-white bg-[#FEA14B] hover:bg-[#FEA14B]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2"
                                        >
                                            Delivered
                                        </button>
                                    )}
                                </div>
                                <form
                                    className=" mt-6 py-2 px-6 rounded-lg bg-slate-100 dark:bg-gray-800 grid"
                                // onSubmit={handleAddStock}
                                >
                                    <label
                                        htmlFor="stock"
                                        className="my-2 font-semibold dark:text-white"
                                    >
                                        Add more on stock
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        min={0}
                                        className="h-10  rounded dark:bg-slate-500"
                                        id="addItem"
                                    />
                                    <input
                                        className="bg-[#ff5722] py-2 cursor-pointer mt-4 rounded"
                                        type="submit"
                                        value="Add to stock"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;


