import style from "./app.module.scss";
import { Login } from "./components/login";
import { NavBar } from "./components/navbar";
import { Darshboard } from "./components/darshboard";
import { useRoutes, useRedirect, navigate } from "hookrouter";
import { Trending } from "./components/trending";
import { Match } from "./components/match";
import { NotFound } from "./components/notFound";

const routes = {
	"/login": () => <Login />,
	"/dashboard": () => <Darshboard />,
	"/trending": () => <Trending />,
	"/watch": () => <Match />,
};

function App() {
	const id = window.localStorage.getItem("@user:id");

	const routeResults = useRoutes(routes);

	return (
		<div className="App">
			{!id
				? (useRedirect("/", "/login"), routeResults)
				: (useRedirect("/", "/dashboard"),
				  (routeResults ? <NavBar> {routeResults}</NavBar> : <NotFound />))}
		</div>
	);
}

export default App;
