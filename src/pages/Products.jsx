import { Col, Row, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { PageTitle } from "../components";

import { CiBadgeDollar } from "react-icons/ci"

const Item = ({ title }) => {
	return (
		<Col className="my-4" sm={4}>
			<Card>
				<CardHeader className="p-3" style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
					<CiBadgeDollar fontSize={50} />
					<h4>{title}</h4>
				</CardHeader>
				<p className="p-3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea?
				</p>
			</Card>
		</Col>
	)
}


const Products = () => {
	return (
		<>
			<PageTitle title="Our Products" />
			<Row>
				{["Development Loans", "Education Loans", "Emergency Loans", "Business Loans", "AgriBusiness Loan", "Church Loan"].map(
					(item, i) => (
						<Item title={item} key={i} />
					)
				)}
			</Row>
		</>
	)
}

export default Products