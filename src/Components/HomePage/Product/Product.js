import React from 'react';
import './Product.css'
import { AiFillHeart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const Product = (props) => {
	const { description,_id, img, quantity, supplierName, price, Name } = props.product
	const navigate = useNavigate()

	return (
		<div>
			<div className="product-card">
				<div className="badge">Hot</div>
				<div className="product-tumb">
					<img src={img} alt="" />
				</div>
				<div className="product-details">
					<span className="product-catagory"> {supplierName} </span>
					<h4><a href=""> {Name} </a></h4>
					<p title={description} className='cursor-pointer' > {description.slice(0, 100) + "..."} </p>
					<div className="product-bottom-details">
						<div className="product-price"><small> </small> $ {price} </div>
						<div className="product-links">
							<Link to='/'> <AiFillHeart></AiFillHeart> </Link>
							{/* <Link  to='/' > <FaShoppingCart></FaShoppingCart> </Link>
							 */}
							 <button  onClick={()=> navigate(`/My-products/${_id}`)} className='mx-7'> <FaShoppingCart></FaShoppingCart> </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;