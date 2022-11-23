import { useState, useEffect } from "react";

import { Row, Col, Button } from "react-bootstrap";

import { PageTitle } from "../components";

import sanityClient from "../client.js";

import { Link } from "react-router-dom";

const Events = () => {

	const [post, setPost] = useState(null);

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
				}
			}`)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	// const handleClick = () => {
	// 	alert("You clicked the button!");
	// }

	return (
		<Row>
			<PageTitle title="Events" />
			<Col sm={6} md={6} lg={6}>
				{post && post.map((post, index) => (
					<article>
						<Link to={"/event/" + post.slug.current} key={post.slug.current}>
							<span key={index}>
								<img
									style={{
										width: "800px",
										height: "500px",
										objectFit: "cover",
										backgroundPosition: "center",
									}}
									src={post.mainImage.asset.url}
									alt={post.mainImage.alt}
								/>
								<span>
									<h3>{post.title}</h3>
								</span>
							</span>
						</Link>
					</article>
				))}
			</Col>
		</Row>
	)
}

export default Events;