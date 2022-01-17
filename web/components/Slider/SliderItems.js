import React, { Fragment } from "react";

const generateItems = (items, ItemComponent) => {
  return items.map((item, idx) => {
    return <ItemComponent key={`dvd-${idx}`} {...item} />
  })
}

const SliderItems = (props) => {
  console.log({props})
  const {items, ItemComponent} = props
	return (
		<Fragment>
      {generateItems(items, ItemComponent)}
		</Fragment>
	)
}

export default SliderItems