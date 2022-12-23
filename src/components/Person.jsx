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
					More Information
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={props.image} alt={props.name} className="img-thumbnail modal-img" />
				<h5 className="py-2">{props.name} - {props.position}</h5>

				<p>{props.bio}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}


const Person = () => {

	const getData = (image, name, position, bio) => {
		let tempData = [image, name, position, bio];

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
							<Button onClick={() => getData(person.image, person.name, person.position, person.bio)}>More</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
			<PersonModal show={modal} onHide={() => setModal(false)} image={tempData[1]} name={tempData[2]} position={tempData[3]} bio={tempData[4]} />
		</Row>
	)
}

export default Person;