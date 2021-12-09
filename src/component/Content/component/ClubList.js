import React, {useState} from "react";
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import { FixedSizeList } from 'react-window';
import axios from "axios";
import {connect} from "react-redux";

let clubArrayData = {
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
};
let type = '';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/club"
});

const graphDrawData = (m_data,type) => {

    if (m_data.length !== 0){
        let graphData = [];
        // m_data.map((data) => graphData.push({color: "hsl(11, 70%, 50%)", x: data['season'], y: data['win']}));
        m_data.map((data)=>graphData.push({color: "hsl(11, 70%, 50%)", x: data['season'], y: data[type]}));
        return graphData;
    }else{
        return '';
    }
}


const ClubList = (props) => {
    const data = props.data;
    type = props.type;
    clubArrayData = data['club'];
    async function getPost(club) {
        const response = await client.get('/',{
            params: {
                type: type,
                club: club
            }
        });
        // console.log(graphDrawData(response['data']['clubdata']));
        const final_data = [{
            id: 'win',
            color: "hsl(300, 70%, 50%)",
            data: graphDrawData(response['data']['clubdata'], type)
        }]
        console.log(final_data);
        props.getClubData(response['data']['club'], final_data);
    }
    return (
        <Box
            sx={{ width: '100%', height: 500, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {clubArrayData.map(value => (
                <ListItem component="div" key={value}>
                    <ListItemButton onClick={()=>(getPost(value['club']))}>
                        <ListItemText primary={value['club']}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </Box>
    );
}



const mapStateToProps = state => {
    return {
        sideRoute: state.sideRoute
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getClubData: (club, data) => dispatch({type: 'getClubData', payload: {recentClub: club, recentClubData: data}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubList);