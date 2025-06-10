import React from "react";

const Feedback=({name,options})=>{
    return(
        <button onClick={name}>{options}</button>
    )
}
export default Feedback