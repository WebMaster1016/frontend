import React, {useState} from "react";
import {Box, createTheme, Typography} from "@mui/material";
import {Line} from '@nivo/line';
import {connect} from "react-redux";

const theme = {
    axis: {
        textColor: '#eee',
        fontSize: '14px',
        tickColor: '#eee',
    },
    grid: {
        stroke: '#888',
        strokeWidth: 1
    },
};

const LineChart = (props) => {
    console.log(props.clubData);
    return(
        <Box sx={{bgcolor: 'background.paper', width: '100%', height: '100%'}}>
            <Box>
                <Typography variant={'h4'} component={'h2'}>
                    {props.club} ({props.type})
                </Typography>
            </Box>
            <Line
                width={800}
                height={400}
                data={props.clubData}
                margin={{
                    top: 10,
                    right: 10,
                    bottom: 60,
                    left: 60
                }}
                theme={theme}
            />
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        club: state.recentClub,
        clubData: state.recentClubData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getClubData: (club, data) => dispatch({type: 'getClubData', payload: {recentClub: club, recentClubData: data}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart)