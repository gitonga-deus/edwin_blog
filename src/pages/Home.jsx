import { Row } from "react-bootstrap"

import { CarouselItem } from "../components";

const Home = () => {
	return (
		<Row className="py-4">
			<h2 style={{ fontSize: "40px" }}>Welcome to Githiga Self Help Group</h2>

			<CarouselItem />
			<div className="col-sm-12" style={{ paddingTop: "40px" }}>
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.
				</p>
				<p>
					Sed faucibus sagittis mi fermentum ante iaculis arcu mollis ullamcorper. Ut eu ornare dui. Phasellus justo purus, porttitor. Phasellus justo purus, porttitor.
				</p>
				<p>

					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum ante eu mi dapibus dignissim. Pellentesque nec mi malesuada, dignissim lectus sed, finibus lorem.
				</p>
			</div>
			<div className="col-sm-4">
				<img src="" alt="" />
				<h2>Mission</h2>
				<p>
					Ut eu ornare dui.
					Phasellus justo purus, porttitor
				</p>
			</div>
			<div className="col-sm-4">
				<img src="" alt="" />
				<h2>Vision</h2>
				<p>
					Ut eu ornare dui.
					Phasellus justo purus, porttitor
				</p>
			</div>
			<div className="col-sm-4">
				<img src="" alt="" />
				<h2>Values</h2>
				<p>
					Ut eu ornare dui.
					Phasellus justo purus, porttitor
				</p>
			</div>
		</Row >
	)
}

export default Home;