import React from "react";


const Item = ({nro,tipo,color}) =>{

    return (
<>
<div className="col-12 col-sm-4  mb-2">
    
<div class="card" key={nro}>
      <div class="card-body">
        <h5 class="card-title text-center p-2">{nro}</h5>
        <p class="card-text">{color}</p>
        <a href="#" class="btn btn-primary">{tipo}</a>
      </div>
    </div>

</div>
</>
    )};

    export default Item
