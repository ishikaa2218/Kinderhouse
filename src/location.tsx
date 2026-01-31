import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

export function Location(){
    return(
        <div className="container">
			<div className="row mt-5" style={{backgroundColor:'#f1f1f2'}}>
				<h4 className="text-center p-2">Store Location</h4>
			</div>
			<div className="row mt-5">
				<div className="col-sm-5 d-flex align-items-center justify-content-center">
					<i className="bi bi-geo-alt-fill me-3"  style={{fontSize:'30px', color:'#f567b2'}}></i>
					<p className="mt-2"><b>Shop number 2, Street No. 13, New Avtar Nagar, Tagore Nagar, Jalandhar, Punjab 144001</b></p>
				</div>
				<div className="col-sm-7">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.739022177411!2d75.54749653847892!3d31.31936437702063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b32eff56a69%3A0xcc1eb61cbad13dfa!2sKinder%20House!5e0!3m2!1sen!2sin!4v1737391079433!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
    )
}