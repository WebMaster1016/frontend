import React from "react";
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import { FixedSizeList } from 'react-window';
import axios from "axios";
import {connect} from "react-redux";

let clubArrayData = [];
let type = '';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/club"
});

function renderRow(props) {
    async function getPost(club) {
        console.log(club);
        const response = await client.get('/',{
            params: {
                type: type,
                club: club
            }
        });
        // console.log(response);
        console.log(response);
    }
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div">
            <ListItemButton>
                <ListItemText primary={clubArrayData[index]['club']} onClick={()=>(getPost(clubArrayData[index]['club']))}/>
            </ListItemButton>
        </ListItem>
    );
}
const ClubList = (props) => {
    const data = props.data;
    const itemCount = data['club'].length;
    type = props.type;
    clubArrayData = data['club'];
    return (
        <Box
            sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={800}
                itemSize={46}
                itemCount={itemCount}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
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