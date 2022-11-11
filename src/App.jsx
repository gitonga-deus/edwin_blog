import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import { Container, Row } from "react-bootstrap"

const App = () => {
	return (
		<>
			<Container>
				<Navigation />
			</Container>
			<Footer />
		</>
	)
}

export default App