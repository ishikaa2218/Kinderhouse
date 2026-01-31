import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { NavLink } from 'react-router';

export function Signin(){
    return(
        <>
            <div className="container">
                <div className="row mt-4 p-2" style={{backgroundColor:'#f1f1f2'}}>
                    <h4 className="text-center">Create Your Account</h4>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-sm-5">
                        <label htmlFor="email" className="form-label"><h5>E-mail</h5></label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-sm-5">
                        <label htmlFor="password" className="form-label"><h5>Password</h5></label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center">
                        <NavLink to="/" onClick={() => (confirm('Account successfully created!'))} role="button" className="btn btn-dark">CREATE</NavLink>
                    </div>
                </div>
                <div className="row mb-5"></div>
		    </div>
        </>
    )
}