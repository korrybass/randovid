import React from "react";
import { Link } from 'react-router-dom'
import ItemCard from '../ItemDetail/ItemCard'
const HomeSliderCard = (props) => {
  const {image, name, id} = props
	return (
		<Link className='slide-link' to={`/item-detail?id=${id}`}>
      <ItemCard image={image} name={name} />
		</Link>
	)
}

export default HomeSliderCard