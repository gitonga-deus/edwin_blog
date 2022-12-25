import { useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../assets/logo/logo.png"

import { NavLink } from "react-router-dom"

const Navigation = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<Navbar expand="lg" style={{ alignItems: "center" }} expanded={expanded}>
			<Container>
				<Navbar.Brand href="/">
					<img src={logo} alt="Githiga SHG Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded} />
				<Navbar.Collapse>
					<Nav className="navbar-fixed-top justify-content-end" style={{ width: "100%" }} onSelect={toggleExpanded}>
						<Nav.Link to="/" as={NavLink} onClick={toggleExpanded}>Home</Nav.Link>
						<Nav.Link to="/management" as={NavLink} onClick={toggleExpanded}>Management</Nav.Link>
						<Nav.Link to="/product" as={NavLink} onClick={toggleExpanded}>Products</Nav.Link>
						<Nav.Link to="/event" as={NavLink} onClick={toggleExpanded}>Events</Nav.Link>
						<Nav.Link to="/contact" as={NavLink} onClick={toggleExpanded}>Contact Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;