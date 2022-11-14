import { Col } from "react-bootstrap";

const PageTitle = ({ title }) => {
	return (
		<Col sm={12} className="p-4 text-center w-100 font-weight-bold">
			<h2>{title}</h2>
		</Col>
	)
}

export default PageTitle;