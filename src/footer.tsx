import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';

export function Footer(){
    return(
        <>
            <div className="container-fluid">
                <div className="row" style={{backgroundColor:'#f567b2'}}>
                    <div className="col d-flex align-items-center justify-content-center p-2">
                        <b className="fs-4" style ={{color:"white"}}>Shop With Love <i className="bi bi-balloon-heart"></i></b>
                    </div>
                </div>
		    </div>
            <div className="container-fluid">
                <div className="row">
                    <footer className="text-light bg-dark pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 mb-4">
                                    <div className="container">
                                        <h5>Shope By Age</h5>
                                        <hr className="text-light" />
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/allproducts" className="footlink">0-12 months</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">1-2 years</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">3+ years</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">5+ years</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="container">
                                        <h5>Shope By Category</h5>
                                        <hr className="text-light" />
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/allproducts" className="footlink">Action Figures</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Dolls & Plush</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Educational Toys</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Puzzles & Games</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Outdoor Toys</NavLink></li>
                                        </ul>
                                    </div>
							    </div>
                                <div className="col-md-3 mb-4">
                                    <div className="container">
                                        <h5>Shope By Brands</h5>
                                        <hr className="text-light" />
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/allproducts" className="footlink">Lego</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Toy Con</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Old School Toy</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Tot-Zone</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Kidz Toys</NavLink></li>
                                            <li><NavLink to="/allproducts" className="footlink">Monsters Toy Store</NavLink></li>
                                        </ul>
                                    </div>
							    </div>
                                <div className="col-md-2">
                                    <div className="container">
                                        <h5>Quick Links</h5>
                                        <hr className="text-light" />
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/" className="footlink">Home</NavLink></li>
                                            <li><NavLink to="/aboutus" className="footlink">About Us</NavLink></li>
                                            <li><NavLink to="/location" className="footlink">Store Location</NavLink></li>
                                            <li><NavLink to="/contactus" className="footlink">Contact Us</NavLink></li>
                                        </ul>
                                    </div>
							    </div>
                                <div className="col-md-2 mb-4">
                                    <div className="container">
                                        <h5>Customer Support</h5>
                                        <hr className="text-light" />
                                        <ul className="list-unstyled">
                                            <li><NavLink to="/returnpolicy" className="footlink">Returns & Refunds</NavLink></li>
                                            <li><NavLink to="/shippinginfo" className="footlink">Shipping Info</NavLink></li>
                                            <li><NavLink to="/terms" className="footlink">Terms & Conditions</NavLink></li>
                                        </ul>
                                    </div>
							    </div>
                            </div>
                            <div className="row">
                                <hr className="text-light" />
                                <div className="col-sm-6">
                                    <div className="py-3">
                                        <p className="mb-0">© 2025 KinderHouse. All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="py-3 d-flex justify-content-end">
                                        <p className="mb-0">
                                            <a href="#" className="footlink me-3"><i className="bi bi-facebook"></i></a>
                                            <a href="#" className="footlink me-3"><i className="bi bi-instagram"></i></a>
                                            <a href="#" className="footlink me-3"><i className="bi bi-twitter"></i></a>
                                            <a href="#" className="footlink me-3"><i className="bi bi-youtube"></i></a>
                                        </p>
                                    </div>
							    </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}