import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';
import { CarouselHome } from './CarouselHome';

export function Wishlist(){
    return(
        <>
            <div className="container border mt-5 p-5">
                <h4><b>Your Wishlist is Waiting!</b></h4>
                <p>Uh-oh! Your Wishlist looks empty and lonely! 🧸✨ Discover magical toys, add your favorites, 
                and bring some joy to this space—<NavLink to='/' style={{color:'#f567b2'}}>start exploring now!</NavLink></p>
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