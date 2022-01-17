import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import ListItem from "./ListItem";
import useDvdData from "../../hooks/useDvdData";
import FilterAndSorts from '../FilterAndSorts/FilterAndSorts'
import './dvdlist.scss'
import Modal from "../Modal/Modal";
import AdminForm from "./AdminForm";
import { useDispatch } from "react-redux";
import { handleUpdateData } from "../../redux/actions";

const getFormattedDataQuery = (sort, category) => {
  const output = {}
  if (sort !== null) {
    output.sort = sort
  }
  if (category !== null) {
    output.category = category
  }
  return output
}


const AdminControls = (props) => {
  return (
    <div className="admin-control-panel">
      <button className='add-btn' onClick={props.onClick}>+ Add DVD</button>
    </div>
  )
}

const DVDList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category')
  const sort = searchParams.get('sort')
  const isAdmin = searchParams.get('isadmin')
  const {listItems, hasFetched} = useDvdData(getFormattedDataQuery(sort, category))
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const generateItemList = (items) => {
    return items.map((item, idx) => (
      <div key={`dvd-${idx}`} className='list-item-container'>
        {isAdmin && <button className='delete-btn' onClick={() => {adminDeleteDvd(item)}}>&times; Delete</button>}
        <ListItem  {...item} />
      </div>
    ))
  }
  

  const adminAddDvd = () => {
    setShowModal(true)
  }

  const adminDeleteDvd = (item) => {
    dispatch(handleUpdateData(item, `deleteItem=${item.id}`))
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="list_container">
      <div className="filter_sorts">
        <FilterAndSorts />
      </div>
      <div className="list-content">
        {isAdmin && <AdminControls onClick={adminAddDvd} />}
        <div className="listItems">
          {hasFetched && listItems.length === 0 && <p>There are no items with the current filter selections</p>}
          {!!listItems.length  && generateItemList(listItems)}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={handleClose}
        title={'Add New DVD'}
      >
        <AdminForm onFinish={handleClose}/>
      </Modal>
    </div>
  )
}

export default DVDList