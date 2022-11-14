import { Col, Row, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { PageTitle } from "../components";

import { CiBadgeDollar } from "react-icons/ci"

import data from "../data.json"

const Item = ({ product }) => {
	return (
		<Col className="my-4" sm={4}>
			<Card>
				<CardHeader className="p-3" style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
					<CiBadgeDollar fontSize={50} />
					<h4>{product.loanType}</h4>
				</CardHeader>
				<p className="p-3">{product.description}</p>
			</Card>
		</Col>
	)
}


const Products = () => {

	const { products, loanApplication } = data;

	const renderProducts = () => {
		let result = [];
		products.map((product, index) => {
			result.push(<Item key={index} product={product} />)
		})
		return result;
	};

	const renderLoanApplication = () => {
		let result = [];
		loanApplication.map((application, index) => {
			result.push(
				<ul className="m-2" key={index}>
					<li>{application}</li>
				</ul>
			)
		})
		return result;
	}

	return (
		<>
			<Row>
				<PageTitle title="Our Products" />
				{renderProducts()}
				<PageTitle title="How to Apply" />
				{renderLoanApplication()}
			</Row>
		</>
	)
}

export default Products