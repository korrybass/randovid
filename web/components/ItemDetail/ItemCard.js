import React, {Fragment} from "react"

const ItemDetail = (props) => {
  const {image, name} = props
  const picture = image || 'https://via.placeholder.com/852x1136.png?text=placeholder+image'
  return (
    <Fragment>
      <img src={picture}/>
      <p>{name}</p>
    </Fragment>
  )
}

export default ItemDetail
