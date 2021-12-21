
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MenuAbout from './MenuAbout'
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/About"component={MenuAbout}/>
          <Route path="/Contact"component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}
 



export default App;
