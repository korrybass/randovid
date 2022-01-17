import React from "react";
import { Link } from 'react-router-dom'

const ListItem = ({ name, category, image, id }) => {
  const picture = image || 'https://via.placeholder.com/852x1136.png?text=placeholder+image'
  return (
    <Link className='list_item' to={`/item-detail?id=${id}`}>
      <img src={picture} />
      <p>{name}</p>
      <p className="category">Category: {category}</p>
    </Link>
  )
}

export default ListItem