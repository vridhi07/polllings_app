import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/login';
import Register from './Components/register';
import Admindashboard from './Components/admindashboard';
import Guestdashboard from './Components/guestdashboard';
import Userlist from './Components/userlist';
import Addpoll from './Components/addpoll';
import Editpoll from './Components/editpoll';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/"   exact  component={Login} />
      <Route path="/register"  exact component={Register} />
      <Route path = "/admindashboard" component={Admindashboard} />
      <Route path = "/guestdashboard" component={Guestdashboard} />
      <Route path = "/userlist" component={Userlist} />
      <Route path ="/addpoll" component={Addpoll} />
      <Route path = "/editpoll/:id" component={Editpoll} />
    </Switch>
  </Router>
  );
}

export default App;
