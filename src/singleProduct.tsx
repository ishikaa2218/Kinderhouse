import { useParams } from "react-router"
import { useState } from "react";
import allProducts from './data/allProducts.json'
import { SinglePicons, SinglePicons2 } from "./HItems";
import { CarouselHome } from "./CarouselHome";

export function SingleProduct(){
    const param = useParams();
    const item = allProducts.find((x) => x.id === Number(param.productID))
    const [image,setImage] = useState(`/src/images/${item?.image}`)

    return(
        <>
            <div className="container">
                <div className="row d-none d-lg-flex">
                    <div className="col-2 text-center">
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail mt-4" height="130" width="130" /></a>
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail mt-1" height="130" width="130" /></a>
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail mt-1" height="130" width="130" /></a>
                    </div>
                    <div className="col-5">
                        <img src={image} className="img-thumbnail mt-4" />
                    </div>
                    <div className="col-sm-5">
                        <div className="d-flex">
                            <h5 className="mt-5 me-5"><b>{item?.pHeading}</b></h5>
                            <a href="#" className="mt-5"><i className="bi bi-heart" style={{fontSize:'26px',color:'#f567b2'}}></i></a>
                        </div>
                        <h5 className="mt-2 text-uppercase">mrp {item?.price}</h5>
                        <small><sup>*</sup>Inclusive of all taxes</small>
                        <hr className="bg-light"></hr>
                        <h5 className="mt-2">Product Description</h5>
                        <p className="mt-2"> {item?.pDescription} </p>
                        <a href="#" role="button" className="text-center btn" style={{backgroundColor:'#f567b2'}} id="see" >Add To Cart</a>
                        <hr className="bg-light mt-4"></hr>
                        <SinglePicons />
                    </div>
                </div>
                <div className="row mb-5"></div>
                <div className="row mb-5"></div>
                <div className="row d-block d-lg-none">
                    <div className="col text-center">
                        <img src={image} className="img-thumbnail mt-4" />
                    </div>
                </div>
                <div className="row mt-4 d-flex d-lg-none">
                    <div className="col d-flex flex-nowrap justify-content-center">
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail" height="100" width="100" /></a>
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail" height="100" width="100" /></a>
                        <a href="#" className="btn" role="button" onClick={() => setImage(`/src/images/${item?.image}`)}><img src={`/src/images/${item?.image}`} className="img-thumbnail" height="100" width="100" /></a>
                    </div>
                </div>
                <div className="row mt-4 d-block d-lg-none">
                    <div className="col-sm">
                        <div className="row">
                            <div className="d-flex">
                                <h5 className="mt-5 me-5"><b>{item?.pHeading}</b></h5>
                                <a href="#" className="mt-5"><i className="bi bi-heart" style={{fontSize:'26px',color:'#f567b2'}}></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <h5 className="mt-2 text-uppercase">mrp {item?.price}</h5>
                            <small><sup>*</sup>Inclusive of all taxes</small>
                        </div>
                        <hr className="bg-light"></hr>
                        <div className="row">
                            <h5 className="mt-2">Product Description</h5>
                            <p className="mt-2">{item?.pDescription}</p>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <a href="#" role="button" className="text-center btn" style={{backgroundColor:'#f567b2'}} id="see" >Add To Cart</a>
                            </div>
                        </div>
                        <hr className="bg-light mt-4"></hr>
                        <div className="row">
                            <SinglePicons2 />
                        </div>
                    </div>
                </div>
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