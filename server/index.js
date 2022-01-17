const express = require("express")
const fs = require("fs")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const port = 3030

const jsonParser = bodyParser.json()
const apiBase = "/api"
const dataFilePath = path.resolve("./server/data.json")

//Mimicking writing to the database
const updateData = (data) => {
  const oldData = getDataFile()
  fs.writeFileSync(
    "./server/userData.json",
    JSON.stringify({ items: [...oldData, data] })
  )
}

const deleteDataItem = (id) => {
  const oldData = getDataFile()
  const index = oldData.findIndex((item) => {
    const itemValue = typeof item.id === 'number' ? item.id.toString() : item.id
    return itemValue === id
  })

  const newListItems = [...oldData.slice(0, index), ...oldData.slice(index + 1)]
  fs.writeFileSync(
    "./server/userData.json",
    JSON.stringify({ items: newListItems })
  )
}

//Search and sort functions
//This would normally be done on the backend with a database such MongoDB

const normalizeFilters = (obj) => {
  const output = []
  for (let prop in obj) {
    output.push({ filterKey: prop, value: obj[prop] })
  }
  return output
}

const valueFormatter = (value) => {
  if (value === "true") return true
  if (value === "false") return false
  return value
}

const filterResults = (data, filters) => {
  const { category, ...rest } = filters
  let allFilters = normalizeFilters(rest)
  if (category) {
    categoryArr = category
      .split(",")
      .map((item) => ({ filterKey: "category", value: item }))
    allFilters.push(...categoryArr)
  }
  if (!allFilters.length) return data
  return data.filter((item) =>
    allFilters.some(
      ({ filterKey, value }) => item[filterKey] === valueFormatter(value)
    )
  )
}

const sortResults = (data, sort) => {
  return data.sort((a, b) => sortCompare(a, b, sort))
}
const sortCompare = (a, b, sort) => {
  if (a[sort].toLowerCase() < b[sort].toLowerCase()) {
    return -1
  }
  if (a[sort].toLowerCase() > b[sort].toLowerCase()) {
    return 1
  }
  return 0
}

const findOne = (items, key, value) => {
  return items.find((item) => {
  const itemValue = typeof item[key] === 'number' ? item[key].toString() : item[key]
  return itemValue === value
  })
}

//Used to simulate getting a json response from the backend
//Currently just reading a static json file.
const formatDataResp = (filepath) => {
  let results = fs.readFileSync(filepath, "utf8")
  const { items } = JSON.parse(results)
  return items
}

const getDataFile = () => {
  const hasUserData = fs.existsSync("./server/userData.json")
  return hasUserData
    ? formatDataResp(path.resolve("./server/userData.json"))
    : formatDataResp(dataFilePath)
}

//Api endpoints
app.get(`${apiBase}/getlist`, (req, res) => {
  const { query } = req
  const { sort, ...filters } = query
  let results = getDataFile()
  if (filters) {
    results = filterResults(results, filters)
  }
  if (sort) {
    results = sortResults(results, sort)
  }
  return res.send(results)
})

app.get(`${apiBase}/getitem`, (req, res) => {
  const { query } = req
  const { id } = query
  const items = getDataFile()
  return res.send(findOne(items, "id", id))
})

app.post(`${apiBase}/updateData`, jsonParser, (req, res) => {
  const { body, query } = req
  const { deleteItem } = query
  if (deleteItem) {
    deleteDataItem(deleteItem)
  } else {
    updateData(body)
  }

  return res.send(getDataFile())
})

app.listen(port, () => {
  console.log("running express")
})