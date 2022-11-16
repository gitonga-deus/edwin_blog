import { Row, Col, Card } from "react-bootstrap";

import { PageTitle } from "../components";

import { CgProfile } from "react-icons/cg"

import hero from "../../assets/carousel_1.jpg";

import data from "../data.json";

const Person = ({ person }) => {
	return (
		<Col className="my-4" sm={8}>
			<Card>
				<Col sm={3}>
					<CgProfile fontSize={60} style={{ height: "150px" }} />
				</Col>
				<Col sm={5}>
					<h5>Name: {person.name}</h5>
					<p>Rank: {person.rank}</p>
					<p>Email Address: {person.emailAddress}</p>
					<p>Mobile Number: {person.phone_no}</p>
					<p>{person.description}</p>
				</Col>
			</Card>
		</Col>
	);
}

const Management = () => {
	const { management } = data;

	const renderPersons = () => {
		let result = [];
		management.map((person, i) => {
			result.push(<Person person={person} key={i} />);
		});
		return result;
	};

	return (
		<Row>
			<PageTitle title="Meet the Team" />
			<div className="py-4">
				<img
					className="d-block w-100"
					src={hero}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="group photo"
				/>
			</div>
			<PageTitle title="Leadership and Governance" />
			<div className="py-4">
				<p>
					Leadership is supervised and regulated by <strong>Caritas Nairobi Social Promotion,</strong> an economic arm of Archdiocese of Nairobi. Management Committee comprises of seven members elected from the general membership during Annual General Meeting.
				</p>
				<p>
					For effective management, the committee is structured into subcommittees which are the engines of business development. They include: {["Executive,", "Finance and Budget,", "Risk Audit and Compliance, and", "Capacity Building"].map((item, i) => (
						<ul className="px-4 m-2">
							<li>{item}</li>
						</ul>
					))}
				</p>
				<p>
					<span>
						<strong>OPERATIONS: </strong>
					</span>
					The group has an accountant who serves the members on daily basis in the physical office within the Parish compound. Services are fully automated with real time alert
				</p>
			</div>
			<PageTitle title="The Management Committee" />
			{renderPersons()}
			{/* 
			<Person name="John Doe" rank="Patron" />
			<Person name="Jane Doe" rank="Chairperson" /> 
			<Person name="Jane Doe" rank="Secretary" />
			<Person name="John Smith" rank="Treasurer" /> */}
		</Row>
	);
};

export default Management;