import { useState, useEffect } from "react";

// React Bootstrap
import { Row, Col, Card } from "react-bootstrap";

// Components
import { Heading } from "../components";

// Sanity CMS
import sanityClient from "../client"

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";
import members from "../../backend/schemas/members";

const Management = () => {
	useDocumentTitle("Management - Githiga SHG");

	const [person, setPerson] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "members"]{
				name,
				rank,
				email,
				mobileNumber,
				image{
					asset->{
						_id,
						url
					},
					alt
				}
			}`)
			.then((data) => setPerson(data))
			.catch(console.error)
	})

	return (
		<Row>
			<Heading title="Leadership and Governance" />
			<div className="py-4">
				<p>
					Leadership is supervised and regulated by <strong>Caritas Nairobi Social Promotion,</strong> an economic arm of Archdiocese of Nairobi. Management Committee comprises of seven members elected from the general membership during Annual General Meeting.
				</p>
				<p>
					For effective management, the committee is structured into subcommittees which are the engines of business development. They include:
				</p>
				{["Executive,", "Finance & Budget,", "Risk, Audit & Compliance, and", "Capacity Building"].map((item, i) => (
					<ul className="px-4 m-2" key={item + i}>
						<li>{item}</li>
					</ul>
				))}
				<p>
					<span>
						<strong>OPERATIONS: </strong>
					</span>
					The group has an accountant who serves the members on daily basis in the physical office within the Parish compound. Services are fully automated with real time alert
				</p>
			</div>
			<Heading title="Meet the Team" />
			<div className="py-4 row text-center">
				{person && person.map((item, index) => (
					<Col lg={4} md={6} sm={6} key={index}>
						<span>
							<img
								className="img-thumbnail"
								style={{
									objectFit: "cover",
									backgroundPosition: "cover",
									height: "300px",
									width: "240px"
								}}
								src={item.image.asset.url}
								alt={item.image.alt}
							/>
						</span>
						<span>
							<h5>{item.title}</h5>
							<p>{item.rank}</p>
						</span>
					</Col>
				))}
			</div>
		</Row >
	);
};

export default Management;