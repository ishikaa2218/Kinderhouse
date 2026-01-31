import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Marquee from "react-fast-marquee";
import products from './data/bestSellers.json'
import { HItems, Blogs } from './HItems';
import { CarouselHome } from './CarouselHome';
import { NavLink } from 'react-router';

export function Home(){
    return(
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="container rounded-5">
                        <div className="row" style={{backgroundColor:'#fceaf0'}}>
                            <div className="col-sm-6">
                                <h3 id="tagline" className="mt-5 pl-5 pt-md-3 pt-sm-1 text-center" style={{letterSpacing:'1px'}}>
                                    <b>Where Smiles Begin, One Toy at a Time!</b>
                                </h3>
                                <p className="pl-5 pt-md-3 pt-sm-1 text-center d-none d-lg-block" style={{letterSpacing:'1px'}}>
                                    From cuddly companions to brain-boosting puzzles, we’ve got something <br/> for kids of all ages. Start your journey of fun today!
                                </p>
                                <a href="#" className="btn btn-lg btn-dark d-grid gap-2 col-6 mx-auto" style={{marginLeft:'25px'}} role="button">
                                    Shop Now!
                                </a>
                                <img src="/src/images/3.png" className="img-fluid d-none d-xl-block" alt="toys" />
                            </div>
                            <div className="col-sm-6">
							    <img src="/src/images/2.png" className="img-fluid rounded float-right" alt="toys" />
						    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2 className="text-center"><b>Shop By Brands</b></h2>
                </div>
                <div className="row mt-4">
                    <Marquee pauseOnHover={true} speed={10}>
                        <div className="col-2 d-flex justify-content-center px-5">
                            <a href="#" className="logo px-5">
                                <img src="/src/images/10.png"/>
                            </a>
                        </div>
                        <div className="col-2 d-flex justify-content-center px-5">
                            <a href="#" className="logo px-5">
                                <img src="/src/images/11.png"/>
                            </a>
                        </div>
                        <div className="col-2 d-flex justify-content-center px-5">
                            <a href="#" className="logo px-5">
                                <img src="/src/images/12.png"/>
                            </a>
                        </div>
                        <div className="col-2 d-flex justify-content-center px-5">
                            <a href="#" className="logo px-5">
                                <img src="/src/images/13.png"/>
                            </a>
                        </div>
                        <div className="col-2 d-flex justify-content-center px-5">
                            <a href="#" className="logo px-5">
                                <img src="/src/images/57.png"/>
                            </a>
                        </div>
                    </Marquee>
                </div>
                <div className="row mt-5"></div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="container">
                            <a href="#" className="offer">
                                <img className="img-fluid rounded-5" src="/src/images/14.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container">
                            <a href="#" className="offer">
                                <img className="img-fluid rounded-5" src="/src/images/15.jpg" />
                            </a>
                        </div>
                    </div>
			    </div>
			    <div className="row mt-5"></div>
                <div className="row mt-5">
				    <h2 className="text-center" style={{letterSpacing:'1px'}}><b>Shop By Age</b></h2>
			    </div>
                <div className="row mt-5" data-aos="fade-up">
                    <div className="col-sm-3">
                        <div className="container d-flex justify-content-center border border-danger rounded-circle p-2">
                            <a href="#" className="age">
                                <h4 className="text-danger">0-12 months</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container d-flex justify-content-center border border-success rounded-circle p-2">
                            <a href="#" className="age">
                                <h4 className="text-success">1-2 years</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container d-flex justify-content-center border border-primary rounded-circle p-2">
                            <a href="#" className="age">
                                <h4 className="text-primary">3+ years</h4>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="container d-flex justify-content-center border border-warning rounded-circle p-2">
                            <a href="#" className="age">
                                <h4 className="text-warning">5+ years</h4>
                            </a>
                        </div>
                    </div>
			    </div>
                <div className="row mt-5"></div> 
                <div className="row mt-5">
				    <h2 className="text-center" style={{letterSpacing:'1px'}}><b>Best Sellers</b></h2>
			    </div>
                <div className="row mt-5 d-none d-lg-flex">
                    {products.map((product) => {
                        return(            
                            <div className="col-sm-3" key={product.id}>
                                <div className="container">
                                    <NavLink to="/allproducts" className="best">
                                        <div className="card shadow mb-5">
                                            <img src={`/src/images/${product.image}`} alt={product.image} className="img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text" style={{color:'orange'}}>{product.price}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>             
                        )
                    })}
                </div>
                <div className="row mt-3 d-lg-none d-sm-flex">
                    <div className="col-sm-3">
                        <HItems title="Ride-on" price="₹800" image="16.jpg" />
                    </div>
                    <div className="col-sm-3">
                        <HItems title="Building Blocks" price="₹780" image="23.jpg" />
                    </div>
                    <div className="col-sm-3">
                        <HItems title="Rattles & Teether Set" price="₹300" image="18.jpg" />
                    </div>
                    <div className="col-sm-3">
                        <HItems title="Baby Toy Bed" price="₹1099" image="19.jpg" />
                    </div>
                    <div className="col-sm-3">
                        <HItems title="Baby Rice Pillow" price="₹320" image="20.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <NavLink to="/allproducts" role="button" className="text-center btn" id="see" >See more</NavLink>
                    </div>
			    </div>
            </div>
            <div className="container-fluid" style={{backgroundColor:'#fdf0f6'}}>
                <div className="row mt-5"></div>
                <div className="row mt-5">
                    <h2 className="text-center" style={{letterSpacing:'1px'}}><b>Why Choose Kinderhouse?</b></h2>
                </div>
                <div className="row m-3 g-4">
                    <div className="col-6">
                        <img src="/src/images/24.jpg" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <img src="/src/images/25.jpg" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <img src="/src/images/26.jpg" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <img src="/src/images/27.jpg" className="img-fluid" />
                    </div>
                </div>
                <div className="row mt-5"></div>
		    </div>
            <div className="container">
                <div className="row mt-5">
                    <h2 className="text-center" style={{letterSpacing:'1px'}}><b>New Arrivals</b></h2>
                </div>
                <div className="row mt-5">
                    <CarouselHome />
                </div>
                <div className="row mb-5"></div>
                <div className="row mt-1"></div>
                <div className="row mt-5">
                    <div className="col p-4 rounded-pill" style={{backgroundColor:'#fdf0f6'}}>
                        <h4 className="text-center">Get 20% off on your first summer sale!</h4>
                    </div>
                </div>
                <div className="row mt-1"></div>
                <div className="row mt-5 p-2">
                    <h4 style={{letterSpacing:'1px'}}>Our Blogs</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <Blogs image="54.jpg" heading="Top 10 Toys That Spark Creativity in Kids" content="Discover the top 10 toys that inspire creativity and imagination in kids, from art kits to building blocks. These toys encourage self-expression and problem-solving through fun, hands-on play."/>
                    </div>
                    <div className="col-sm-4">
                        <Blogs image="55.jpg" heading="The Ultimate Guide to Age-Appropriate Toys for Toddlers" content="Discover the perfect toys for your little one's developmental stage with this comprehensive guide. Learn how to choose safe & engaging toys!" />
                    </div>
                    <div className="col-sm-4">
                        <Blogs image="56.jpg" heading="Tips for Organizing and Maintaining Your Child's Toys" content="Discover practical tips to keep your child's toys organized, making playtime more enjoyable and cleanup hassle-free." />
                    </div>
                </div>
                <div className="row mb-5"></div>
			    <div className="row mb-5"></div>
            </div>
        </>
    )
}