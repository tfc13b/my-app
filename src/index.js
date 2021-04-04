//import the react and reactdom library
import React from 'react';
import ReactDOM from 'react-dom';



//create a react componet
const App = () =>{
    const getButtonText = {text: 'Click ME!'}
    const labelText = 'Enter Name:'
   return ( <div>
   <label htmlFor="Name" className="label">{labelText}</label>
   <input id="Name" type="text" />
   <button style={{backgroundColor:'blue', color:'white'}}>{getButtonText.text}</button>
 </div>
 );
};

//Take the react componet and show it on the screen

ReactDOM.render(
<App />,
document.querySelector('#root')
);
