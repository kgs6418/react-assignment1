import React from 'react';

function List(props){
    return(
        <div>
            <p>{props.items[0]}</p>
            <p>{props.items[1]}</p>
            <p>{props.items[2]}</p>
        </div>
    )
}
export default List;