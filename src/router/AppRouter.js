import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/homePage";
import {HOME_ROUTER, LIST_PAGE_ROUTER} from "../utils/constant";
import AniListPage from "../pages/AniListPage";

const AppRouter = () => {
    return (
        <Routes>
          <Route
              exact={true}
              path={LIST_PAGE_ROUTER}
              element={<AniListPage/>}
          />
          <Route
              exact={true}
              path={HOME_ROUTER}
              element={<HomePage/>}
          />
        </Routes>
    );
};

export default AppRouter;