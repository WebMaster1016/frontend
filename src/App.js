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
    const [dataP, setDataP] = useState('');
    const childToParent = (childData) => {
        setDataP(childData.data);
    }
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <Grid container>
                    <Grid item xs={2} md={2}>
                        <SideBar childToParent={childToParent}/>
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <Content data={dataP}/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
