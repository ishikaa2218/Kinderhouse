import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';

export function AboutUs(){
    return(
        <div className="container">
            <div className="row mt-4 rounded-5" style={{backgroundColor:'#fceaf0'}}>
				<div className="col-sm-4 mt-1 d-flex align-items-center justify-content-center">
					<h2>Hi there!</h2>
				</div>
				<div className="col-sm-8" data-aos="flip-right">
					<img src="/src/images/52.png" className="img-fluid" alt="photo" />
				</div>
			</div>
            <div className="row mt-4">
				<h5 className="text-center">Welcome to <NavLink to="/" style={{color:'#f567b2',textDecoration:'none'}}>KinderHouse</NavLink> – where smiles are endless, and imagination knows no bounds!</h5>
			</div>
            <div className="row mt-4">
				<p style={{textAlign:'justify'}}>
					At KinderHouse, we believe in the magic of childhood and the joy that toys bring to every little heart. Our journey began with a simple yet profound idea: to create a haven 
					where kids and parents alike can explore a world filled with love, laughter, and learning. 
				</p>
				<p style={{textAlign:'justify'}}>
					Every toy we bring to you is carefully handpicked, keeping your child’s happiness and growth in mind. 
					From cuddly companions to brain-boosting games, every item in our collection has a story to tell and a role to play in your little one’s adventures. 
				</p>	
				<p style={{textAlign:'justify'}}>
					We’re more than just a store – we’re your partners 
					in creating beautiful memories. Because here at KinderHouse, it’s not just about toys; it’s about sparking joy, nurturing creativity, and celebrating the wonder of childhood.
				</p>
				<p style={{textAlign:'justify'}}>
					Thank you for choosing KinderHouse – your happy place for everything playful and precious. Let’s make every day a play day! 🌟
				</p>
			</div>
            <div className="row mt-5">
				<div className="col-sm-6">
					<img src="/src/images/53.jpg" className="img-fluid rounded-circle" alt="photo" />
				</div>
				<div className="col-sm-6">
					<div className="mt-5 d-flex align-items-center justify-content-center">
						<h5 className="mt-4">Ready to Spark Some Joy?</h5>
					</div>
					<p style={{textAlign:'justify'}} className="mt-3">Explore our enchanting collection of toys and gifts designed to light up your child’s world. Whether it’s for a birthday, a surprise 
					treat, or just because, KinderHouse has something special waiting for you.</p>
					<p style={{textAlign:'justify'}}>Click below and dive into a world of wonder! Your next adventure is just a click away.</p>
					<div className="d-flex justify-content-center mt-4">
						<NavLink to="/allproducts" className="btn btn-dark" role="button">Shop Now!</NavLink>
					</div>
				</div>
			</div>
			<div className="row mt-5"></div>
			<div className="row mt-4"></div>
        </div>
    )
}