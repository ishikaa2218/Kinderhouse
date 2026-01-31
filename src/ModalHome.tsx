import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './css/style.css'
import { NavLink } from 'react-router';

export function ModalHome(props:any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
            <div className="row">
                <h4 className="text-center"><b>Kinderhouse Welcomes You!</b></h4>
            </div>
            <div className="row mt-4">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
                            <input type="email" className="form-control" placeholder="E-mail" name="email" />
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-10">
                            <input type="password" className="form-control" placeholder="Password" name="password" />
                            <small>Your lastname is password</small>
                        </div>
					</div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-10">
                            <input type="submit" style={{backgroundColor:'#f567b2',color:'white'}} value="LOGIN" className="form-control" />
                            <div className="mt-3" style={{backgroundColor:'#f1f1f2'}}>
                                <p className="text-center p-2">Don't have an account?<NavLink to="/signin" role="button" style={{color:'#f567b2',textDecoration:'none'}}> Sign-Up</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

