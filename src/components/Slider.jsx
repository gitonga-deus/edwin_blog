import { useState, useEffect } from 'react';
import { Carousel, Row, Button } from 'react-bootstrap';
import sanityClient from "../client.js";

import { Link } from "react-router-dom";

const Slider = () => {
	const [post, setPost] = useState(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "post"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url
					},
					alt
				},
				publishedAt
			}`)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Row>
			<Carousel activeIndex={index} onSelect={handleSelect} fade>
				{post && post.map((post, idx) => (
					<Carousel.Item key={idx}>
						<img
							className="d-block w-100"
							src={post.mainImage.asset.url}
							style={{ borderRadius: "10px", objectFit: "cover" }}
							height="400px"
							alt={post.mainImage.alt}
						/>
						<Carousel.Caption>
							<h3>{post.title}</h3>
							<Link to={"/event/" + post.slug.current} key={post.slug.current}>
								{/* <Button>View Event</Button> */}
							</Link>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Row>
	);
}

export default Slider;