import React from "react";
import {Container} from "@mui/material";
import DataTable from "../DataTable";
import {connect} from "react-redux";

const Content = (props) => {
    const dataContent = () => {
        console.log(props.data)
        if (props.sideRoute === 'win'){
            return <DataTable data={props.data}/>
        }else{
            return <div> </div>
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
        data: state.data
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