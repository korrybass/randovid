import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleGetItem } from "../redux/actions"
import { queryObectToString } from "../utils"

const useDvdItem = (query = {}) => {
  const [dvdItem, setDvdItem] = useState({})
  const queryString = queryObectToString(query)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleGetItem(queryString)).then((item) => {
      setDvdItem(item)
    })
  }, [])

  return dvdItem
}

export default useDvdItem
