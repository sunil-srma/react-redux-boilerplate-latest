import React, { Component } from 'react';

const List = (props) =>{
    return(
        <ul>
            {
                props &&
                props.data &&
                props.data.length &&
                props.data.map((item, index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))
            }
        </ul>
    )
};

export default List;