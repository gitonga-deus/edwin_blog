// React Bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Components
import { Heading, Person } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// Data
import data from "../data.json";
// import henry from "../../assets/team/placeholder_male.jpg"
// import james from "../../assets/team/James.jpg"
// import kennedy from "../../assets/team/Kennedy.jpg"
// import hannah from "../../assets/team/Hannah.jpg"
// import esther from "../../assets/team/placeholder_female.jpg"
// import kanini from "../../assets/team/Kanini.jpg"
// import peter from "../../assets/team/Peter.jpg"
// import ngure from "../../assets/team/Ngure.jpg"
// import john from "../../assets/team/John.jpg"


const Management = () => {
	useDocumentTitle("Management - Githiga SHG");

	const { team } = data

	return (
		<Row>
			<Heading title="Leadership and Governance" />
			<div className="py-4">
				<p>
					Leadership is supervised and regulated by <strong>Caritas Nairobi Social Promotion,</strong> an economic arm of Archdiocese of Nairobi. Management Committee comprises of seven members elected from the general membership during Annual General Meeting.
				</p>
				<p>
					For effective management, the committee is structured into subcommittees which are the engines of business development. They include:
				</p>
				{["Executive,", "Finance & Budget,", "Risk, Audit & Compliance, and", "Capacity Building"].map((item, i) => (
					<ul className="px-4 m-2" key={item + i}>
						<li>{item}</li>
					</ul>
				))}
				<p>
					<span>
						<strong>OPERATIONS: </strong>
					</span>
					The group has an accountant who serves the members on daily basis in the physical office within the Parish compound. Services are fully automated with real time alert
				</p>
			</div>
			<Heading title="Meet the Team" />
			<div className="py-4 row text-center">
				{team.map((item, index) => (
					<div key={index}>
						<Person {...item} />
					</div>
				))}
			</div>
		</Row >
	);
};

export default Management;