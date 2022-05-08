import React from 'react';
import './Product.css'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

const Product = (props) => {
const {description, img, quantity, supplierName, price, Name} = props.product

    return (
        <div>
            	<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src={img} alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory"> {supplierName} </span>
			<h4><a href=""> {Name} </a></h4>
			<p title={description} className='cursor-pointer' > {description.slice(0, 100)+"..."  } </p>
			<div class="product-bottom-details">
				<div class="product-price"><small> </small> $ {price} </div>
				<div class="product-links">
					<Link to='/'> <AiFillHeart></AiFillHeart> </Link>
					<Link to='/' > <FaShoppingCart></FaShoppingCart> </Link>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Product;