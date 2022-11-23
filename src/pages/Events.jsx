import { useState, useEffect } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

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

	return (
		<Row>
			<PageTitle title="Events" />
			{post && post.map((post, index) => (
				<Col sm={12} md={12} lg={6} className="p-4" key={index}>
					<Card style={{ borderRadius: "5px" }}>
						<Link to={"/event/" + post.slug.current} key={post.slug.current}>
							<span >
								<img
									className="d-block w-100 mb-3 events-img"
									style={{ objectFit: "cover", height: "300px" }}
									src={post.mainImage.asset.url}
									alt={post.mainImage.alt}
								/>
							</span>
							<span className="text-black events-title">
								<h3>{post.title}</h3>
							</span>
						</Link>
					</Card>
				</Col>
			))}
		</Row >
	)
}

export default Events;