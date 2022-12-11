import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} fade >
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img1}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Website Launch</h3>
					<p>View Event from the Events Page</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img2}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Annual General Meeting</h3>
					<p>View Event from the Events Page</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;