import  React from 'react'

function Person(props) {
  
    return(
        <div>
           <p>{props.name}</p>
           <p>{props.age}</p>
        </div>
    );
}
export default Person;