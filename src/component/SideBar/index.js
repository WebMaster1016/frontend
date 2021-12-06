import * as React from 'react';
import {List, ListItem, ListItemText} from "@mui/material";
import {ListItemButton} from "@mui/material";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import axios from "axios";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/scrapeStart/"
});

const winScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/winScrape/"
});

const goalScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/goalScrape/"
});

const shotsScrape = axios.create({
    baseURL: "http://127.0.0.1:8000/shotsScrape/"
});

const winView = axios.create({
    baseURL: "http://127.0.0.1:8000/winView/"
});

const goalView = axios.create({
    baseURL: "http://127.0.0.1:8000/goalView/"
});

const shotsView = axios.create({
    baseURL: "http://127.0.0.1:8000/shotsView/"
});

const SideBar = ({childToParent}) => {

    const [post, setPost] = React.useState(null);
    async function getPost() {
        const response = await client.get('/');
        // console.log(response);
        setPost(response);
    }

    async function win_scrape() {
        const response = await winView.get('/');
        // console.log(response);
        childToParent({win: response});
        setPost(response);
    }

    async function goal_scrape() {
        const response = await goalView.get('/');
        // console.log(response);
        childToParent({goal: response});
        setPost(response);
    }

    async function shots_scrape() {
        const response = await shotsView.get('/');
        // console.log(response);
        childToParent({shots: response});
        setPost(response);
        console.log(response)
    }

    async function win_view(){
        const response = await winView.get('/');
        childToParent(response);
        setPost(response);
    }

    async function goal_view(){
        const response = await goalView.get('/');
        childToParent(response);
        setPost(response);
    }

    async function shots_view(){
        const response = await shotsView.get('/');
        childToParent(response);
        setPost(response);
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => getPost()}>
                            <ListItemText primary="Scrape Start" sx={{textAlign: "center"}} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => win_view()}>
                            <ListItemText primary="Win" sx={{textAlign: "center"}} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => goal_view()}>
                            <ListItemText primary="Goal" sx={{textAlign: "center"}} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => shots_view()}>
                            <ListItemText primary="Shots" sx={{textAlign: "center"}} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Predict" sx={{textAlign: 'center'}} />
                            </ListItemButton>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
        </Box>
    );
}

export default SideBar