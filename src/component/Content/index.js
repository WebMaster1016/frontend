import React from "react";
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import {connect} from "react-redux";
import ClubList from "./component/ClubList";
import LineChart from "./component/LineChart";

const Content = (props) => {
    const dataContent = () => {
        const m_data = props.data;
        console.log(m_data);
        if (props.sideRoute === 'win'){
            const final_data = m_data;
            return (
                <Grid container paddingTop={10}>
                    <Grid item xs={4} md={4}>
                        <ClubList data={final_data} type={'win'}/>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <LineChart />
                    </Grid>
                </Grid>
            )
        }else if(props.sideRoute === 'goal'){
            const final_data = m_data['goal'];
            return (
                <ClubList data={m_data} type={'goal'}/>
            )
        }
        else if(props.sideRoute === 'shots'){
            return (
                <ClubList data={m_data} type={'shots'}/>
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