// Components
import { Navigation, Footer } from "./components/index";

// Pages
import { Home, Management, Products, Events, SinglePost, Contact } from "./pages/index";

// Routing
import { Routes, Route } from "react-router-dom"

import { Container } from "react-bootstrap"

const App = () => {
	return (
		<>
			<div className="py-3">
				<Navigation />
				<Container>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/management" element={<Management />} />
						<Route path="/products" element={<Products />} />
						<Route path="/event" element={<Events />} />
						<Route path="/event/:slug" element={<SinglePost />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Container>
			</div>
			<Footer />
		</>
	)
}

export default App