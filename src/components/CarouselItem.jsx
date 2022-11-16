import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import img2 from "../../assets/carousel_2.jpg"
import img3 from "../../assets/carousel_3.jpg"

const CarouselItem = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img2}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img3}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselItem;