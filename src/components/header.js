import React from "react";

// Declaring variable that will can be accessed later
const info = {
    fname : "Ujjwal",
    lname : "Shrivas"
}


// Using ES5 method, i.e without using class
// const Header = ()=>{
//     return (
//     <div>
//     <h1>I am from Header component. </h1>
//     <p>Your first name is {info.fname} and your last name is {info.lname}.</p>
//     </div>
//     )
// }


// Using ES6 method, i.e using class
class Header  extends React.Component{
    render(){
        return(
            <div>
            <h1>I am from Header component. </h1>
            <p>Your first name is {info.fname} and your last name is {info.lname}.</p>
            </div>
        )
    }
}
export default Header;