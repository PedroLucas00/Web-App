import style from "./app.module.scss";
import { Login } from "./components/login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Darshboard } from "./components/darshboard";

function App() {

	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Login />}/>
					<Route path="/dashboard" element={<Darshboard />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
