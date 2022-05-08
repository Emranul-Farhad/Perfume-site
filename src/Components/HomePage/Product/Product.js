import React from 'react';
import './Product.css'

const Product = (props) => {
const {description, img, quantity, supplierName, price, Name} = props.product

    return (
        <div>
            	<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src="" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Product;