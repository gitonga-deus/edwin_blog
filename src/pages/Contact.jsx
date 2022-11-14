import { Col, Row } from "react-bootstrap"

import { PageTitle, ContactForm,  } from "../components"

import { BsChatDots, BsTelephone } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"

const Contact = () => {
	return (
		<div className="py-4">
			<PageTitle title="Get in Touch" />
			<Row style={{
				margin: "5px",
				border: "1px solid #661111",
				borderRadius: "10px"
			}}>
				<Col sm={5} style={{
					color: "#fff",
					backgroundColor: "#661111",
					borderRadius: "10px 0 0 10px"
				}}>
					<div className="p-3">
						<h3 className="d-flex align-items-center">
							<BsChatDots />
							<span style={{ marginLeft: "10px" }}>Chat to Us</span>
						</h3>
						<p>Our friendly team is here to help <br /> test@gmail.com</p>
					</div>
					<div className="p-3">
						<h3 className="d-flex align-items-center">
							<SlLocationPin /> <span style={{ marginLeft: "10px" }} >Office</span>
						</h3>
						<p>We are located at: <br /> Githiga, Kiambu 00900</p>
					</div>
					<div className="p-3">
						<h3 className="d-flex align-items-center">
							<BsTelephone />
							<span style={{ marginLeft: "10px" }} >Phone</span>
						</h3>
						<p>Mon - Fri from 9am to 5pm <br /> @ +254 712 345 678</p>
					</div>
				</Col>
				<Col sm={7}>
					<ContactForm />
				</Col>
			</Row>
		</div>
	)
}

export default Contact;