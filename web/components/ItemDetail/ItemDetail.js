import React from "react"
import useDvdItem from "../../hooks/useDvdItem";
import { useSearchParams } from 'react-router-dom';
import ItemCard from './ItemCard'
import './itemdetail.scss'

const ItemDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const {image, name} = useDvdItem({id})

  return (
    <div className="item-detail-container">
      <ItemCard image={image} name={name}  />
    </div>
  )
}

export default ItemDetail
