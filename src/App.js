import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Fisherman from './components/fisherman/fisherman';
import FishermanNavbar from './components/fisherman/fishermanNavbar';
import FishermanUpload from './components/fisherman/fishermanUpload';
import FishermanAdvice from './components/fisherman/fishermanAdvice';
import FishermanData from './components/fisherman/fishermanData';
import Government from './components/government/government';
import GovernmentFishes from './components/government/governmentFishes';
import GovernmentHarbors from './components/government/governmentHarbors';
import Weighbridge from './components/weighbridge/weighbridge';
import WeighbridgeVideo from './components/weighbridge/weighbridgeVideo';
import WeighbridgeLog from './components/weighbridge/weighbridgeLog';
import Home from './components/main/home';
import GovernmentNavbar from './components/government/governmentNavbar';
import WeighbridgeNavbar from './components/weighbridge/weighbridgeNavbar';
import { useState } from 'react';
import FishesStateWise from './components/government/fishesStateWise';
import Charts from './components/main/charts';
import FishermanEstimation from './components/fisherman/fishermanEstimation';
// class CheckUser{
//   Che
// }
const App = () => {
  
  return (
    <>
      {/* <Charts /> */}
      <Router>  
      <FishermanNavbar />
      {/* <GovernmentNavbar /> */}
      {/* <WeighbridgeNavbar /> */}
        <Route render={({location}) => (
          <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  {/* <Route path="/fisherman" exact render={props => ( <> <FishermanNavbar /> <Fisherman /> </> )} /> */}
                  <Route path="/fisherman/home"  exact component={Fisherman} />
                  <Route path="/fisherman/upload"  exact component={FishermanUpload} />
                  <Route path="/fisherman/advice"  exact component={FishermanAdvice} />
                  <Route path="/fisherman/user"  exact component={FishermanData} />
                  <Route path="/fisherman/estimations"  exact component={FishermanEstimation} />
                  {/* <Route path="/government" render={props => ( <> <GovernmentNavbar /> <Government /> </> )} /> */}
                  <Route path="/government/home"  exact component={Government} />
                  <Route path="/government/fishes"  exact component={GovernmentFishes} />
                  <Route path="/government/harbors"  exact component={GovernmentHarbors} />
                  <Route path="/government/fishes/andhrapradesh"  exact component={FishesStateWise} />
                  {/* <Route path="/weighbridge" render={props => ( <> <WeighbridgeNavbar /> <Weighbridge /> </> )}/> */}
                  <Route path="/weighbridge/home"  exact component={Weighbridge} />
                  <Route path="/weighbridge/video"  exact component={WeighbridgeVideo} />
                  <Route path="/weighbridge/log"  exact component={WeighbridgeLog} />
                </Switch> 
          </AnimatePresence> 
        )} /> 
      </Router> 
  </>
  );
}

export default App;
