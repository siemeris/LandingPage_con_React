import React from 'react';

//componente a exportar
const Card = () => {
  return (<div className="card">
  <img src="https://picsum.photos/200" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
 </div>);
// return (<div class="card">
// <div class="card-header">
//   Featured<img src="https://picsum.photos/20" className="card-img-top" alt="..."></img>
// </div>
// <div class="card-body">
//   <h5 class="card-title">Special title treatment</h5>
//   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>)
};

//exportando el componente deseado
export default Card;