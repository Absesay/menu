import React from "react"
import ReactDom from "react-dom"
import ListItem from "./components/ListItem"

ReactDom.render(
  <div className="menuCard">
    <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded shadow-sm">
      <h6 className="border-bottom border-gray pb-2 mb-0">Top Menu</h6>
        <ListItem />
      </div>
    </main>

  </div>, document.getElementById("root"))