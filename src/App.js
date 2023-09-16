import  React from 'react'
import Person from './components/Person.js';
import Button from './components/Button.js';
import Header from './components/Header.js';
import List from './components/List.js';


function App() {
//question 1 --> props.
  const name="gaurav"
  const age="25"

//question 2 --> props.
  const text="Hello I am Button"
  const onClick=function onClick() {
    alert('BUTTON CLICKED')
  }

  //question 3 --> props.
  const title="My Title"

  //question 4 --> props.
  // const items="Pen,Pencil,Book"    //YOU CAN USE THIS OR THE BELOW ONE
  const items=["Pen","Pencil","Book"]

  return(
    <div>
      <Person name={name} age={age}/>
      <Button text={text} onClick={onClick}/>
      <Header title={title}/>
      <List items={items}/>

    </div>

  );
}
export default App;