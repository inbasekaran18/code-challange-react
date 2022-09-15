import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {RouterLinkConst} from  '../constants/routesLink';
import NotFoundPage from '../pages/NotFoundPage'
import Planet from '../pages/Planets'
import PlanetInfo from '../pages/PlanetInfo'
import Films from '../pages/Flims'  
import Residents from '../pages/Residents'



const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={RouterLinkConst.home}
            component={Planet}
          />
          <Route
            exact
            path={RouterLinkConst.planetInfo}
            component={PlanetInfo}
          />
          <Route exact path={RouterLinkConst.films} component={Films} />
          <Route exact path={RouterLinkConst.residents} component={Residents} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
};

export default Router;
