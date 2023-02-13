import React from 'react'
import styles from './DetailsUser.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const DetailsUser = () => {
    
    const filteredItems = useSelector((state:RootState) => state.main.filteredItems); 
    
    return (
    <div>
      {filteredItems?.map((item) => {
        return (
                <div className={styles.wrapper} key={item.id}>
                  <div className={styles.header}>
                    <Link to={'/'}>Return to main page</Link>
                    <h2>{item.firstName} {item.lastName}</h2>
                  </div>
                  
                  <div className={styles.body}>
                    <div className={styles.img}>
                      <img src={item.image}></img>
                    </div>
                    <div className={styles.text}>
                      <div>
                        <p>Age: {item.age}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Username: {item.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
            )
      })}
    </div>
  )
}

export default DetailsUser
