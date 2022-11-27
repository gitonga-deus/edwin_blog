// React Bootstrap
import { Row, Col, Card } from "react-bootstrap";

// Components
import { PageTitle, Slider } from "../components";

import mission from "../../assets/home_icons/mission.svg";
import vision from "../../assets/home_icons/vision.svg";
import value from "../../assets/home_icons/value.svg";

const Home = () => {
	return (
		<Row>
			<PageTitle title="Welcome to St. John Evangelist Githiga Catholic Church Self-Help Group" />

			<div className="py-4">
				<Slider />
			</div>

			<PageTitle title="Who are We" />
			<div className="col-sm-12" style={{ padding: "20px" }}>
				<p>
					<strong>St. John Evangelist Githiga Catholic Church Self-Help Group</strong> was established in the year <strong>1993 in Githiga Parish of the Archdiocese of Nairobi</strong>. It is an inclusive group that does not discriminate against any person due to age, religion, social status, or otherwise. It is among many others that operate within Parishes in the Archdiocese of Nairobi.
				</p>
				<p>
					Similar to the rest, it was established to empower individuals and communities economically through financial inclusion. Its most important activities include savings mobilization and accessing affordable credit for its members. To date, the group has a membership of <strong>1006 members whose deposits have accumulated to Ksh 45m</strong>
				</p>
				<p>
					The management is committed to serving its members with diligence and utmost customer care services. Members are proud to save with convenience using modern computer technology to receive seamless services not necessarily involving physical human persons. They have access to credit daily whenever the need arises.
				</p>
				<p>
					Membership is drawn from all regions, including the diaspora as make the best use of technology
				</p>
			</div>
			<Col className="my-4 text-center" sm={12} md={12} lg={4}>
				<Card style={{ height: "260px" }} className="shadow">
					<Card.Header style={{ backgroundColor: "#661111", color: "#fff", padding: "10px" }}>
						<img src={vision} height="60px" width="60px" alt="Vision" />
						<h3 className="py-1">Vision</h3>
					</Card.Header>
					<span className="p-3">
						To be the preferred community-based financial service provider.
					</span>
				</Card>
			</Col>
			<Col className="my-4 text-center" sm={12} md={12} lg={4}>
				<Card style={{ height: "260px" }} className="shadow">
					<Card.Header style={{ backgroundColor: "#661111", color: "#fff", padding: "10px" }}>
						<img src={mission} height="60px" width="60px" alt="Mission" />
						<h3 className="py-1">Mission</h3>
					</Card.Header>
					<span className="p-3">
						To empower the members economically through saving mobilization, providing affordable credit, and prudent investment by applying transformative management styles.
					</span>
				</Card>
			</Col>
			<Col className="my-4 text-center" sm={12} md={12} lg={4}>
				<Card style={{ height: "260px" }} className="shadow">
					<Card.Header style={{ backgroundColor: "#661111", color: "#fff", padding: "10px" }}>
						<img src={value} height="60px" width="60px" alt="Core Values" />
						<h3 className="py-1">Core Values</h3>
					</Card.Header>
					<span className="p-3">
						Accountability, Honesty, Integrity, Transparency, and Teamwork.
					</span>
				</Card>
			</Col>
		</Row >
	)
}

export default Home;
