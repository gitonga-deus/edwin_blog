import { Col, Row, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { PageTitle } from "../components";

import { CiBadgeDollar } from "react-icons/ci"

import data from "../data.json"

import img from "../../assets/loan.svg"
import mode from "../../assets/channel.svg"

const Products = () => {

	const { products, paymentChannels } = data;

	const renderProducts = () => {
		let result = [];
		products.map((product, i) => {
			result.push(
				<Col sm={6} md={6} lg={4} key={i}>
					<div className="p-1 my-2 text-center">
						<Card className="shadow" style={{
							height: "250px"
						}}>
							<CardHeader className="p-3 text-center" style={{ backgroundColor: "#661111", color: "#fff" }}>
								<img src={img} alt={`${product.loanType} Loan`} height="50px" className="m-1" />
								<h4>{product.loanType}</h4>
							</CardHeader>
							<p className="p-3">{product.description}</p>
						</Card>
					</div>
				</Col >
			)
		})
		return result;
	};

	const renderPaymentChannel = () => {
		let result = [];
		paymentChannels.map((channel, idx) => {
			result.push(
				<Col className="my-4 text-center" sm={6} md={6} lg={3} key={idx}>
					<Card className="shadow" style={{
						height: "auto"
					}}>
						<CardHeader className="p-3" style={{ backgroundColor: "#661111", color: "#fff", textAlign: "center" }}>
							<img src={mode} alt={`${channel.name}`} height="50px" className="m-1" />
							<h4>{channel.name}</h4>
						</CardHeader>
						<div className="p-3">
							<p>A/C Name: {channel.accountName}</p>
							<p>A/C No: {channel.accountNumber}</p>
						</div>
					</Card>
				</Col>
			)
		});
		return result;
	}

	return (
		<Row>
			<PageTitle title="Loan Products" />
			<p className="text-center">
				<strong>NOTE:</strong>
				Members are entitled to different loans but will limited to only one type of loan product at any given time.
			</p>
			{renderProducts()}
			<PageTitle title="Payment Channels" />
			{renderPaymentChannel()}
		</Row>
	)
}

export default Products