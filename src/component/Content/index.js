import React from "react";
import {Button, Grid, List, ListItem, ListItemText} from "@mui/material";
import {Container} from "@mui/material";
import {connect} from "react-redux";
import ClubList from "./component/ClubList";
import LineChart from "./component/LineChart";
import axios from "axios";

const winScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/winScrape/"
});

const goalScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/goalScrape/"
});

const shotsScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/shotsScrape/"
});

const Content = (props) => {
    async function win_scrape() {
        const response = await winScrape.get('/');
        // console.log(response);
    }

    async function goal_scrape() {
        const response = await goalScrape.get('/');
        // console.log(response);
    }

    async function shots_scrape() {
        const response = await shotsScrape.get('/');
        // console.log(response);
    }

    const dataContent = () => {
        const m_data = props.data;
        console.log(m_data['club']);
        if (props.sideRoute === 'win'){
            if(m_data['club'].length !== 0){
                return (
                    <Grid container paddingTop={10}>
                        <Grid item xs={4} md={4}>
                            <ClubList data={m_data} type={'win'}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <LineChart type={'Win'}/>
                        </Grid>
                    </Grid>
                )
            }else {
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sx={{marginTop: 20}}>
                            <Button variant={"outlined"} onClick={()=>win_scrape()}>Win Scrape Start</Button>
                        </Grid>
                    </Grid>
                )
            }

        }else if(props.sideRoute === 'goal'){
            if(m_data['club'].length !== 0){
                return (
                    <Grid container paddingTop={10}>
                        <Grid item xs={4} md={4}>
                            <ClubList data={m_data} type={'goal'}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <LineChart type={'goal'}/>
                        </Grid>
                    </Grid>
                )
            }else {
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sx={{marginTop: 20}}>
                            <Button variant={"outlined"} onClick={()=>goal_scrape()}>Goal Scrape Start</Button>
                        </Grid>
                    </Grid>
                )
            }
        }
        else if(props.sideRoute === 'shots'){
            if(m_data['club'].length !== 0){
                return (
                    <Grid container paddingTop={10}>
                        <Grid item xs={4} md={4}>
                            <ClubList data={m_data} type={'shots'}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <LineChart type={'shots'}/>
                        </Grid>
                    </Grid>
                )
            }else {
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sx={{marginTop: 20}}>
                            <Button variant={"outlined"} onClick={()=>shots_scrape()}>Shots Scrape Start</Button>
                        </Grid>
                    </Grid>
                )
            }
        }else if(props.sideRoute === 'predict'){
            let i = 1;
            let j = 1;
            console.log(m_data)
            return(
                <Grid container>
                    {
                        m_data.map(value => (
                            <Grid item xs={3} md={3} sx={{paddingTop: 10}}>
                            <List sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper', border: 1, borderRadius: 3, borderColor: "black",}}>
                                <ListItem key={'title'} sx={{bgcolor: 'rgba(0,0,0,0.45)'}}>
                                    <ListItemText primary={(i++)+'   Tournament'}  sx={{textAlign: "center"}}/>
                                </ListItem>
                                {
                                    value.map((m_value, keys) => (
                                        <ListItem key={m_value['win']}>
                                            <ListItemText primary={keys+1+'.'} />
                                            <ListItemText primary={m_value['club'] + '  '+ m_value['win']}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            </Grid>
                        ))
                    }
                </Grid>
            )
        }
    }
    return(
        <Container>
            {dataContent()}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        sideRoute: state.sideRoute,
        data: state.data,
        clubData: state.clubData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        DisplayEvent: () => dispatch({
            type: 'regionLocation',
            payload: ''
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)