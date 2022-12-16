// React Bootstrap
import { Row, Col, Button, Modal } from "react-bootstrap";

// Components
import { Heading } from "../components";

// Sanity CMS
// import sanityClient from "../client"

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

import data from "../data.json";

const Management = () => {
	useDocumentTitle("Management - Githiga SHG");
	const { team } = data

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
				{team.map((person, index) => (
					<Col className="py-2" lg={4} md={6} sm={6} key={index}>
						<span>
							<img
								className="img-thumbnail"
								style={{
									objectFit: "cover",
									backgroundPosition: "center",
									height: "300px",
									width: "240px"
								}}
								src={person.imgUrl}
								alt={person.name}
							/>
						</span>
						<div className="py-2 my-1">
							<h5>{person.name}</h5>
							<p>{person.rank}</p>
						</div>
					</Col>
				))}
			</div>
		</Row >
	);
};

export default Management;