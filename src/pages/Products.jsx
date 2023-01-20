import { useState } from "react";

// React Bootstrap
import { Col, Row, Card, Button } from "react-bootstrap";

// Components
import { Heading, MembershipModal, LipaNaMpesa } from "../components";

// Utilities Functions
import useDocumentTitle from "../utilities/useDocumentTitle";

// Products Data
import data from "../utilities/data";

const Products = () => {
	useDocumentTitle("Products - Githiga SHG")

	// Membership Modal
	const [membershipModalShow, setMembershipModalShow] = useState(false);
	const [membershipData, setMembershipData] = useState([]);

	// Payment Modal
	const [paymentModalShow, setPaymentModalShow] = useState(false);
	const [paymentData, setPaymentData] = useState([]);

	// Destructure Data
	const { loanProducts, membershipProducts, paymentChannel } = data;

	const handleMembershipModal = (type, requirements, form) => {
		let membershipData = [type, requirements, form];

		setMembershipData(item => [1, ...membershipData]);

		return setMembershipModalShow(true)
	}

	const handleMpesa = (name, paybill, account) => {
		let paymentData = [name, paybill, account];

		setPaymentData(item => [1, ...paymentData]);

		return setPaymentModalShow(true)
	}

	const renderLoan = () => {
		let result = [];
		loanProducts.map((loan, index) => {
			result.push(
				<Col sm={12} md={12} lg={4} key={index} className="my-2 p-3 text-center">
					<Card className="shadow" style={{
						height: "280px"
					}}>
						<div className="p-3 text-center" >
							<img src={loan.icon} alt={`${loan.loanType}`} height="60px" className="m-1" />
						</div>
						<h4 className="clr">{loan.loanType}</h4>
						<p className="p-2">{loan.description}</p>
					</Card>
				</Col >
			);
		});

		return result;
	};

	const renderMembership = () => {
		let result = [];
		membershipProducts.map((membership, index) => {
			result.push(
				<Col sm={12} md={12} lg={4} key={index} className="my-2 p-3 text-center">
					<Card className="shadow" style={{
						height: "345px"
					}}>
						<div className="p-3 text-center">
							<img src={membership.icon} alt={`${membership.type}`} height="65px" className="m-1" />
						</div>
						<h4 className="clr">{membership.type}</h4>
						<p className="p-2">{membership.description}</p>
						<div>
							<Button
								onClick={() => handleMembershipModal(membership.type, membership.requirements.map((
									item, index
								) => (
									<ul key={index}>
										<li>{item}</li>
									</ul>
								)), membership.form)}
							>
								Register Account
							</Button>
						</div>
					</Card>
				</Col >
			)
		});

		return result;
	}

	const renderPaymentChannel = () => {
		let result = [];
		paymentChannel.map((channel, index) => {
			result.push(
				<Col className="my-2 p-3 text-center" sm={12} md={12} lg={4} key={index}>
					<Card className="shadow" style={{
						height: "200px"
					}}>
						<div className="p-3">
							<img src={channel.icon} alt={`${channel.name}`} height="60px" className="m-1" />
						</div>
						<h4 className="clr">{channel.name}</h4>
						<div>
							<Button onClick={() => handleMpesa(channel.name, channel.account, channel.paybill)}>
								View Payment Process
							</Button>
						</div>
					</Card>
				</Col>
			)
		});
		return result;
	}

	return (
		<Row>
			<MembershipModal
				show={membershipModalShow}
				onHide={() => setMembershipModalShow(false)}
				type={membershipData[1]}
				requirements={membershipData[2]}
				form={membershipData[3]}
			/>

			<LipaNaMpesa
				show={paymentModalShow}
				onHide={() => setPaymentModalShow(false)}
				name={paymentData[1]}
				account={paymentData[2]}
				paybill={paymentData[3]}
			/>

			<Heading title="Membership" />
			<div className="text-center">
				<p>
					It's a requirement to be a legitimate member to qualify for loan products and
					other privileges of the self-help group.
				</p>

			</div>
			{renderMembership()}
			<Heading title="Loan Products" />
			{renderLoan()}
			<Heading title="Payment Channels" />
			{renderPaymentChannel()}
		</Row>
	)
}

export default Products;