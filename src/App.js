import logo from './logo.svg';
import './App.css';
import HeaderTop from ".//Components/HeaderTop"
import Bodycomponent from './/Components/Bodycomponent'
import Homes from ".//Components/Home";
import { BrowserRouter as Router, Link,NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LogninForm from './Components/LogninForm';
import SignUpForm from './Components/SignUpForm';
import FlightList from './Components/FlightList';
import BookFlight from './Components/BookFlight';
import UserDetails from './Components/UserDetails';
import BookedTicket from './Components/BookedTicket';


function App() {
  return (
    <Router>
    <div>
    <Route path="/" component={Bodycomponent} />
    <Route path="/Login" component={LogninForm} />
    <Route path="/SignUpForm" component={SignUpForm} />
    <Route path="/Flights" component={FlightList} />
    <Route path="/BookFlight" component={BookFlight}/>
    <Route path="/BookedTicket" component={BookedTicket}/>
    <Route path="/UserDetails" component={UserDetails}/>
    </div> 
    </Router>   
  );
}
export default App;
