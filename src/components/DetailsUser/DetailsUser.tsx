import React from 'react'
import styles from './DetailsUser.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import Loading from './../Loading/Loading';

const DetailsUser = () => {
    
  const itemId = useSelector((state: RootState) => state.main.itemId)
    const items = useSelector((state:RootState) => state.main.items); 
    const detailItem = items[itemId]
    // {detailItem ? console.log("yes") : console.log('No')}
    return detailItem ? (
      
      <div>
        <div className={styles.wrapper} >
          <div className={styles.header}>
                    <Link to={'/'}>Return to main page</Link>
                    <h2>{detailItem.firstName} {detailItem.lastName}</h2>
                  </div>
                  
                  <div className={styles.body}>
                    <div className={styles.img}>
                      <img src={detailItem.image}></img>
                    </div>
                    <div className={styles.text}>
                      <div>
                        <p>Age: {detailItem.age}</p>
                        <p>Gender: {detailItem.gender}</p>
                        <p>Email: {detailItem.email}</p>
                        <p>Phone: {detailItem.phone}</p>
                        <p>Username: {detailItem.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  ) : <Loading />
}

export default DetailsUser
