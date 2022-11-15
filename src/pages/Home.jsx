import { Row, Col, Card } from "react-bootstrap"

import { CarouselItem, PageTitle } from "../components";

import CardHeader from "react-bootstrap/esm/CardHeader";

import { SlRocket } from "react-icons/sl"

const Item = ({ title }) => {
	return (
		<Col className="my-4" sm={4}>
			<Card>
				<CardHeader style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
					{/* <SlRocket fontSize={40} /> */}
					<h5 className="py-2 text-uppercase">{title}</h5>
				</CardHeader>
				<p className="p-3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea?
				</p>
			</Card>
		</Col>
	)
}

const Home = () => {
	return (
		<Row>
			<PageTitle title="Welcome to Githiga Self Help Group" />

			<div className="py-4">
				<CarouselItem />
			</div>

			<PageTitle title="Who are We" />
			<div className="col-sm-12" style={{ paddingTop: "20px" }}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.
					Sed faucibus sagittis mi fermentum ante iaculis arcu mollis ullamcorper. Ut eu ornare dui. Phasellus justo purus, porttitor.
				</p>
				<p>
					Phasellus justo purus, porttitor.Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.
				</p>
			</div>
			<Item title="Mission" />
			<Item title="Vision" />
			<Item title="Values" />
		</Row >
	)
}

export default Home;
