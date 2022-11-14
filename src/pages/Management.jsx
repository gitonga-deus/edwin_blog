import { Row, Col, Card } from "react-bootstrap";

import { PageTitle } from "../components";

import { CgProfile } from "react-icons/cg"

import hero from "../../assets/carousel_1.jpg";

const Person = ({ name, rank }) => {
	return (
		<Col className="my-4" sm={3}>
			<Card>
				<Card.Body>
					<CgProfile fontSize={60} style={{ height: "150px" }} />
					<Card.Title><h4>{name}</h4></Card.Title>
					<Card.Text>{rank}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

const Management = () => {
	return (
		<Row className="text-center">
			<PageTitle title="Management and Staff" />
			<div className="py-4">
				<img
					className="d-block w-100"
					src={hero}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="450px"
					alt="group photo"
				/>
			</div>
			<div style={{ paddingTop: "20px" }}>
				<PageTitle title="Meet the team" />
			</div>
			<Person name="John Doe" rank="Patron" />
			<Person name="Jane Doe" rank="Chairperson" />
			<Person name="Jane Doe" rank="Chairperson" />
			<Person name="John Smith" rank="Treasurer" />
		</Row>
	);
};

export default Management;