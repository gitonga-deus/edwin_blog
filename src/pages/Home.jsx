// React Hooks
import { useEffect } from "react";

// React Bootstrap
import { Row, Col, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

// Components
import { PageTitle, Slider } from "../components";

import data from "../data.json";

const Home = () => {
	const { home_icons } = data;

	const renderHomeIcons = () => {
		let result = [];
		home_icons.map((item, index) => {
			result.push(
				<Col className="my-4 text-center" sm={12} md={12} lg={4} key={index}>
					<Card style={{ height: "auto" }} className="shadow">
						<CardHeader style={{ backgroundColor: "#661111", color: "#fff", padding: "5px" }}>
							<img src={item.icon} height="55px" width="55px" alt={item.name} />
							<h3 className="py-1">{item.name}</h3>
						</CardHeader>
						<span className="p-3">
							{item.description}
						</span>
					</Card>
				</Col>
			)
		});
		return result;
	}

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
			{renderHomeIcons()}
		</Row >
	)
}

export default Home;
