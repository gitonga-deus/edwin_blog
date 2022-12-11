import { useState, useEffect } from "react";

// React Bootstrap Components
import { Row, Col, Card } from "react-bootstrap";

// Components
import { Heading } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";
import { handleTimeStamp } from "../utilities/handleTimestamp";

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

	return (
		<Row>
			<Heading title="Events" />
			{post && post.map((post, index) => (
				<Col sm={12} md={12} lg={3} className="p-3" key={index}>
					<Card style={{ borderRadius: "5px" }} className="shadow">
						<Link to={"/event/" + post.slug.current} key={post.slug.current}>
							<span >
								<img
									className="d-block w-100 mb-3 events-img"
									style={{ objectFit: "cover", height: "200px" }}
									src={post.mainImage.asset.url}
									alt={post.mainImage.alt}
								/>
							</span>
							<span className="text-center text-black events-title">
								<h5>{post.title}</h5>
								<p>{handleTimeStamp(post.publishedAt)}</p>
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