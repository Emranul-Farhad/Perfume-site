import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            	
		<div className="footer block-dark mt-n15 mt-lg-n30">

		<div className="h-150px h-lg-225px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-top-curved-bg"></div>

		<div className="container mt-n15">
			<div className="row">
				<div className="col-6 col-lg">
					<div className="pb-10">
						<h3 className="text-muted mb-5 mb-lg-7 font-size-4">Collections</h3>

						<div className="d-flex flex-column font-size-3 font-weight-bold">
																				<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3"> spring collections</Link>
															<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">winter collections</Link>
															<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Summer collections</Link>
																	</div>
					</div>
				</div>

				<div className="col-6 col-lg">
					<div className="pb-10">
						<h3 className="text-muted mb-5 mb-lg-7 font-size-4">Products</h3>

						<div className="d-flex flex-column font-size-3 font-weight-bold">
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Nail products</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Hair products</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">skine tone</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Facewash &amp; Mackup</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Nose &amp; Eye products  </Link>
											</div>
					</div>
				</div>

				<div className="col-6 col-lg">
					<div className="pb-10">
						<h3 className="text-muted mb-5 mb-lg-7 font-size-4">Resources</h3>

						<div className="d-flex flex-column font-size-3 font-weight-bold">
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">FAQs</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Support</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Contact Us</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Affiliate Program</Link>
											</div>
					</div>
				</div>

				<div className="col-6 col-lg">
					<div className="pb-10">
						<h3 className="text-muted mb-5 mb-lg-7 font-size-4">General</h3>

						<div className="d-flex flex-column font-size-3 font-weight-bold">
													<Link to="/Manage" className="text-dark-60 text-hover-primary py-2 py-lg-3 ">License Terms</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Privacy Policy</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Terms &amp; Conditions</Link>
													<Link to=""className="text-dark-60 text-hover-primary py-2 py-lg-3">Refund Policy</Link>
											</div>
					</div>
				</div>

				<div className="col-6 col-lg">
					<div className="pb-10">
						<h3 className="text-muted mb-5 mb-lg-7 font-size-4">Stay Connected</h3>

						<div className="d-flex flex-column font-size-3 font-weight-bold">
													<Link to="" className="d-flex align-items-center text-center text-dark-60 text-hover-primary py-2 py-lg-3">
									<img src="https://developer6669.com/Projects/assets/images/icons/social-media/facebook.svg" data-lazy-src="https://developer6669.com/Projects/assets/images/icons/social-media/facebook.svg" className="w-20px mr-4 loaded" alt=""/>
									Facebook
								</Link>
													<Link to="" className="d-flex align-items-center text-center text-dark-60 text-hover-primary py-2 py-lg-3">
									<img src="https://developer6669.com/Projects/assets/images/icons/social-media/twitter.svg" data-lazy-src="https://developer6669.com/Projects/assets/images/icons/social-media/twitter.svg" className="w-20px mr-4 loaded" alt=""/>
									Twitter
								</Link>
													{/* <Link to="" className="d-flex align-items-center text-center text-dark-60 text-hover-primary py-2 py-lg-3">
									<img src="https://developer6669.com/Projects/assets/images/icons/social-media/dribbble.svg" data-lazy-src="https://developer6669.com/Projects/assets/images/icons/social-media/dribbble.svg" className="w-20px mr-4 loaded" alt=""/>
									Dribbble
								</Link> */}
													<Link to="" className="d-flex align-items-center text-center text-dark-60 text-hover-primary py-2 py-lg-3">
									<img src="https://developer6669.com/Projects/assets/images/icons/social-media/instagram.svg" className="w-20px mr-4 loaded"  data-lazy-src="https://developer6669.com/Projects/assets/images/icons/social-media/instagram.svg" alt=""/>
									Instagram
								</Link>
													<Link to=""className="d-flex align-items-center text-center text-dark-60 text-hover-primary py-2 py-lg-3">
									{/* <img src="https://developer6669.com/Projects/assets/images/icons/social-media/github.svg" className="w-20px mr-4 loaded"  data-lazy-src="https://developer6669.com/Projects/assets/images/icons/social-media/github.svg"  alt=""/package-lock.json>
									Github */}
								</Link>
											</div>
					</div>
				</div>
			</div>
		</div>

		<div className="page_speed_247610277"></div>

		<div className="container py-5 py-lg-10">
			<div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
				<div className="d-flex align-items-center mr-md-2 order-2 order-md-1">

					<Link to='/' className="mr-3 mr-md-6 text-dark-60 brand">
						{/* <img alt="logo" src="https://developer6669.com/Projects/assets/images/logo/developer6669.png" className="h-20px h-md-25px"/> */}
                        Fashion's Time
					</Link>

					<span className="font-size-2 font-weight-bold text-dark-60 pt-1" href="https://developer6669.com">
						&copy; {new Date().getFullYear()} Emranul Forhad
					</span>

				</div>

			</div>
		</div>
	</div>

        </div>
    );
};

export default Footer;