import { FC } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div data-testid="app.testid">
      <h1 className={classes.text} data-testid="header.testid">
        ADMIN
      </h1>
      <Outlet />
    </div>
  );
};
