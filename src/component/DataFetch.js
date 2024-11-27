import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { userAction } from '../redux/actions/userAction';
import User from '../component/User'

function DataFetch() {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const {loading, users, error} = userList;

    useEffect(()=>{
        dispatch(userAction());
    }, [dispatch])
    return (
    <div>
      <h1>User Data Lists</h1>
      {
        loading ? <h2>Loading .....</h2> : error ? <h2>{error}</h2> : <User users={users}/>
      }
    </div>
  )
}

export default DataFetch