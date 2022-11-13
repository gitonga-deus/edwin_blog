// Components
import { Navigation } from "./components/index";

// Pages
import { Home, Management, Products, Events, Contact } from "./pages/index";

// Routing
import { Routes, Route } from "react-router-dom"

import { Container } from "react-bootstrap"

const App = () => {
	return (
		<>
			<Navigation />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/management" element={<Management />} />
					<Route path="/products" element={<Products />} />
					<Route path="/events" element={<Events />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Container>
		</>
	)
}

export default App