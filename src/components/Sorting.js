import React, { useState } from 'react'
import Tableo from '../Tableo.json';
export default function Sorting() {
    const [data, setData] = useState(Tableo);
    const [order, setOrder] = useState('ASC');
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) => a[col].toLowerCase() >
                b[col].toLowerCase() ? 1 : -1);

            setData(sorted);
            setOrder('DSC');
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) => a[col].toLowerCase() <
                b[col].toLowerCase() ? 1 : 1);

            setData(sorted);
            setOrder('ASC');
        };
    };
    return ( <
        div className = "table table-bordered" > < table > < thead > <
        th onClick = {
            () => sorting(
                "person.name")
        } > Name < /th> <
        th onClick = {
            () => sorting(
                "joiningDate")
        } > JOININGDate < /th>  <
        th > Role < /th> < /
        thead >
        <
        tbody >

        {
            data.map((dat) => {
                return ( <
                    tr key = { dat.id } >
                    <
                    td > { dat.person.name } < /td> <
                    td > { dat.joiningDate } < /td> <
                    td > { dat.role } < /td> < /
                    tr > );


            })
        } < /
        tbody > < /table > < /div >
    );
}