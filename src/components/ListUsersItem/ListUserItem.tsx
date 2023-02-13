import React from 'react'
import styles from './ListUserItem.module.scss'
import { Link } from "react-router-dom"
import { IItem } from '../interface'
import { useDispatch } from 'react-redux/es/exports';
import { setFilteredItems } from '../redux/slices/mainSlice';

interface ListUserItemProps {
  item: IItem
}

const ListUserItem = ({item}: ListUserItemProps) => {

  const dispatch = useDispatch()

  const onClickLink = () => {
    dispatch(setFilteredItems(item.id))
  }


  return (
    <li className={styles.list_user_item} onClick={onClickLink}>
      <Link to={'/detail'}>
        <p>{item.id}</p>
        <p>{item.firstName} {item.lastName}</p>
        <p>
        <img src={item.image} width={50}></img>
        </p>
        
        <p>{item.age}</p>
      </Link>
      
    </li>
  )
}

export default ListUserItem
