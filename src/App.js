import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Features from './features/Features';
import Screenshoots from './screenshoots/Screenshoots';
import News from './news/News';
import Grab from './grab/Grab';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
<Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route exact path="/home">
<Home></Home>
</Route>
<Route exact path="/features">
<Features></Features>
<Footer></Footer>
</Route>
<Route exact path="/screenshots">
<Screenshoots></Screenshoots>
<Footer></Footer>
</Route>
<Route exact path="/news">
<News></News>
<Footer></Footer>
</Route>
<Route exact path="/download">
<Grab></Grab>
<Footer></Footer>
</Route>
</Switch>
      </Router>
    </div>
  );
}

export default App;
