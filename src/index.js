//import the react and reactdom library
import React from 'react';
import ReactDOM from 'react-dom';

//create a react componet
const App = () =>{
    return <div> Hi there</div>
};

//Take the react componet and show it on the screen

ReactDOM.render(
<App />,
document.querySelector('#root')
);