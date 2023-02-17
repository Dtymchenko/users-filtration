import React from 'react'
import styles from "./FilterUsers.module.scss"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { setFilteredItems } from '../redux/slices/mainSlice';


const FilterUsers = () => {

  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.main.items)
  const filteredItems = useSelector((state: RootState) => state.main.filteredItems)
  console.log(filteredItems)
  const filterNameAZ = () => {
    const sorted = filteredItems?.sort((a,b) => {
      if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
      if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
      return 0;
    })
    console.log(sorted)
    // dispatch(setFilteredItems(sorted))
  }

  return (
    <div className={styles.wrapper}>
        Sort by: 
        <div className={styles.sort_buttons}>
        <button onClick={filterNameAZ}>
        name A-Z
        </button>
        <button>
        name Z-A
        </button>
        <br />
        <button>
        age from min to max
        </button>
        <button>
        age from max to min
        </button>
        </div>
        Filter by gender:
        <div className={styles.sort_buttons}>
        <button>
        All
        </button>
        <button>
        Male
        </button>
        <button>
        Female
        </button>
        </div>
        Filter by age:
        <div className={styles.sort_buttons}>
            <input type="radio" id='all' value="all" name="ageSort" defaultChecked />
            <label htmlFor="30+">All</label>
            <input type="radio" id='30+' value="30+" name="ageSort" />
            <label htmlFor="30+">30+</label>
            <input type="radio" id='30-' value="30-" name="ageSort" />
            <label htmlFor="30+">30-</label>
        </div>
        <button className={styles.default_btn}>
            DEFAULT
        </button>
    </div>
  )
}

export default FilterUsers
