import React from 'react'
import styles from './ListUsers.module.scss'
import ListUserItem from '../ListUsersItem/ListUserItem'
import {useSelector} from 'react-redux'
import { RootState } from '../redux/store';
import { IItem } from './../interface';

const ListUsers = () => {

  const filteredItems = useSelector((state:RootState) => state.main.filteredItems)
  
  return (
    <ul className={styles.items_list}>
      {filteredItems?.map((item: IItem, index: number) => {
        return (
          <ListUserItem key={item.id} index={index} item={item}/>
        )
      })}      
    </ul>
    
  )
}

export default ListUsers
