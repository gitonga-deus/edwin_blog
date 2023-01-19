import { useState } from "react";

// React Bootstrap Components
import { Col, Row, Form, Button } from "react-bootstrap";

// Components
import { Heading } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// EmailJS
import { send } from "emailjs-com";

// React Icons
import { BsChatDots, BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

// Data for Contact Page
import data from "../utilities/data";

const Contact = () => {

	useDocumentTitle("Contact Us - Githiga SHG")

	const [toSend, setToSend] = useState({
		sender_name: "",
		sender_mobile: "",
		sender_email: "",
		message: "",
	});

	const sendEmail = (e) => {
		e.preventDefault();
		send(
			"service_erwc4km",
			"template_gzb4ssv",
			toSend,
			"KMYgLoarZnydQ2AfE"
		).then((res) => {
			alert("Email successfully sent!", res.status, res.text);
		}).catch((err) => {
			alert("Email failed to send.", err);
		});

		setToSend({
			sender_name: "",
			sender_mobile: "",
			sender_email: "",
			message: ""
		});
	}

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	}

	const { location, address, emailAddress, phoneNumber } = data

	return (
		<>
			<Heading title="Get in Touch" />
			<div className="py-3">
				<Row style={{
					margin: "5px",
					border: "1px solid #661111",
					borderRadius: "5px"
				}}>
					<Col sm={5} md={5} lg={4} style={{
						color: "#fff",
						backgroundColor: "#661111",
						borderRadius: "5px 0 0 5px"
					}}>
						<div className="p-3">
							<h3 className="d-flex align-items-center">
								<BsChatDots />
								<span style={{ marginLeft: "10px" }}>Chat to Us</span>
							</h3>
							<p>
								Our friendly team is here to help: <br />
								{emailAddress}
							</p>
						</div>
						<div className="p-3">
							<h3 className="d-flex align-items-center">
								<SlLocationPin /> <span style={{ marginLeft: "10px" }} >Office</span>
							</h3>
							<p>We are located in: <br /> Githiga, Kiambu </p>
						</div>
						<div className="p-3">
							<h3 className="d-flex align-items-center">
								<BsTelephone />
								<span style={{ marginLeft: "10px" }} >Phone</span>
							</h3>
							<p>Mon - Fri from 9am to 5pm <br /> {phoneNumber}</p>
						</div>
					</Col>
					<Col sm={7} md={7} lg={8}>
						<Form onSubmit={sendEmail} className="py-3">
							<Row>
								<Col sm={6} md={6}>
									<Form.Group className="mb-2 py-1" controlId="formBasicFullName">
										<Form.Label>Full Name</Form.Label>
										<Form.Control
											type="text" name="sender_name" value={toSend.sender_name}
											placeholder="Full Name" required onChange={handleChange}
										/>
									</Form.Group>
								</Col>
								<Col sm={6}>
									<Form.Group className="mb-2 py-1" controlId="formBasicPhoneNumber">
										<Form.Label>Mobile Number</Form.Label>
										<Form.Control
											type="text" name="sender_mobile" value={toSend.sender_mobile}
											placeholder="Mobile Number" required onChange={handleChange}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Form.Group className="mb-2 py-1" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email" name="sender_email" value={toSend.sender_email}
									placeholder="Email" required onChange={handleChange}
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group className="mb-2" controlId="formBasicTextarea">
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea" rows={4}
									name="message" value={toSend.message}
									placeholder="Message" required onChange={handleChange}
								/>
							</Form.Group>
							<Button className="mb-2" type="submit">
								Send Message
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Contact;