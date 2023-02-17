import React from 'react'
import styles from './ListUserItem.module.scss'
import { Link } from "react-router-dom"
import { IItem } from '../interface'
import { useDispatch } from 'react-redux/es/exports';
import { setItemId } from '../redux/slices/mainSlice';

interface ListUserItemProps {
  item: IItem,
  index: number
}

const ListUserItem = ({item, index}: ListUserItemProps) => {

  const dispatch = useDispatch()

  const onClickLink = () => {
    dispatch(setItemId(index))
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
