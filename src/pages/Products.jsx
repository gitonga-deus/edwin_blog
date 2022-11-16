import { Col, Row, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { PageTitle } from "../components";

import { CiBadgeDollar } from "react-icons/ci"

import data from "../data.json"

const Item = ({ product }) => {
	return (
		<Col className="my-4" sm={4}>
			<Card style={{
				height: "auto"
			}}>
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

	const { products, loanApplication, paymentChannels } = data;

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
				<Col sm={12}>
					<ul key={index}>
						<li style={{ marginLeft: "5px" }} >{application}</li>
					</ul>
				</Col>
			)
		})
		return result;
	};

	const renderPaymentChannel = () => {
		let result = [];
		paymentChannels.map((channel, index) => {
			result.push(
				<Col className="my-4" sm={3}>
					<Card style={{
						height: "auto"
					}}>
						<CardHeader className="p-3" style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
							<CiBadgeDollar fontSize={50} />
							<h4>{channel.name}</h4>
						</CardHeader>
						<div className="p-3">
							<p>A/C Name: {channel.accountName}</p>
							<p>A/C No: {channel.accountNumber}</p>
							<span>Branch: {channel.branch}</span>
						</div>
					</Card>
				</Col>
			)
		});
		return result;
	}

	return (
		<>
			<Row>
				<PageTitle title="Our Products" />
				<p className="text-center"> <strong>NOTE:</strong> Members are entitled to different loans but will limited to only one type of loan product at any given time.</p>
				{renderProducts()}
				<PageTitle title="How to Apply" />
				{renderLoanApplication()}
				<PageTitle title="Payment Channels" />
				{renderPaymentChannel()}
			</Row>
		</>
	)
}

export default Products