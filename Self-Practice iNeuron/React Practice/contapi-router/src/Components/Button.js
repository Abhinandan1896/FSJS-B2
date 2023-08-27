// import React from "react";
import { useContext } from "react";
import { myContext } from "../App";


const Button=()=>{
    const data=useContext(myContext);
    return(
        <div style={{backgroundColor:data.color,width:'10%', borderWidth:"4px",borderColor:"gray",marginLeft:'20px'}}>My Favorite Color is</div>
    )
}

export default Button;