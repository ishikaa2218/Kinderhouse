import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

export function Contact(){
    return(
        <>
            <div className="container mt-5 p-3">
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <div className="container p-2">
                            <i className="bi bi-geo-alt-fill"  style={{fontSize:'30px',color:'#f567b2'}}></i>
                            <p className="mt-2"><b>Shop number 2, Street No. 13, New Avtar Nagar, Tagore Nagar, Jalandhar, Punjab 144001</b></p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="container p-2">
                            <i className="bi bi-envelope-fill"  style={{fontSize:'30px',color:'#f567b2'}}></i>
                            <p className="mt-2"><b><a href="mailto:kinderhouse@gmail.com" style={{textDecoration:'none',color:'black'}}>kinderhouse@gmail.com</a></b></p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="container p-2">
                            <i className="bi bi-telephone-fill"  style={{fontSize:'30px',color:'#f567b2'}}></i>
                            <p className="mt-2"><b>+91 9464519901</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container rounded-pill" style={{backgroundColor:'#cbeff7'}}>
                <div className="row mt-5"></div>
                <div className="row mt-5">
                    <h4 className="text-center">Enquire Now</h4>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-3">
                        <input type="email" className="form-control" placeholder="E-mail" name="email" />
                    </div>
                    <div className="col-3">
                        <input type="tel" className="form-control" placeholder="Phone" name="phone" pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}" />
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-6">
                        <textarea rows={5} className="form-control" placeholder="Enter your query"></textarea>
                    </div>
                </div>
                <div className="row mt-4 pb-5 justify-content-center">
                    <div className="col-3">
                        <input type="submit" style={{backgroundColor:'#f567b2',color:'white'}} value="SUBMIT" className="form-control" />
                    </div>
                </div>
		    </div>
        </>
    )
}