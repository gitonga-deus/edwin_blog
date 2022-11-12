// Components
import { Navigation } from "./components/index";

// Pages
import { Home, Management } from "./pages/index";

import { Container } from "react-bootstrap"

const App = () => {
	return (
		<>
			<Container>
				<Navigation />
				<Home />
			</Container>
		</>
	)
}

export default App