import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { CarouselHome } from './CarouselHome';
import allProducts from './data/allProducts.json'
import { NavLink } from 'react-router';
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4 } from './HItems';

export function AllProducts(){
    return(
        <>
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-sm-2 d-none d-md-block">
                        <h5 className="mt-2 p-2"><i className="bi bi-filter"></i>&nbsp;&nbsp;Filter</h5>
                        <div className="mt-2 p-2">
                            <h6 className="mt-2">Shop by Age</h6>
                            <Checkbox1 />
                        </div>
                        <div className="mt-2 p-2">
                            <h6 className="mt-2">Shop by Category</h6>
                            <Checkbox2 />
                        </div>
                        <div className="mt-2 p-2">
                            <h6 className="mt-2">Shop by Brand</h6>
                            <Checkbox3 />
                        </div>
                        <div className="mt-2 p-2">
                            <h6 className="mt-2">Price Range</h6>
                            <Checkbox4 />
                        </div>
                    </div>
                    <div className="col-sm-10 d-none d-md-block">
                        <div className="row border">
                            <div className="container border">
                                <div className="row">
                                    <div className="container">
                                        <div className="d-none d-md-flex justify-content-end">
                                            <a className="btn btn-light mt-2" role="button" data-bs-toggle="offcanvas" href="#" data-bs-target="#sort" style={{color:'black'}}><b><i className="bi bi-arrow-down-up"></i> Sort </b></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {allProducts.map((item) => {
                                        return(
                                            <div className="col-sm-3" key={item.id}>
                                                <h5 className="p-2 mt-2"></h5>
                                                <NavLink to={`/allproducts/${item.id}`} className="best">
                                                    <div className="container">
                                                        <img src={`/src/images/${item.image}`} className="img-thumbnail" />
                                                        <h5 className="text-center mt-1">{item.title}</h5>
                                                        <p className="text-center" style={{color: 'orange'}}>{item.price}</p>		
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row mt-2 d-flex d-md-none">
                            <div className="col-sm-6 d-flex justify-content-center">
                                <a className="btn btn-light mt-2" role="button" data-bs-toggle="offcanvas" href="#" data-bs-target="#fil" style={{color:'black'}}><b><i className="bi bi-filter"></i> Filter </b></a>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-center">
                                <a className="btn btn-light mt-2" role="button" data-bs-toggle="offcanvas" href="#" data-bs-target="#sort" style={{color:'black'}}><b><i className="bi bi-arrow-down-up"></i> Sort </b></a>
                            </div>
                        </div>
                        <div className="row d-flex d-md-none">
                            {allProducts.map((item) => {
                                return(
                                    <div className="col-sm-3" key={item.id}>
                                        <h5 className="p-2 mt-2"></h5>
                                        <NavLink to={`/allproducts/${item.id}`} className="best">
                                            <div className="container">
                                                <img src={`/src/images/${item.image}`} className="img-thumbnail" />
                                                <h5 className="text-center mt-1">{item.title}</h5>
                                                <p className="text-center" style={{color: 'orange'}}>{item.price}</p>		
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid border bg-light">
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