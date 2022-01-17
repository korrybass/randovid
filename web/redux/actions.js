import {
  GET_DVD_ITEMS,
  FETCHING_DATA,
  GET_ITEM,
  SET_LIST_PARAMS,
  UPDATE_DATA
} from "./actionTypes"
import {
  httpHandler,
  setRequestUrl,
  GET_TYPE,
  POST_TYPE,
} from "../utils/httpHandler"




export const updateListParams = (params) => {
  return {
    type: SET_LIST_PARAMS,
    params
  }
}

export const fetchingData = (isFetching) => {
  return {
    type: FETCHING_DATA,
    isFetching,
  }
}

export const getDvdItems = (listItems) => {
  return {
    type: GET_DVD_ITEMS,
    listItems,
  }
}

const getDvdItemsSuccess = (resp, dispatch) => {
  return dispatch(getDvdItems(resp))
}
const getDvdItemsError = (error) => {
  return { error }
}

export const handleGetDvdItems =
  (querystr = "") =>
  (dispatch, getState) => {
    const { params } = getState()
    const req = {
      url: setRequestUrl("getlist", querystr),
      type: GET_TYPE,
      onSuccess: (resp) => getDvdItemsSuccess(resp, dispatch),
      onError: (resp) => getDvdItemsError(resp),
    }
    return httpHandler(req, dispatch)
  }

export const getDvdItem = () => {
  return {
    type: GET_ITEM,
  }
}

const getDvdItemSuccess = (resp, dispatch) => {
  return dispatch(getDvdItem(resp))
}
const getDvdItemError = (error) => {
  return { error }
}

export const handleGetItem = (id) => (dispatch) => {
  const req = {
    url: setRequestUrl("getitem", id),
    type: GET_TYPE,
    onSuccess: (resp) => getDvdItemSuccess(resp, dispatch),
    onError: (resp) => getDvdItemError(resp),
  }
  return httpHandler(req, dispatch)
}


const onUpdateDataSuccess = (resp, dispatch) => {
  dispatch(getDvdItems(resp))
}
const onUpdataDataError = (error) => {
  return { error }
}

export const handleUpdateData = (item, query) => (dispatch) => {
  const req = {
    url: query ? setRequestUrl('updateData', query) : setRequestUrl('updateData'),
    type: POST_TYPE,
    body: item,
    onSuccess: (resp) => onUpdateDataSuccess(resp, dispatch),
    onError: () => onUpdataDataError(resp)
  }

  return httpHandler(req)
}
