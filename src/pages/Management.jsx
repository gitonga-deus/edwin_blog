import { Row } from "react-bootstrap";

import hero from "../../assets/carousel_1.jpg";

const Person = () => {
	return (
		<div className="person col-sm-3">
			<img
				src="https://via.placeholder.com/200"
				alt="person"
				className="img-fluid"
			/>
			<h4 className="person__name">John Doe</h4>
			<p className="person__title">CEO</p>
		</div>
	);
}

const Management = () => {
	return (
		<Row className="text-center">
			<h2 style={{ fontSize: "40px", paddingBottom: "5px" }}>
				Management and Staff
			</h2>
			<div className="team-photo py-4">
				<img
					className="d-block w-100"
					src={hero}
					style={{ borderRadius: "10px", objectFit: "cover" }}
					height="450px"
					alt="First slide"
				/>
			</div>
			<h2 style={{ fontSize: "40px", paddingBottom: "5px" }}>
				Meet the Team
			</h2>
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
			
		</Row>
	);
};

export default Management;