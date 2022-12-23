// React Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import { Heading, Slider } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// Website Data
import data from "../utilities/data";

const Home = () => {
	useDocumentTitle("Home - Githiga SHG")
	return (
		<Row>
			<Heading title="Welcome to St. John Evangelist Githiga Catholic Church Self-Help Group" />

			<div className="py-4">
				<Slider />
			</div>

			<Heading title="Who are We" />
			<div className="col-sm-12 text-justify" style={{ padding: "20px" }}>
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
					Membership is drawn from all regions, including the diaspora as make the best use of technology.
				</p>
			</div>

			{data.homeIcons.map((item, index) => (
				<Col className="my-4 text-center" sm={12} md={12} lg={4} key={index}>
					<div className="py-3">
						<img src={item.icon} alt={item.title} style={{
							height: "80px"
						}} />
					</div>
					<div className="px-4">
						<h4>{item.title}</h4>
						<p>{item.description}</p>
					</div>
				</Col>
			))}
		</Row >
	)
}

export default Home;
