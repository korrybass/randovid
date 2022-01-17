import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetDvdItems } from '../redux/actions'
import { queryObectToString } from '../utils';
import { useSearchParams } from 'react-router-dom';

const useDvdData = (query = {}) => {

  const { listItems } = useSelector((state) => state)
  const queryString = queryObectToString(query)
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    dispatch(handleGetDvdItems(queryString)).then(() => {
      setHasFetched(true)
    })
  }, [searchParams]);

  return {listItems, hasFetched};
}

export default useDvdData

