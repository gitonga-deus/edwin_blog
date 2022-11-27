import { useState } from "react";

// React Bootstrap
import { Col, Row, Card, Button, Modal } from "react-bootstrap";

// Components
import { PageTitle } from "../components";

// Products Data
import data from "../data.json"

// SVG Icons
import img from "../../assets/loan.svg"
import mode from "../../assets/channel.svg"
import member from "../../assets/membership.svg";

const Membership = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Become a Member
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Registration Requirements</h4>
				{data.membership_requirements.map((requirement, i) => (
					<ul key={i}>
						<li>{requirement}</li>
					</ul>
				))}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

const Products = () => {

	const [modalShow, setModalShow] = useState(false);

	const { loan_products, membership_products, payment_channels } = data;

	const renderLoan = () => {
		let result = [];
		loan_products.map((loan, i) => {
			result.push(
				<Col sm={6} md={6} lg={4} key={i} className="my-2 p-3 text-center">
					<Card className="shadow" style={{
						height: "250px"
					}}>
						<Card.Header className="p-3 text-center" style={{ backgroundColor: "#661111", color: "#fff" }}>
							<img src={img} alt={`${loan.loanType} Loan`} height="50px" className="m-1" />
							<h4>{loan.loanType}</h4>
						</Card.Header>
						<Card.Body className="p-2">{loan.description}</Card.Body>
					</Card>
				</Col >
			)
		})
		return result;
	};

	const renderMembership = () => {
		let result = [];
		membership_products.map((membership, i) => {
			result.push(
				<Col sm={12} md={12} lg={4} key={i} className="my-2 p-3 text-center">
					<Card className="shadow" style={{
						height: "230px"
					}}>
						<Card.Header className="p-3 text-center" style={{ backgroundColor: "#661111", color: "#fff" }}>
							<img src={member} alt={`${membership.type} Loan`} height="50px" className="m-1" />
							<h4>{membership.type}</h4>
						</Card.Header>
						<Card.Body className="p-2">{membership.description}</Card.Body>
					</Card>
				</Col >
			)
		});
		return result;
	}

	const renderPaymentChannel = () => {
		let result = [];
		payment_channels.map((channel, idx) => {
			result.push(
				<Col className="my-4 text-left" sm={6} md={6} lg={3} key={idx}>
					<Card className="shadow" style={{
						height: "220px"
					}}>
						<Card.Header className="p-3 text-center" style={{ backgroundColor: "#661111", color: "#fff", alignItems: "center" }}>
							<img src={mode} alt={`${channel.name} Loan`} height="50px" className="m-1" />
							<h4>{channel.name}</h4>
						</Card.Header>
						<Card.Body>
							Acc Name: {channel.accountName} <br />
							Acc No: {channel.accountNumber}
						</Card.Body>
					</Card>
				</Col>
			)
		});
		return result;
	}

	return (
		<Row>
			<Membership
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>

			<PageTitle title="Loan Products" />
			<div className="text-center">
				<strong>NOTE:</strong>
				Members are entitled to different loans but will limited to only one type of loan product at any given time.
			</div>
			{renderLoan()}
			<PageTitle title="Membership" />
			<div className="text-center">
				<p><strong>NOTE:</strong>{" "}
					Membership is a requirement for all persons to be able to access loan products and the benefits associated with becoming a member of our society.
				</p>
				<Button onClick={() => setModalShow(true)}>Become a Member</Button>
			</div>
			{renderMembership()}
			<PageTitle title="Payment Channels" />
			{renderPaymentChannel()}
		</Row>
	)
}

export default Products;