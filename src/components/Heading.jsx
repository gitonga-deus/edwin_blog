import { Col } from "react-bootstrap";

const Heading = ({ title }) => {
	return (
		<Col sm={12} className="py-2 w-100 text-center">
			<h2>{title}</h2>
		</Col>
	)
}

export default Heading;