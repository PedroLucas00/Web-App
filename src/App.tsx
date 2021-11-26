import  style from './app.module.scss'
import { Login } from './components/login'
import { Router, RouteComponentProps, Link} from "@reach/router";
import { DarshBoard } from './components/dashboard/indext';

function App() {

  const Home = (props: RouteComponentProps) => <DarshBoard />
  const SignIn = (props: RouteComponentProps) => <Login />

  return (
    <div>
      <Router>
        <SignIn path="/"/>
        <Home path="/dashboard"/>
      </Router>  
    </div>
  )
}

export default App
