import { Navbar, Container, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom"

import logo from "../../assets/logo/logo.svg";

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img src={logo} alt="Githiga SHG" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link to="/" as={NavLink}>Home</Nav.Link>
						<Nav.Link to="/management" as={NavLink}>Management</Nav.Link>
						<Nav.Link to="/event" as={NavLink}>Events</Nav.Link>
						<Nav.Link to="/products" as={NavLink}>Products</Nav.Link>
						<Nav.Link to="/contact" as={NavLink}>Contact Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
