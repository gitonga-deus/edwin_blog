// React Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import { Heading, Slider } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// Website Data
import data from "../utilities/data";

const Home = () => {
	useDocumentTitle("Home - Githiga SHG");

	const { homeIcons, homeData } = data
	return (
		<Row>
			<Heading title="Welcome to St. John Evangelist Githiga Catholic Church Self-Help Group" />

			<div className="py-1">
				<Slider />
			</div>

			<Heading title="Who are We" />
			<div className="col-sm-12 text-justify" style={{ padding: "20px" }}>
				{homeData.map((item, index) => (
					<p key={index}>
						{item}
					</p>
				))}
			</div>

			{homeIcons.map((item, index) => (
				<Col className="my-4 text-center" sm={12} md={12} lg={4} key={index}>
					<div className="py-3">
						<img src={item.icon} alt={item.title} style={{
							height: "80px"
						}} />
					</div>
					<div className="px-4">
						<h4 className="clr">{item.title}</h4>
						<p>{item.description}</p>
					</div>
				</Col>
			))}
		</Row >
	)
}

export default Home;
