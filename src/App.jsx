// Components
import { Navigation } from "./components/index";

// Pages
import { Home, Management } from "./pages/index";

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
				</Routes>
			</Container>
		</>
	)
}

export default App