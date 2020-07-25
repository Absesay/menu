import React from "react"

const ItemContent = (props) => {
    return (
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="item-name text-gray-dark">{props.dish}</strong>
          <a href="#">{props.price}</a>
          
        </div>

        <span className="d-block">{props.ingrids}</span>
        
      </div>
    )
}

export default ItemContent