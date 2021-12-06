import logo from './logo.svg';
import './App.css';
import './assets/css/main.css'
import React, {useState} from "react";
import Header from "./component/Header";
import {Grid} from "@mui/material";
import SideBar from "./component/SideBar";
import {ThemeProvider, createTheme} from "@mui/material";
import Content from "./component/Content";

const theme = createTheme({
    palette: {

    }
})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <Grid container>
                    <Grid item xs={2} md={2}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <Content/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
