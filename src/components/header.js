import React from "react";

const info = {
    fname : "Ujjwal",
    lname : "Shrivas"
}

const Header = ()=>{
    return <h1>I am from Header component. Your first name is {info.fname} and your last name is {info.lname}.</h1>
}

export default Header;