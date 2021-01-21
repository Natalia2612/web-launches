import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Launch from './Launch'
import Launches from './Launches'
import fetchResult from '../services/Fetch';
import {useEffect,useState} from 'react'
function App() {

  const [launches,setLaunches] = useState([]);
  useEffect(() => {
    fetchResult()
      .then(data => {
        //console.log(data)
        setLaunches({launches:data})
      }).catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="App">
      <header>
        <a href="/">
            <img className="spaceXLogo" src="/assets/SpaceX-Logo.svg" alt=""/>
        </a>
      </header>
      <Router>
        <div className="buttonsContainer">
            <Link to="/launch" className="linkLaunch">Count Down Upcoming</Link>
            <Link to="/launches" className="linkLaunch"> Next Launches</Link>
        </div>
         <Route exact path="/launches" render ={() => {
            return <div>
                <Launches launches={launches}/>
            </div>
          }}>
          </Route>
          <Route path="/launch" component={Launch}/>
      </Router>
    </div>
  );
}

export default App;
