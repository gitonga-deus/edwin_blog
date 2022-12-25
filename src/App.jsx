// Components
import { Navigation, Footer } from "./components/index";

// Pages
import { Home, Management, Products, Events, SingleEvent, Contact } from "./pages/index";

// Routing
import { Routes, Route } from "react-router-dom"

import { Container } from "react-bootstrap"

const App = () => {
	return (
		<main>
			<div className="py-3 page-container">
				<Navigation />
				<Container>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/management" element={<Management />} />
						<Route path="/product" element={<Products />} />
						{/* <Route path="/event" element={<Events />} />
						<Route path="/event/:slug" element={<SingleEvent />} /> */}
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Container>
			</div>
			<Footer />
		</main>
	)
}

export default App