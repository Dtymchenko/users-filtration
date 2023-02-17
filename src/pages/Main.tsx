import React from 'react'
import ListUsers from '../components/ListUsers/ListUsers'
import ListUsersHeader from '../components/ListUsersHeader/ListUsersHeader'
import FilterUsers from './../components/FilterUsers/FilterUsers';
import { useSelector } from 'react-redux';
import { RootState } from '../components/redux/store';
import Loading from '../components/Loading/Loading';

const Main = () => {

  const isLoading = useSelector((state:RootState) => state.main.isLoading)

  return !isLoading ? (
      <div className='main_wrapper'>
        <FilterUsers />
      <div>
        <ListUsersHeader />
        <ListUsers />
    </div>
    </div> 
  ) : <Loading />
}

export default Main
