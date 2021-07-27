import { Route, Switch } from "react-router";
import cakeStore from "../stores/cakeStore";

import CakeList from "./CakeList";
import CakeDetail from "./CakeDetail";
import Home from "./Home"

import BakeryDetail from './BakeryDetail';
import BakeryList from './BakeryList';




const Routes = () => {
    return (
        <Switch>
          <Route path="/cakes/:cakeSlug">
            <CakeDetail /> 
          </Route>

          <Route path="/cakes">
            <CakeList cakes = {cakeStore.cakes}  />
          </Route>

          {/* bakeries */}

          <Route path="/bakeries/:bakerySlug">
            <BakeryDetail/>
          </Route>

          <Route path="/bakeries">
            <BakeryList  />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    );
};

export default Routes
