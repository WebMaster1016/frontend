import React from "react";
import {Container} from "@mui/material";
import DataTable from "../DataTable";

const Content = (props) => {
    return(
        <Container>
            <DataTable data={props.data}/>
        </Container>
    )
}

export default Content