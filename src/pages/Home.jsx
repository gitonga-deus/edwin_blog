import { Row, Col, Card } from "react-bootstrap"

import { CarouselItem, PageTitle } from "../components";

import CardHeader from "react-bootstrap/esm/CardHeader";

import { SlRocket } from "react-icons/sl"

const Item = ({ title, content }) => {
	return (
		<Col className="my-4" sm={4} md={4}>
			<Card style={{height: "250px"}}>
				<CardHeader style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
					<SlRocket fontSize={40} />
					<h5 className="py-1">{title}</h5>
				</CardHeader>
				<span className="p-3">
					{content}
				</span>
			</Card>
		</Col>
	)
}

const Home = () => {
	return (
		<Row>
			<PageTitle title="Welcome to St. John Evangelist Githiga Catholic Church Self-Help Group" />

			<div className="py-4">
				<CarouselItem />
			</div>

			<PageTitle title="Who are We" />
			<div className="col-sm-12" style={{ paddingTop: "20px" }}>
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
			<Item title="Mission" content="To empower the members economically through saving mobilization, providing affordable credit, and prudent investment by applying transformative management styles." />
			<Item title="Vision" content="To be the preferred community-based financial service provider." />
			<Item title="Values" content="Accountability, Honesty, Integrity, Transparency, and Teamwork" />
		</Row >
	)
}

export default Home;
