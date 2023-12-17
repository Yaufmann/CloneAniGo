import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/homePage";
import {AUTH_ROUTER, HOME_ROUTER, LIST_PAGE_ROUTER} from "../utils/constant";
import AniListPage from "../pages/AniListPage";
import Authpage from "../pages/Authpage";

const AppRouter = () => {
    return (
        <Routes>
          <Route
              exact={true}
              path={HOME_ROUTER}
              element={<HomePage/>}
          />
          <Route
              exact={true}
              path={LIST_PAGE_ROUTER}
              element={<AniListPage/>}
          />
          <Route
              exact={true}
              path={AUTH_ROUTER}
              element={<Authpage/>}
          />
        </Routes>
    );
};

export default AppRouter;