import { FC } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div data-testid="app.testid">
      <h1 className={classes.text} data-testid="header.testid">
        HOST
      </h1>
      <Link to={adminRoutes.about}>ABOUT</Link>
      <br />
      <Link to={shopRoutes.main}>SHOP</Link>
      <br />
      <Link to={shopRoutes.primary}>PRIMARY</Link>
      <br />
      <Outlet />
    </div>
  );
};
