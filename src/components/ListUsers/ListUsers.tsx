import React from 'react'
import styles from './ListUsers.module.scss'
import ListUserItem from '../ListUsersItem/ListUserItem'
import {useSelector} from 'react-redux'
import { RootState } from '../redux/store';
import { IItem } from './../interface';

const ListUsers = () => {

  const items = useSelector((state:RootState) => state.main.items)
  console.log(items)
  return (
    <ul className={styles.items_list}>
      {items.map((item: IItem) => {
        return (
          <ListUserItem key={item.id} item={item}/>
        )
      })}      
    </ul>
    
  )
}

export default ListUsers
