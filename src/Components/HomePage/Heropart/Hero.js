import React from 'react';
import './Hero.css'
import leptop from '../../../images/a.jpg'




const Hero = () => {
  return (
    <div className='md:pt-10 pt-16'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.shopify.com/s/files/1/0266/5968/4524/files/1_dc584cf8-2a03-45a0-83bd-aaa3a72da4eb.png?v=1602754156" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='text-4xl font-bold' >Summer Collections</h1>
              <p> Beauty With Neature </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0266/5968/4524/files/2_1e80a769-d5e2-4395-9fe2-95f11716521d.png?v=1602753841" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-4xl font-bold' >Spring Collection</h5>
              <p> 2022 New collections.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0266/5968/4524/files/aaaaaaaaaaa.png?v=1602744478" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-4xl text-black font-bold'> Organic Beauty </h5>
              <p className='text-black'>
                Just like an organic diet is good for health, organic skincare is better for the skin and sustainable for the environment.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0266/5968/4524/files/1_a7cd1aba-31e8-4cbe-8100-de87c7306458.png?v=1602228416" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-black font-bold text-4xl'>Hand made skin Care</h5>
              <p className='text-black'>Our oraginc and Hand made facewash.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  );
};

export default Hero;