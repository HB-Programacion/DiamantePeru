import React from "react";


const Item = ({key,tipo,color}) =>{

    return (
<>
<div className="container">
    <p>{tipo}</p>
    <p>{key}</p>
    <p>{color}</p>
</div>
</>
    )};

    export default Item
