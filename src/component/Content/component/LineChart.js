import React from "react";
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
    return(
        <Box sx={{bgcolor: 'background.paper', width: '100%', height: '100%'}}>
            <Box>
                <Typography variant={'h4'} component={'h2'}>
                    {props.club}
                </Typography>
            </Box>
            <Line
                width={600}
                height={400}
                data={sampleData}
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

const sampleData = [
    {
        "id": "whisky",
        "color": "hsl(300, 70%, 50%)",
        "data": [
            {
                "color": "hsl(19, 70%, 50%)",
                "x": "ZW",
                "y": 19
            },
            {
                "color": "hsl(11, 70%, 50%)",
                "x": "AT",
                "y": 20
            },
            {
                "color": "hsl(286, 70%, 50%)",
                "x": "DZ",
                "y": 48
            },
            {
                "color": "hsl(5, 70%, 50%)",
                "x": "IE",
                "y": 21
            },
            {
                "color": "hsl(204, 70%, 50%)",
                "x": "MT",
                "y": 53
            },
            {
                "color": "hsl(80, 70%, 50%)",
                "x": "BF",
                "y": 1
            },
            {
                "color": "hsl(317, 70%, 50%)",
                "x": "FI",
                "y": 5
            },
            {
                "color": "hsl(241, 70%, 50%)",
                "x": "SE",
                "y": 48
            },
            {
                "color": "hsl(339, 70%, 50%)",
                "x": "AZ",
                "y": 10
            }
        ]
    }
]

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