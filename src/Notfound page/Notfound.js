import React from 'react';
import { NavLink } from 'react-router-dom';
import './Noyfound.css'

const Notfound = () => {
    return (
        <div className='pt-20'>
             
            <section class="page_404">
	<div class="container">
		<div class="">	
		<div class=" ">
		<div class=" text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
        <NavLink className="link_404" to='/' > Back to Home </NavLink>

		{/* <a href="" class="link_404">Go to Home</a> */}
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
            
        
        </div>
    );
};

export default Notfound;