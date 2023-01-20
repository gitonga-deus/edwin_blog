import { useState } from "react";

// React Bootstrap Components
import { Col, Row, Form, Button } from "react-bootstrap";

// Components
import { Heading, Map } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// EmailJS
import { send } from "emailjs-com";

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

	const { contact } = data

	return (
		<>
			<Heading title="Get in Touch" />
			<Row className="py-3">
				{contact.map((item, index) => (
					<Col className="my-1 text-center" sm={12} md={4} lg={4} key={index}>
						<div className="p-3">
							<img src={item.icon} alt="" height="50px" />
							<h5 className="p-3">{item.title}</h5>
							<p>{item.text}</p>
						</div>
					</Col>
				))}
			</Row>

			<Row style={{
				borderRadius: "5px",
				border: "2px solid #661111",
			}}>
				<Col sm={12} lg={6} md={12}>
					<Form onSubmit={sendEmail} className="py-3">
						<Form.Group className="mb-1 py-1" controlId="formBasicFullName">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text" name="sender_name" value={toSend.sender_name}
								placeholder="Full Name" required onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-2 py-1" controlId="formBasicPhoneNumber">
							<Form.Label>Mobile Number</Form.Label>
							<Form.Control
								type="text" name="sender_mobile" value={toSend.sender_mobile}
								placeholder="Mobile Number" required onChange={handleChange}
							/>
						</Form.Group>
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
				<Col sm={12} lg={6} md={12} className="p-2">
					<Map />
				</Col>
			</Row>
		</>
	)
}

export default Contact;