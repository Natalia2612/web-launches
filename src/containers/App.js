import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Launch from './Launch'
import Launches from './Launches'
import {useEffect,useState} from 'react'
import {fetchResult1,fetchResult2} from '../services/Fetch';
function App() {
  const [launches,setLaunches] = useState([]);
  const [launch,setLaunch] = useState({});
  useEffect(() => {
    fetchResult1()
      .then(data => {
        setLaunches([...data])
      }).catch((err) => {
        console.log(err);
      });

      fetchResult2()
      .then(data => {
        setLaunch({...data})
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
          <Route path="/launch" render ={() => {
            return <div>
                <Launch launch={launch}/>
            </div>
          }}>
          </Route>
      </Router>
    </div>
  );
}

export default App;
