import './App.css';
import Routes from './Routing/Routes'
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Footer from './components/footer';

function App() {


  return (
    <Router>
      <Switch>

        <Route exact path="/" component={LandingPage} />

        {/* if the route is anyother than the landing:
        Forwarding it to the Routes Component which consists of
        all page routes with a switch */}
        <Route component={Routes} />

      </Switch>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;

