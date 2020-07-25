import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
  <div className="menuCard">
    <main role="main" className="container">
    <div className="my-3 p-3 bg-white rounded shadow-sm">

    <h6 className="border-bottom border-gray pb-2 mb-0">Top Menu</h6>

  
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="item-name text-gray-dark">Fried Egg</strong>
          <a href="#">$268</a>
        </div>

        <span className="d-block">Eggs, Sandwich</span>
        
      </div>
    </div>
   
   
  </div>
</main>

  </div>, document.getElementById("root"))