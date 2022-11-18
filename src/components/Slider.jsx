import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

// import img2 from "../../assets/carousel_2.jpg"
// import img3 from "../../assets/carousel_3.jpg"

import data from "../data.json"

const Slider = () => {
	const { home_slider } = data
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const renderCarousel = () => {
		let result = [];
		home_slider.map((item, i) => {
			result.push(
				<Carousel.Item key={i}>
					<img
						className="d-block w-100"
						src={item.img}
						style={{ borderRadius: "10px", objectFit: "cover" }}
						height="400px"
						alt={item.label}
					/>

					<Carousel.Caption>
						<h3>{item.label}</h3>
						<p>{item.caption}</p>
					</Carousel.Caption>
				</Carousel.Item>
			)
		})
		return result;

	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} fade>
			{renderCarousel()}
		</Carousel>
	);
}

export default Slider;