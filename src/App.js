import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
function App() {
  return (
    <div className="App">
      <Router>
<Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
</Switch>
      </Router>
    </div>
  );
}

export default App;
