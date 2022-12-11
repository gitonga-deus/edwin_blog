import { useState, useEffect } from "react";

// React Bootstrap Components
import { Row, Col, Card } from "react-bootstrap";

// Components
import { Heading } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// Sanity CMS
import sanityClient from "../client.js";

// React Router
import { Link } from "react-router-dom";

const Events = () => {

	useDocumentTitle("Events - Githiga SHG");

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
				},
				publishedAt
			}`)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	const handleTimeStamp = (timestamp) => {
		const date = new Date(timestamp);

		return date.toLocaleDateString('en-GB', {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	};

	return (
		<Row>
			<Heading title="Events" />
			{post && post.map((post, index) => (
				<Col sm={12} md={12} lg={6} className="p-4" key={index}>
					<Card style={{ borderRadius: "5px" }} className="shadow">
						<Link to={"/event/" + post.slug.current} key={post.slug.current}>
							<span >
								<img
									className="d-block w-100 mb-3 events-img"
									style={{ objectFit: "cover", height: "300px" }}
									src={post.mainImage.asset.url}
									alt={post.mainImage.alt}
								/>
							</span>
							<span className="text-center text-black events-title">
								<h3>{post.title}</h3>
								<p>Published at: {handleTimeStamp(post.publishedAt)}</p>
							</span>
						</Link>
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default Events;