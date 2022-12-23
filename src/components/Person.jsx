import { useState } from "react";

import { Col, Card, Row, Button, Modal } from "react-bootstrap";

import data from "../utilities/data";

const PersonModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					More Info
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Registration Requirements</h4>
				
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}


const Person = () => {

	const getData = (phone, email, bio) => {
		let tempData = [phone, email, bio];

		setTempData(item => [1, ...tempData]);

		return setModal(true)
	}

	const [modal, setModal] = useState(false);
	const [tempData, setTempData] = useState([])

	return (
		<Row>
			{data.personData.map((person, index) => (
				<Col sm={6} md={6} lg={4} className="py-2" key={index}>
					<Card className="mt-2 mb-3 person-card shadow">
						<div className="card-up maroon-gradient"></div>
						<div className="avatar mx-auto">
							<img src={person.image} alt={person.name} className="img img-thumbnail" />
						</div>
						<Card.Body className="text-center">
							<h4 className="card-title font-weight-bold">{person.name}</h4>
							<hr />
							<p>{person.position}</p>
							<Button onClick={() => getData(person.phoneNumber, person.emailAddress, person.bio)}>More</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
			<PersonModal show={modal} onHide={() => setModal(false)} />
		</Row>
	)
}

export default Person;