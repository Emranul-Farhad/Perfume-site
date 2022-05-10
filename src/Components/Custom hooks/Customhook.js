import React, { useEffect, useState } from 'react';

const Customhook = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://secure-chamber-07199.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [setProducts])

    return (
        [products, setProducts]
    );
};

export default Customhook;

