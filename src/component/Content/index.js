import React from "react";
import {Container} from "@mui/material";
import DataTable from "../DataTable";
import {connect} from "react-redux";

const Content = (props) => {
    const dataContent = () => {
        const m_data = props.data;
        console.log(m_data);
        if (props.sideRoute === 'win'){
            const final_data = m_data['win'];
            return (
                final_data.map((value)=>(
                    <div>Season: {value['season']} Club: {value['club']} Win: {value['win']}</div>
                ))
            )
        }else if(props.sideRoute === 'goal'){
            const final_data = m_data['goal'];
            return (
                final_data.map((value)=>(
                    <div>Season: {value['season']} Club: {value['club']} Goal: {value['goal']}</div>
                ))
            )
        }
        else if(props.sideRoute === 'shots'){
            const final_data = m_data['shots'];
            return (
                final_data.map((value)=>(
                    <div>Season: {value['season']} Club: {value['club']} Shots: {value['shots']}</div>
                ))
            )
        }else if(props.sideRoute === 'predict'){
            const final_data = m_data['team'];
            // console.log(final_data[0][1]);
            return (
                final_data.map((value)=>(
                    <div>{value}</div>
                ))
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