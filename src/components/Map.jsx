import { Col } from "react-bootstrap";

const Map = () => {
	return (
		<Col sm={7} lg={7} md={7} className="map">
			<div className="gmap_canvas">
				<iframe
					width="100%"
					height="510px"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=St%20John%20Catholic%20Church,%20Riara%20Ridge&t=&z=13&ie=UTF8&iwloc=&output=embed"
				>

				</iframe>
				<a href="https://123movies-to.org"></a>
			</div>
		</Col>
	);
};

export default Map;
