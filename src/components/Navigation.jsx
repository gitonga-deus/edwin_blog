import { Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom"

const Navigation = () => {
	return (
		<Navbar expand="lg" style={{ paddingTop: "30px" }}>
			<Container>
				<Navbar.Brand href="#home">Githiga SHG</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link to="/" as={NavLink}>Home</Nav.Link>
						<Nav.Link to="/management" as={NavLink}>Management</Nav.Link>
						<Nav.Link to="/products" as={NavLink}>Products</Nav.Link>
						<Nav.Link to="/events" as={NavLink}>Events</Nav.Link>
						<Nav.Link to="/contact" as={NavLink}>Contact Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;