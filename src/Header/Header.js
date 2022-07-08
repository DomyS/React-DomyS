import React from "react";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid /* Typography */ } from "@material-ui/core";
// import logo from "./logo1.png";
// import "./Header.css";

/* const useStyles = makeStyles(() =>
  createStyles({
    
  })
); */

const Header = () => {
  // const classes = useStyles();
  return (
    <Grid
      container
      // xs={8}
      justifyContent="center"
      // className={classes.container}
    >
      I am here
    </Grid>
  );
};

export default Header;
