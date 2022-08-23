import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Fisherman from "./components/fisherman/fisherman";
import FishermanNavbar from "./components/fisherman/fishermanNavbar";
import FishermanUpload from "./components/fisherman/fishermanUpload";
import FishermanAdvice from "./components/fisherman/fishermanAdvice";
import FishermanData from "./components/fisherman/fishermanData";
import Government from "./components/government/government";
import GovernmentFishes from "./components/government/governmentFishes";
import GovernmentHarbors from "./components/government/governmentHarbors";
import Weighbridge from "./components/weighbridge/weighbridge";
import WeighbridgeUpload from "./components/weighbridge/weighbridgeUpload";
import WeighbridgeLog from "./components/weighbridge/weighbridgeLog";
import Home from "./components/main/home";
import GovernmentNavbar from "./components/government/governmentNavbar";
import WeighbridgeNavbar from "./components/weighbridge/weighbridgeNavbar";
import { useState } from "react";
import FishesStateWise from "./components/government/fishesStateWise";
import Charts from "./components/main/charts";
import FishermanEstimation from "./components/fisherman/fishermanEstimation";
import HomeNavbar from "./components/main/homeNavbar";
import homePage from "./components/main/homePage";
import About from "./components/main/about";
import FishermanLogin from "./components/main/fishermanLogin";
import govtLogin from "./components/main/governmentLogin";
import wbLogin from "./components/main/weighBridgeLogin";
import FishermanRegister from "./components/main/fishermanRegister";

const App = () => {
  const [navbar,setNavbar] = useState(0);
  return (
    <>
      <Router>
        {/* <HomeNavbar /> */}
        {/* <FishermanNavbar /> */}
        {/* <GovernmentNavbar /> */}
        {/* <WeighbridgeNavbar /> */}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/fisherman" exact render={props => ( <> <FishermanNavbar /> <Fisherman /> <FishermanAdvice/></> )} /> */}
                <Route path="/" exact component={homePage} />
                <Route path="/about" exact component={About} />
                <Route path="/fisherman/home" exact component={Fisherman} />
                <Route path="/home/fisherman/login" exact component={FishermanLogin} />
                <Route path="/home/fisherman/Register" exact component={FishermanRegister} />
                <Route path="/home/government/login" exact component={govtLogin} />
                <Route path="/home/weighbridge/login" exact component={wbLogin} />
                <Route path="/fisherman/upload" exact component={FishermanUpload} />
                <Route path="/fisherman/advice" exact component={FishermanAdvice} />
                <Route path="/fisherman/user" exact component={FishermanData} />
                <Route path="/fisherman/estimations" exact component={FishermanEstimation} />
                {/* <Route path="/government" render={props => ( <> <GovernmentNavbar /> <Government /> </> )} /> */}
                <Route path="/government/home" exact component={Government} />
                <Route path="/government/fishes" exact component={GovernmentFishes} />
                <Route path="/government/harbors" exact component={GovernmentHarbors} />
                <Route path="/government/fishes/andhrapradesh" exact component={FishesStateWise} />
                {/* <Route path="/weighbridge" render={props => ( <> <WeighbridgeNavbar /> <Weighbridge /> </> )}/> */}
                <Route path="/weighbridge/home" exact component={Weighbridge} />
                <Route path="/weighbridge/upload" exact component={WeighbridgeUpload} />
                <Route path="/weighbridge/log" exact component={WeighbridgeLog} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </>
  );
};

export default App;
