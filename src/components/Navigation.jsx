import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar expand="lg" style={{ paddingTop: "40px" }}>
			<Navbar.Brand href="#home">Githiga SHG</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse>
				<Nav className="justify-content-end" style={{ width: "100%" }}>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#home">Management</Nav.Link>
					<Nav.Link href="#link">Our Products</Nav.Link>
					<Nav.Link href="#link">Events</Nav.Link>
					<Nav.Link href="#link">Contact Us</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;