import { Form, Button, Col, Row } from 'react-bootstrap';

const BasicExample = () => {
	return (
		<Form className="py-4">
			<Row>
				<Col sm={6}>
					<Form.Group className="mb-2 py-1" controlId="formBasicPassword">
						<Form.Label>Full Name</Form.Label>
						<Form.Control type="text" placeholder="Full Name" />
					</Form.Group>
				</Col>
				<Col sm={6}>
					<Form.Group className="mb-2 py-1" controlId="formBasicPassword">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control type="text" placeholder="Mobile Number" />
					</Form.Group>
				</Col>
			</Row>
			<Form.Group className="mb-2 py-1" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={3} placeholder="Message" />
			</Form.Group>
			<Button className="mb-2" type="submit" style={{
				backgroundColor: "#661111",
				border: "none"
			}}>
				Send Message
			</Button>
		</Form>
	);
}

export default BasicExample;