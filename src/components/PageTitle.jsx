import { Col } from "react-bootstrap";

const PageTitle = ({ title }) => {
	return (
		<Col sm={12} className="p-3 m-2 text-center w-100">
			<h2>{title}</h2>
		</Col>
	)
}

export default PageTitle;