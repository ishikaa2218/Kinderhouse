import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";
import './css/style.css'
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import allProducts from './data/allProducts.json'
import { ModalHome } from './ModalHome';
import { useLocation } from 'react-router';
import { Offcanvas } from 'react-bootstrap';

export function Header(){
    const [modalShow, setModalShow] = useState(false);
    const [input,setInput] = useState("");
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setModalShow(false);
    }, [location]);

    const x = allProducts.filter((item) => (
        item.title.toLowerCase().includes(input.toLowerCase())
    )) 

    const handleSelect = () => {(
        setInput("")
    )}

    return(
        <>
            <div className="container-fluid" style={{height:'auto'}}>
                <div className="row justify-content-center align-items-center" style={{backgroundColor:'#f1f1f2', height:'30px',color:'#f567b2'}}>
                    <Marquee pauseOnHover={true}>
                        First time here? Unbox the fun with TOYJOY10! Your gateway to a world of joy—at a discount!
                    </Marquee>
                </div>
                <div className="row border">
                    <nav className="navbar navbar-expand-lg py-2 px-3">
                        <div className="container-fluid d-flex align-items-center">
                            <NavLink to="/" className="navbar-brand">
                                <img src="/src/images/kinderhouse-03.png" alt="logo" height="50" />
                                <h5 className="d-inline fs-4">Kinderhouse</h5>
                            </NavLink>
                            <div className="d-flex d-lg-none flex-nowrap justify-content-end">
                                <NavLink to='/wishlist' style={{color:'black',textDecoration:'none'}}><i className="material-icons 5 pt-2 me-2 d-none d-sm-block" style={{fontSize:'26px'}}>favorite</i></NavLink>
                                <NavLink to='/cart' style={{color:'black',textDecoration:'none'}}><i className="material-icons 4 pt-2 me-2 d-none d-sm-block" style={{fontSize:'25px',width:'45px'}}>shopping_cart</i></NavLink>
                                <button className="navbar-toggler" type="button" onClick={handleShow}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse d-none d-lg-flex flex-nowrap align-items-center justify-content-center navbar-nav ms-auto me-auto">
                                <NavLink to="/allproducts" className="nav-link text-dark fs-6">Action Figures</NavLink>
                                <NavLink to="/allproducts" className="nav-link text-dark fs-6">Plushies</NavLink>
                                <NavLink to="/allproducts" className="nav-link text-dark fs-6">Educational Toys</NavLink>
                                <NavLink to="/allproducts" className="nav-link text-dark fs-6">Puzzles</NavLink>
                                <NavLink to="/allproducts" className="nav-link text-dark fs-6">Games</NavLink>
						    </div>
                            <div className="d-none d-lg-flex align-items-center gap-3">
                                <NavLink to='/wishlist' className="text-dark fs-5">
                                    <i className="bi bi-heart"></i>
                                </NavLink>
                                <a href="#" role="button" className="text-dark fs-5" onClick={() => setModalShow(true)}>
                                    <i className="bi bi-person"></i>
                                </a>
                                <NavLink to='/cart' className="text-dark fs-5">
                                    <i className="bi bi-cart"></i>
                                </NavLink>
						    </div>
                        </div>
                    </nav>
                    <ModalHome show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div className="row">
                    <nav className="navbar navbar-expand-lg d-none  justify-content-center">
                        <ul className="navbar-nav" style={{letterSpacing:'1px'}}>
                            <li className="nav-item">
                                <NavLink to="/allproducts" className="nav-link" style={{color:'black'}}> Action Figures </NavLink>
                            </li>
                            <li className="nav-item" style={{marginLeft:'10px'}}>
                                <NavLink to="/allproducts" className="nav-link" style={{color:'black'}}> Dolls & Plush </NavLink>
                            </li>
                            <li className="nav-item" style={{marginLeft:'10px'}}>
                                <NavLink to="/allproducts" className="nav-link" style={{color:'black'}}> Educational Toys </NavLink>
                            </li>
                            <li className="nav-item" style={{marginLeft:'10px'}}>
                                <NavLink to="/allproducts" className="nav-link" style={{color:'black'}}> Puzzles & Games </NavLink>
                            </li>
                            <li className="nav-item" style={{marginLeft:'10px'}}>
                                <NavLink to="/allproducts" className="nav-link" style={{color:'black'}}> Outdoor Toys </NavLink>
                            </li>	
                        </ul>
                    </nav>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color:'black'}}> Action Figures </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color:'black'}}> Dolls & Plush </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color:'black'}}> Educational Toys </a>
                                </li>
                                <li className="nav-item">
                                     <a className="nav-link" href="#" style={{color:'black'}}> Puzzles & Games </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color:'black'}}> Outdoor Toys </a>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <div className="col-12 p-2 search-container">
                        <form className="d-flex flex-nowrap" role="search">	
                            <input type="search" placeholder="I'm searching for..." className="form-control rounded-start-pill" style={{width:'100%',height:'50px'}} onChange={(e:any) => setInput(e.target.value)} value={input} />
                            <button className="btn btn-outline-secondary rounded-end-pill" type="button" id="search"><i className="material-icons 4 align-middle" style={{fontSize:'25px',width:'45px',color:'white'}}>search</i></button>
                        </form>
                        {input! && <ul className="search-suggestions">
                            {x.map((ele) => (
                                <li key={ele.id} onClick={handleSelect} className="p-2">
                                   <NavLink to={`/allproducts/${ele.id}`} style={{textDecoration:'none',color:'black',display:'block'}}>
                                        {ele.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>}
				    </div>
                </div>
            </div>
        </>
    )
}