import { Modal, Button } from "react-bootstrap";

const MembershipModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Registration Requirements
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{props.type}</h4>
				<span>
					{props.requirements}
				</span>
				<a
					href={props.form} target="_blank" rel="noopener noreferrer"
				>
					<Button>Download Registration Form</Button>
				</a>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default MembershipModal;