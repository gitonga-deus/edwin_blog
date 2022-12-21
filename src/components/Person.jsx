import { Col, Card, Button, Row } from "react-bootstrap";

import henry from "../../assets/team/placeholder_male.jpg"
import esther from "../../assets/team/placeholder_female.jpg"
import james from "../../assets/team/James.jpg"
import kennedy from "../../assets/team/Kennedy.jpg"
import hannah from "../../assets/team/Hannah.jpg"
import kanini from "../../assets/team/Kanini.jpg"
import peter from "../../assets/team/Peter.jpg"
import ngure from "../../assets/team/Ngure.jpg"
import john from "../../assets/team/John.jpg"

const personInfo = [
	{
		name: "Henry Kiritu",
		position: "Patron",
		image: henry,
		phoneNumber: "--",
		emailAddress: "--",
		bio: [
			"He is the Patron of the group. He gives the pastoral direction of the group. He is also a mandatory signature on all financial transactions.",
			"He has been very instrumental in the promotion and guidance of the group"
		]
	},
	{
		name: "James Makena Wanyangi",
		position: "Chairman",
		phoneNumber: "0722252068",
		emailAddress: "makenaj2@gmail.com",
		image: james,
		bio: [
			"He chairs all the group meetings and represents the self-help group in all stairs of the governance hierarchy.",
			"He is an expert in governance and leadership with extensive experience in financial institutions, especially SACCOs.",
			"He holds a Bachelor's Degree in Public Administration & Governance, a Diploma in Social Development, and a Certificate in Animal Health.",
			"He is also an Accredited Professional Mediator and practices both court-annexed and private."
		]
	},
	{
		name: "Kennedy Ngoro Mutugi",
		position: "Vice Chairman",
		phoneNumber: "--",
		emailAddress: "--",
		image: kennedy,
		bio: [
			"He holds a Diploma in Computer Management, Service & Repair, and a Certificate in Electronics Science.",
			"He currently operates a service business with an electronics workshop.",
			"In the group, he chairs the Capacity Building Committee which deals with member's education and business development"
		]
	},
	{
		name: "Hannah Wanjiru Ng'ang'a",
		position: "Treasurer",
		phoneNumber: "--",
		emailAddress: "wanjiruhannah665@gmail.com",
		image: hannah,
		bio: [
			"She holds a Diploma in Clearing & Forwarding and has also done 10 Computer Packages.",
			"As a Treasurer, she is the custodian of all group's assets both physical and financial.",
			"She also chairs the Finance & Budget Committee."
		]
	},
	{
		name: "Esther Njeri Kinyuru",
		position: "Secretary",
		phoneNumber: "--",
		emailAddress: "--",
		image: esther,
		bio: [
			"She holds a Diploma in Early Childhood Development.",
			"Currently a full-time ECD Teacher.",
			"As the secretary, she writes and documents all the group's deliberations and resolutions.",
			"She also chairs the Risk, Audit & Compliance."
		]
	},
	{
		name: "Samuel Kanini Kamau",
		position: "Accountant",
		phoneNumber: "0720996911",
		emailAddress: "--",
		image: kanini,
		bio: [
			"He is a CPA-K Profession.",
			"He oversees the operations of the group including Finance, Promotion, and Customer Service.",
			"He is also the liaison between members and the management committee."
		]
	},
	{
		name: "Peter Mbugua Matiru",
		position: "--",
		phoneNumber: "0727525648",
		emailAddress: "petrinel2012@gmail.com",
		image: peter,
		bio: [
			"He holds a Bachelor's Degree in Philosophy and a Certificate in Teaching.",
			"He is the secretary of the Finance & Budget Committee as well as a member of the Risk, Audit & Compliance Committee."
		]
	},
	{
		name: "Samuel Ngure Mburu",
		position: "--",
		phoneNumber: "0722876992",
		emailAddress: "samulenguremburu@gmail.com",
		image: ngure,
		bio: [
			"He is a seasonal artisan in Building and Construction.",
			"He is a member of the Capacity Building Committee and Finance & Budget"
		]
	},
	{
		name: "John Maingi Kimani",
		position: "--",
		phoneNumber: "0727900354",
		emailAddress: "--",
		image: john,
		bio: [
			"He operates a tailoring business and has attended several marketing seminars and workshops.",
			"He is a member of the Capacity Building and Risk, Audit & Compliance Committee"
		]
	}
];

const Person = () => {
	return (
		<Row>
			{personInfo.map((person, index) => (
				<Col sm={6} md={6} lg={4} key={index} className="py-2">
					<Card className="mt-2 mb-3 person-card shadow">
						<div className="card-up maroon-gradient"></div>
						<div className="avatar mx-auto">
							<img src={person.image} alt="" className="img img-thumbnail" />
						</div>
						<Card.Body className="text-center">
							<h4 className="card-title font-weight-bold">{person.name}</h4>
							<hr />
							<p>{person.position}</p>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default Person;