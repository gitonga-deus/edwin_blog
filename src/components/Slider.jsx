import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';


import churchImage from "../../assets/slider-img/church-image.png";

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Row>
			<Carousel activeIndex={index} onSelect={handleSelect} fade>
				{[churchImage].map((img, index) => (
					<Carousel.Item key={index}>
						<img
							className="d-block w-100 img-fluid"
							src={img}
							style={{ borderRadius: "10px", objectFit: "cover", height: "420px" }}
							alt="Church Image"
						/>
						<Carousel.Caption>
							<h3></h3>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Row>
	);
}

export default Slider;