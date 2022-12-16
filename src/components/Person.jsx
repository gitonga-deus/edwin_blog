import { Col, Row, Button, } from "react-bootstrap";

const Person = ({ name, rank, phoneNumber, emailAddress, imgUrl, bio }) => {
	return (
		<Row className="py-4 text-center">
			<Col className="py-2" lg={4} md={6} sm={6}>
				<span>
					<img src={imgUrl} alt={name}
						className="img-thumbnail"
						style={{
							objectFit: "cover",
							backgroundPosition: "center",
							height: "300px",
							width: "240px"
						}}
					/>
				</span>
				<div className="py-2 my-1">
					<h5>{name}</h5>
					<p>{rank}</p>
					<Button>More</Button>
				</div>
			</Col>
		</Row>
	)
}

export default Person;