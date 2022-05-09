import React, { useEffect, useState } from 'react';

const Customhook = () => {

const [products, setProducts] = useState([])

useEffect( ()=> {
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [setProducts])

    return (
       [products, setProducts]
    );
};

export default Customhook;

