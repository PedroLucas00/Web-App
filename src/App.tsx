import style from "./app.module.scss";
import { Login } from "./components/login";
import { NavBar } from "./components/navbar";
import { Darshboard } from "./components/darshboard";
import { useRoutes } from "hookrouter";

function App() {
	const id = window.localStorage.getItem("@user:id");

	const routes = {
    '/' :()=><Login/>,
    '/dashboard' :()=> <Darshboard/>,
   };
  const routeResults = useRoutes(routes);

	/*let navigate = useNavigate();*/

	return (
		<div className="App">
			{!id ? '' /*navigate("/login")*/ : <NavBar />}
			{routeResults||<h1>PAGE  NOT FOUND</h1>}
			{/*<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Darshboard />} />
				<Route path="/dashboard" element={<Darshboard />} />
			</Routes>*/}
		</div >
	);
}

export default App;
