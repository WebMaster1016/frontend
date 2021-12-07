import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const dataColumn = [{field: 'id', headerName: 'ID', width: 10},{field: 'club', headerName: 'Club', width:150}];

const insertColumn = (data) => {
    const myData = data.year;
    for(let year in myData){
        dataColumn.push({field: myData[year]['season'], headerName: myData[year]['season'], width: 90});
    }
    console.log(data['club']);
}

var dataRow = [];

const insertRow = (data) => {
    dataRow = [];
    const keycode = Object.keys(data);
    // const rowData = data[keycode[0]];
    const rowData = data['club'];
    const year = data['year'];
    console.log("Total:");
    console.log(rowData);
    for(let row in rowData){
       // console.log("row::" + [rowData[row]]);
        const m_data = {id: row, club: rowData[row]['club'], [rowData[row]]: 'data'};
        for(let myYear in year){
            m_data[year[myYear]] = 0;
        }
       // console.log(m_data);
        dataRow.push(m_data);
    }
}

const DataTable = (props) => {
    const tableData = props.data;
    // console.log(tableData)
    insertColumn(tableData);
    insertRow(tableData);
    return (
        <DataGrid
            rows={dataRow}
            columns={dataColumn}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection

        />
    );
}

export default DataTable;