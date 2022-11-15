import { Row, Col, Button } from "react-bootstrap";

import { PageTitle } from "../components";

import event from "../../assets/carousel_3.jpg"

const Events = () => {

	const handleClick = () => {
		alert("You clicked the button!");
	}

	return (
		<Row>
			<PageTitle title="Events" />
			<Col sm={12} className="py-4 my-2">
				<div className="img-wrapper">
					<img src={event} alt="Recent Event" className="d-block w-100 img-event" height="400px" style={{ borderRadius: "10px", objectFit: "cover" }} />
					<div className="img-overlay p-3">
						<h3 className="event-text">Lorem ipsum dolor sit amet...
							{" "}
							<a href="#">view event</a>
						</h3>
					</div>
				</div>
			</Col>
			{[1, 2, 3, 4].map((i) => {
				return (
					<Col sm={6} className="py-4 my-2">
						<div className="img-wrapper">
							<img src={event} alt="Recent Event" className="d-block w-100 img-event" height="300px" style={{ borderRadius: "10px", objectFit: "cover" }} />
							<div className="img-overlay p-3">
								<Button onClick={() => handleClick()} className="btn">View Event</Button>
							</div>
						</div>
					</Col>
				);
			})}
		</Row>
	)
}

export default Events;