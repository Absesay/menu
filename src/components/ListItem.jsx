import React from "react"
import ItemImg from "./ItemImg"
import ItemContent from "./ItemContent"

const ListItem = (props)=> {
    return(
        <div className="media text-muted pt-3">
            <ItemImg />
            <ItemContent dish={props.itemName} ingrids={props.itemIngrid} price={props.itemPrice}/>
        </div>
    )
}

export default ListItem