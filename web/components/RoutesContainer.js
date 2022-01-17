import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DVDList from './DVDList/DVDList';
import Home from './Home/Home'
import ItemDetail from './ItemDetail/ItemDetail'
import '../scss/global.scss'

const RoutesContainer = () => (
  <div className='page-container'>
      <Routes>
        <Route path="/" index element={ <Home />} />
        <Route path="dvds" element={ <DVDList />} />
        <Route path="item-detail" element={<ItemDetail/>} />
      </Routes>
  </div>
);

export default RoutesContainer
