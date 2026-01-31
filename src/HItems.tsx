import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';
import { useState } from 'react';

export function HItems({title,price,image}:any){
    return(
        <div className="container">
            <NavLink to="/allproducts" className="best">
                <div className="card shadow mb-5">
                    <img src={`/src/images/${image}`} className="img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{color:'orange'}}>{price}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export function HNewItems({text,image}:any){
    return(
        <NavLink to="/allproducts" className="best">
			<img src={`/src/images/${image}`} className="d-block w-100 border rounded-circle shadow" />
			<p className="text-center mt-2"> {text}</p>
		</NavLink>
    )
}

export function Blogs({image,heading,content}:any){
    return(
        <>
            <img src={`/src/images/${image}`} className="img-thumbnail rounded-5" alt="photo" />
            <h5 className="mt-3 ms-3" style={{textAlign:'justify'}}>{heading}</h5>
            <p className="ms-3" style={{textAlign:'justify'}}>{content}</p>
            <a href="#" role="button" className="btn bg-body-secondary ms-3">Read more</a>
        </>
    )
}

export function SinglePicons(){
    return(
        <div className="d-flex">
            <div className="d-block">
                <img src="/src/images/50.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
                <small>Safe Transaction</small>
            </div>
            <div className="d-block ms-4">
				<img src="/src/images/49.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Fast Delivery</small>
			</div>
            <div className="d-block ms-4">
				<img src="/src/images/48.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Assured Quality</small>
			</div>
			<div className="d-block ms-4">
				<img src="/src/images/51.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Non-Returnable Item</small>
			</div>
        </div>
    )
}

export function SinglePicons2(){
    return(
        <div className="d-flex mt-3">
			<div className="d-block">
				<img src="/src/images/50.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Safe Transaction</small>
			</div>
			<div className="d-block ms-4">
				<img src="/src/images/49.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Fast Delivery</small>
			</div>
			<div className="d-block ms-4">
				<img src="/src/images/48.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Assured Quality</small>
			</div>
			<div className="d-block ms-4">
				<img src="/src/images/51.jpg" className="img-thumbnail rounded-circle ms-3" height="60" width="60" /><br />
				<small>Non-Returnable Item</small>
			</div>
		</div>
    )
}

export function Checkbox1(){
    const check1 = [
            {
                label: "0-12 months",
                checked: false
            },
            {
                label: "1-2 years",
                checked: false
            },
            {
                label: "3+ years",
                checked: false
            },
            {
                label: "5+ years",
                checked: false
            },
        ]
    
        const [check,setCheck] = useState(check1)
        const handleChange = (id:any) => {
            return(
                setCheck(check.map((value,index) => (
                    index === id ? {...value, checked:!value.checked} : value
               )))
            )
        }

        return(
            <>
                {check.map((value,index) => {
                    return(
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" id={`check-${index}`} checked={value.checked} onChange={() => handleChange(index)}/>
                            <label className="form-check-label" htmlFor={`check-${index}`}>{value.label}</label>
                        </div>
                    )
                })}
            </>
        )
}

export function Checkbox2(){
    const check2 = [
            {
                label: "Action Figures",
                checked: false
            },
            {
                label: "Dolls & Plush",
                checked: false
            },
            {
                label: "Educational Toys",
                checked: false
            },
            {
                label: "Puzzles & Games",
                checked: false
            },
            {
                label: "Outdoor Toys",
                checked: false
            },
        ]
    
        const [check,setCheck] = useState(check2)
        const handleChange = (id:any) => {
            return(
                setCheck(check.map((value,index) => (
                    index === id ? {...value, checked:!value.checked} : value
               )))
            )
        }

        return(
            <>
                {check.map((value,index) => {
                    return(
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" id={`check2-${index}`} checked={value.checked} onChange={() => handleChange(index)}/>
                            <label className="form-check-label" htmlFor={`check2-${index}`}>{value.label}</label>
                        </div>
                    )
                })}
            </>
        )
}

export function Checkbox3(){
    const check3 = [
            {
                label: "Lego",
                checked: false
            },
            {
                label: "Toy Con",
                checked: false
            },
            {
                label: "Old School Toy",
                checked: false
            },
            {
                label: "Tot-Zone",
                checked: false
            },
            {
                label: "Kidz Toys",
                checked: false
            },
            {
                label: "Monsters Toy Store",
                checked: false
            }
        ]
    
        const [check,setCheck] = useState(check3)
        const handleChange = (id:any) => {
            return(
                setCheck(check.map((value,index) => (
                    index === id ? {...value, checked:!value.checked} : value
               )))
            )
        }

        return(
            <>
                {check.map((value,index) => {
                    return(
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" id={`check3-${index}`} checked={value.checked} onChange={() => handleChange(index)}/>
                            <label className="form-check-label" htmlFor={`check3-${index}`}>{value.label}</label>
                        </div>
                    )
                })}
            </>
        )
}

export function Checkbox4(){
    const check4 = [
            {
                label: "0-₹500",
                checked: false
            },
            {
                label: "₹501-₹1000",
                checked: false
            },
            {
                label: "₹1001-₹2000",
                checked: false
            },
            {
                label: "₹2001-₹4000",
                checked: false
            },
            {
                label: "₹5000 and above",
                checked: false
            }
        ]
    
        const [check,setCheck] = useState(check4)
        const handleChange = (id:any,e:any) => {
            console.log(e.target.checked ? "received" : "not received");
            return(
                setCheck(check.map((value,index) => (
                    index === id ? {...value, checked:!value.checked} : value
               )))
            )
        }

        return(
            <>
                {check.map((value,index) => {
                    return(
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" id={`check4-${index}`} checked={value.checked} onChange={(e) => handleChange(index,e)}/>
                            <label className="form-check-label" htmlFor={`check4-${index}`}>{value.label}</label>
                        </div>
                    )
                })}
            </>
        )
}