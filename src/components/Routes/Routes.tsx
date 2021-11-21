import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import KidPage from "../../pages/KidPage";
import ParentPage from "../../pages/ParentPage";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { appRoutes } from "./consts";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path={appRoutes.basePath} exact>
        <Redirect to={appRoutes.parentPage} />
      </Route>
      <Route path={appRoutes.kidPage}>
        <KidPage />
      </Route>
      <Route path={appRoutes.parentPage}>
        <ParentPage />
      </Route>
      <Route path={appRoutes.privacyPolicy}>
        <PrivacyPolicy />
      </Route>
    </Switch>
  );
};

export default Routes;
