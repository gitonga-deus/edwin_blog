import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom";

import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
	return builder.image(source);
}

const SinglePost = () => {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient.fetch(
			`*[slug.current == "${slug}"]{
				title,
				_id,
				slug,
				mainImage{
					asset->{
						_id,
						url
					}
				},
				body,
				"name": author->name,
				"authorImage": author->image
			}`
		)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singlePost) return <div>Loading...</div>;

	return (
		<Row>
			<main>
				<article>
					<header>
						<div>
							<div>
								<h1>
									{singlePost.title}
								</h1>
								<div>
									<p>{singlePost.name}</p>
								</div>
							</div>
						</div>
						<img src={singlePost.mainImage.asset.url} alt={singlePost.title} style={{ height: "400px" }} />
					</header>
					<div>
						<BlockContent blocks={singlePost.body} projectId="q04r70xj" dataset="production" />
					</div>
				</article>
			</main>
		</Row>
	)
}

export default SinglePost;