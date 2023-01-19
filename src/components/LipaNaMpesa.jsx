import { Modal, Button } from "react-bootstrap";

import arrowDown from "../../assets/product/arrow-down.svg"

const LipaNaMpesa = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.name} - Lipa Na M-PESA
				</Modal.Title>
			</Modal.Header>
			
			<Modal.Body className="text-center">
				<div>
					<h5>Lipa Na M-PESA</h5>
					<img src={arrowDown} height="30px" />
				</div>
				<div>
					<p>Paybill Business Number: {props.paybill}</p>
					<img src={arrowDown} height="30px" />
				</div>
				<div>
					<p>Account Number: {props.account}</p>
					<img src={arrowDown} height="30px" />
				</div>
				<div>
					<p>Enter Amount</p>
					<img src={arrowDown} height="30px" />
				</div>
				<div>
					<p>Enter M-PESA Pin</p>
					<img src={arrowDown} height="30px" />
				</div>
				<h5>
					Confirm Details and Send
				</h5>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default LipaNaMpesa;