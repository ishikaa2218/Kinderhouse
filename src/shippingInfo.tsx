import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

export function ShippingInfo(){
    return(
        <div className="container">
			<div className="row mt-5">
				<h4><b>Shipping Information</b></h4>
				<h6 className="mt-1"><b>📦 Fast, Reliable, and Convenient Shipping</b></h6>
				<p>At KinderHouse, we’re committed to delivering joy straight to your doorstep with a seamless shipping experience. 
				Here's all you need to know about how we get your goodies to you!</p>
				<ol>
					<li>
						<b>Shipping Options</b>
						<ul>
							<li><b>Standard Shipping:</b> Receive your order within 5-7 business days.</li>
							<li><b>Express Delivery:</b> For those can’t-wait moments, enjoy delivery in just 2-3 business days!</li>
							<li><b>Free Shipping:</b> Orders above $50 qualify for free standard shipping.</li>
						</ul>
					</li>
					<li>
						<b>Order Processing</b>
						<p>We process your orders swiftly! Once your order is placed, it takes 24-48 hours to prepare for shipment. You’ll receive 
						an email confirmation with tracking details as soon as your package is on its way.</p>
					</li>
					<li>
						<b>Delivery Partners</b>
						<p>We’ve partnered with trusted carriers to ensure safe and timely delivery of your products.</p>
					</li>
					<li>
						<b>Shipping Rates</b>
						<p>Shipping costs vary based on your location and the shipping method selected. You can
						view the exact charges during checkout.</p>
					</li>
					<li>
						<b>International Shipping</b>
						<p>Yes, we deliver smiles worldwide! Shipping times and rates for international orders may vary.</p>
					</li>
					<li>
						<b>Lost or Damaged Packages</b>
						<p>We’ve got you covered! If your order arrives damaged or gets lost in transit, contact our support 
						team immediately, and we’ll make it right.</p>
					</li>
				</ol>
				<h4><b>Need Assistance?</b></h4>
				<p>For any questions or concerns regarding returns or refunds, feel free to reach out to us:</p>
				<ul>
					<li><b>Email:</b>&nbsp;&nbsp;<a href="mailto:kinderhouse@gmail.com" style={{color:'#f567b2'}}>kinderhouse@gmail.com</a></li>
					<li><b>Phone:</b>&nbsp;&nbsp;+91 9464519901</li>
				</ul>
				<p>KinderHouse—making the journey from our store to your home as joyful as the toys themselves! 😊</p>
			</div>
		</div>
    )
}