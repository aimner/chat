import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../nav";

import classes from "./Wrapper.module.scss";
import { useTheme } from "../../hooks";


export const Wrapper = () => {

  const {setDarkTheme} = useTheme() 

  return (
    <div className={classes.app}>
      <Nav />
      <Outlet />
    </div>
  );
};
