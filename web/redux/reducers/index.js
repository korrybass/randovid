import { GET_DVD_ITEMS, FETCHING_DATA } from '../actionTypes'

const initialState = {
  listItems: [],
  isFetching: false,
  params: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DVD_ITEMS:
      return {
        ...state,
        listItems: action.listItems
      }
    case FETCHING_DATA:
      return {
        ...state,
      }
    default:
      return state
  }
}