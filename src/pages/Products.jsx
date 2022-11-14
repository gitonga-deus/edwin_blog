import { Col, Row, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { PageTitle } from "../components";

const ProductItem = ({ title }) => {
	return (

		<Col sm={4} style={{ paddingBottom: "20px" }}>
			<Card>
				<CardHeader className="p-3" style={{ backgroundColor: "#661111", color: "#fff" }}>
					<h4>{title}</h4>
				</CardHeader>
				<p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea?</p>
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
						<ProductItem title={item} key={i} />
					)
				)}
			</Row>
		</>
	)
}

export default Products