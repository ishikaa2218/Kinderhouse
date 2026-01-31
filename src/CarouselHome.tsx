import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './css/style.css'
import { HNewItems } from './HItems'

export function CarouselHome(){
    return(
        <Carousel touch={true}>
            <Carousel.Item>
                <div className="row">
                    <div className="col-2">
                        <HNewItems text="Fluffy Unicorn - ₹780" image="28.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Black Electric Jeep - ₹1450" image="29.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Toddler Snail - ₹350" image="30.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Kid Ride - ₹890" image="31.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Toy Gun - ₹550" image="32.jpg" />
					</div>
                     <div className="col-2">
                        <HNewItems text="Wood Toy Set - ₹850" image="33.jpg" />
					</div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <div className="col-2">
                        <HNewItems text="Study Table - ₹1100" image="34.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Toy House - ₹350" image="35.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Train Set - ₹1050" image="36.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Wood Scooter - ₹500" image="37.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Block Set - ₹1000" image="38.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Black Car - ₹800" image="39.jpg" />
					</div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <div className="col-2">
                        <HNewItems text="Doctor Set - ₹880" image="40.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Stuffed Minion - ₹700" image="41.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Rainbow Rings - ₹450" image="42.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Shapes Box - ₹499" image="43.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Multi Toy - ₹1999" image="44.jpg" />
					</div>
                    <div className="col-2">
                        <HNewItems text="Rattle Set - ₹399" image="45.jpg" />
					</div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}