import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';
import { CarouselHome } from './CarouselHome';

export function Cart(){
    return(
        <>
            <div className="container border mt-5 p-5">
                <h4><b>Your Kinderhouse Cart is empty</b></h4>
                <p>Your shopping cart is waiting. Give it purpose – fill it with dolls & plush, educational toys, motor cars and more.
                Continue shopping on the <NavLink to="/" style={{color:'#f567b2'}}>Kinderhouse homepage</NavLink>, learn about today's deals, or visit your <NavLink to="/wishlist" style={{color:'#f567b2'}}>Wish List.</NavLink></p>
		    </div>
            <div className="container-fluid mt-5 border bg-light">
                <div className="row mt-4"></div>
                <div className="row">
                    <div className="col d-flex align-items-center p-1 mb-1 ms-5">
                        <h5><b>Recommendation Based On Your Search</b></h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5"></div>
                <div className="row mt-5">
                    <CarouselHome />
                </div> 
                <div className="row mb-5"></div>
                <div className="row mb-5"></div>
            </div>
        </>
    )
}