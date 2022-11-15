import { Col } from "react-bootstrap";

const PageTitle = ({ title }) => {
	return (
		<Col sm={12} className="p-1 text-left w-100 text-uppercase" style={{
			marginLeft: "5px"
		}}>
			<h2>{title}</h2>
		</Col>
	)
}

export default PageTitle;