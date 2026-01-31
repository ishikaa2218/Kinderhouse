import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

export function ReturnPolicy(){
    return(
        <div className="container">
			<div className="row mt-5">
				<h4><b>Returns and Refunds Policy</b></h4>
				<p>At <b>KinderHouse</b>, we value your trust and strive to ensure a delightful shopping experience. However, we understand that there might be times when you need to return or exchange a product. 
				Below is our hassle-free returns and refunds process to assist you:</p>
				<hr className="bg-light"></hr>
				<h4><b>Returns Policy</b></h4>
				<ol>
					<li>
						<b>Eligibility for Returns:</b>
						<ul>
							<li>Products must be returned within <b>15 </b> of delivery.</li>
							<li>Items should be unused, in their original condition, and accompanied by the original packaging and receipt.</li>
						</ul>
					</li>
					<li>
						<b>Non-Returnable Items:</b>
						<ul>
							<li>Personalized or customized products.</li>
							<li>Products purchased during clearance sales.</li>
						</ul>
					</li>
					<li>
						<b>How to Initiate a Return:</b>
						<ul>
							<li>Visit our <a href="#" style={{color:'#f567b2'}}>Returns Page</a> or contact our customer support team at <a href="mailto:kinderhouse@gmail.com" style={{color:'#f567b2'}}>kinderhouse@gmail.com</a></li>
							<li>Provide your order details and reason for return.</li>
							<li>Our team will guide you through the return shipping process.</li>
						</ul>
					</li>
				</ol>
				<hr className="bg-light"></hr>
				<h4><b>Refunds Policy</b></h4>
				<ol>
					<li>
						<b>Refund Eligibility:</b>
						<ul>
							<li>Refunds will be processed once the returned item has been inspected and approved.</li>
						</ul>
					</li>
					<li>
						<b>Refund Options:</b>
						<ul>
							<li>Refund to your <b>original payment method</b>.</li>
							<li>Store credit for future purchases.</li>
						</ul>
					</li>
					<li>
						<b>Processing Time:</b>
						<ul>
							<li>Refunds are processed within <b>5-7 business days</b> after approval.</li>
						</ul>
					</li>
				</ol>
				<hr className="bg-light"></hr>
				<h4><b>Damaged or Incorrect Items</b></h4>
				<p>If you receive a damaged or incorrect item, we sincerely apologize! Please contact us within 
				<b>48 hours of delivery</b>, and we will arrange for a replacement or refund at no additional cost.</p>
				<hr className="bg-light"></hr>
				<h4><b>Need Assistance?</b></h4>
				<p>For any questions or concerns regarding returns or refunds, feel free to reach out to us:</p>
				<ul>
					<li><b>Email:</b>&nbsp;&nbsp;<a href="mailto:kinderhouse@gmail.com" style={{color:'#f567b2'}}>kinderhouse@gmail.com</a></li>
					<li><b>Phone:</b>&nbsp;&nbsp;+91 9464519901</li>
				</ul>
				<p>We are here to make your experience as smooth and joyful as possible! 😊</p>
			</div>
		</div>
    )
}