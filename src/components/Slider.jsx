import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';


// import slider1 from "../../assets/slider-img/church-image.jpg";
import slider2 from "../../assets/slider-img/management-team.jpg";


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



	return (
		<Row>
			<Carousel activeIndex={index} onSelect={handleSelect} fade>
				<Carousel.Item key={index}>
					<img
						className="d-block w-100 img-fluid"
						src={slider2}
						style={{ borderRadius: "10px", objectFit: "cover", height: "auto" }}
						alt="Church Image"
					/>
					<Carousel.Caption>
						<h3></h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Row>
	);
}

export default Slider;