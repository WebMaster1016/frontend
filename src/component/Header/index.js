import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";

const Header = () => {
  return(
      <AppBar position={'relative'}>
          <Toolbar>
              <Typography variant="title" color="inherit" component={"h2"}>
                  League Premier Predict
              </Typography>
          </Toolbar>
      </AppBar>
  )
}

export default Header