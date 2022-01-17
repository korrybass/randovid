import React from "react"
import CheckBox from "../UIElements/CheckBox"
import ParamInput from './ParamInput'
import RadioInput from "../UIElements/Radio"
import { useSearchParams, useLocation } from 'react-router-dom';


const filters = ["comedy", "drama", "news", "reality"]
const sorts = ["category", "name"]



const FilterAndSorts = () => {
  const [searchParams, setSearchParams] = useSearchParams({})
  const handleFilter = (e) => {
    const { value } = e.target
    let filters = searchParams.get('category')

    if (filters !== null) {
      if (filters.includes(value)) {
        const updatedFilters = filters.split(',')
        updatedFilters.splice(updatedFilters.indexOf(value), 1)
        filters = updatedFilters.join(',')
      }
      else {
        filters = `${filters},${value}`
      }
    }
    else {
      filters = value
    }

    if (!filters.length) {
      searchParams.delete('category')
    }
    else {
      searchParams.set('category', filters)
    }
    setSearchParams(searchParams)
  }

  const handleSort = (e) => {
    const element = e.target
    searchParams.set('sort', element.value)
    setSearchParams(searchParams)
  }

  const generateCheckBoxList = (items) => {
    return items.map((item, idx) => {
      return (
        <ParamInput
          key={`filter=${idx}`}
          inputId={item}
          inputParam='category'
        >
          <CheckBox
            name={item} label={item}
            value={item}
            onChange={handleFilter}
          />
        </ParamInput>
      )
    })
  }

  const generateRadioList = (items) => {
    return items.map((item, idx) => {
      return (
        <ParamInput
          key={`filter=${idx}`}
          inputId={`sort=${idx}`}
          inputParam='sort'
        >
          <RadioInput
            key={`sort-${idx}`}
            name={"sorts"}
            id={`sort=${idx}`}
            label={item}
            value={item}
            onChange={handleSort}
          />
        </ParamInput>

      )
    })
  }

  return (
    <div className="filterAndSorts_container">
      <div>
        <p>Filter</p>
        {generateCheckBoxList(filters)}
      </div>
      <div>
        <p>Sort</p>
        {generateRadioList(sorts)}
      </div>
    </div>
  )
}

export default FilterAndSorts
