import { Row, Col, Card } from "react-bootstrap";

import { PageTitle } from "../components";

import hero from "../../assets/img1.jpg";
import placeholder from "../../assets/placeholder.jpg"

const Management = () => {

	return (
		<Row>
			<PageTitle title="Meet the Team" />
			<div className="py-4">
				<img
					className="d-block w-100"
					src={hero}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="400px"
					alt="group photo"
				/>
			</div>
			<PageTitle title="Leadership and Governance" />
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

			{/* <Col sm={4} lg={4} md={4}>
				<img src={placeholder} alt="Person" height="250px" width="auto" />
			</Col>
			<Col sm={8} md={8} lg={8}>
				<h3>John Doe</h3>
				<h6>Chairman</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos odit iusto saepe. Rem sunt expedita iure, earum delectus commodi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos odit iusto saepe. Rem sunt expedita iure, earum delectus commodi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos odit iusto saepe. Rem sunt expedita iure, earum delectus commodi.
				</p>
			</Col> */}
		</Row >
	);
};

export default Management;