import React, { Fragment } from "react"
import Slider from "react-slick/lib/slider"
import SliderItems from "../Slider/SliderItems"
import HomeSliderCard from "./HomeSliderCard"
import useDvdData from "../../hooks/useDvdData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./home.scss"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const generateSliderItems = (items) => {
  return items.map((item, idx) => {
    return <HomeSliderCard key={`dvd-${idx}`} {...item} />
  })
}

const Home = () => {
  const {listItems} = useDvdData({ featured: true })
  return (
    <div className="home-container">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="slider_container">
        <Slider {...settings}>{generateSliderItems(listItems)}</Slider>
      </div>
    </div>
  )
}

export default Home
