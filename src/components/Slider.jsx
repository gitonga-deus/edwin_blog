import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';

import data from "../utilities/data";

const Slider = () => {
	const [index, setIndex] = useState(0);

	// useEffect(() => {
	// 	sanityClient
	// 		.fetch(`*[_type == "post"]{
	// 			title,
	// 			slug,
	// 			mainImage{
	// 				asset->{
	// 					_id,
	// 					url
	// 				},
	// 				alt
	// 			},
	// 			publishedAt
	// 		}`)
	// 		.then((data) => setPost(data))
	// 		.catch(console.error);
	// }, []);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const { slider } = data

	return (
		<Row>
			<Carousel activeIndex={index} onSelect={handleSelect} fade>
				{slider.map((item, index) => (

					<Carousel.Item key={index}>
						<img
							className="d-block w-100 img-fluid"
							src={item.img}
							style={{ borderRadius: "10px", objectFit: "cover", height: "auto" }}
							alt={item.alt}
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