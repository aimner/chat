import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../nav";

import classes from "./Wrapper.module.scss";


export const Wrapper = () => {
  return (
    <div className={classes.app}>
      <Nav />
      <Outlet />
    </div>
  );
};
