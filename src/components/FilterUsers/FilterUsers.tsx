import React from 'react'
import styles from "./FilterUsers.module.scss"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { setFilteredItems } from '../redux/slices/mainSlice';
import { IItem } from './../interface';


const FilterUsers = () => {

  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.main.items)
  const filteredItems = useSelector((state: RootState) => state.main.filteredItems)
  let clone:IItem[] = Object.assign([], filteredItems)

  const filterNameAZ = () => {
    
    dispatch(setFilteredItems(clone.sort((a,b) => {
      if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
      if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
      return 0;
    })))
  }

  const filterNameZA = () => {
    
    dispatch(setFilteredItems(clone.sort((a,b) => {
      if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return 1;
      if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return -1;
      return 0;
    })))
  }

  const sortAgeMinToMax = () => {
    dispatch(setFilteredItems(clone.sort((a,b) => {
      if(a.age < b.age) return -1;
      if(a.age > b.age) return 1;
      return 0;
    })))
  }

  const sortAgeMaxToMin = () => {
    dispatch(setFilteredItems(clone.sort((a,b) => {
      if(a.age < b.age) return 1;
      if(a.age > b.age) return -1;
      return 0;
    })))
  }

  const filterGenderAll = () => {
    dispatch(setFilteredItems(items))
  }

  const filterGenderMale = () => {
    dispatch(setFilteredItems(items.filter((el) => {return el.gender.toLowerCase() === "male"})))
}

  const filterGenderFemale = () => {
    dispatch(setFilteredItems(items.filter((el) => {return el.gender.toLowerCase() === "female"})))
  }

  const filterAgeAll = () => {
    dispatch(setFilteredItems(items))
  }

  const filterAgeOlder = () => {
    dispatch(setFilteredItems(items.filter((el) => {return el.age >=30})))
}

const filterAgeYounger = () => {
  dispatch(setFilteredItems(items.filter((el) => {return el.age <=30})))
}

  const setDefault = () => {
    dispatch(setFilteredItems(items))
  }

  return (
    <div className={styles.wrapper}>
        Sort by: 
        <div className={styles.sort_buttons}>
        <button onClick={filterNameAZ}>
        name A-Z
        </button>
        <button onClick={filterNameZA}>
        name Z-A
        </button>
        <br />
        <button onClick={sortAgeMinToMax}>
        age from min to max
        </button>
        <button onClick={sortAgeMaxToMin}>
        age from max to min
        </button>
        </div>
        Filter by gender:
        <div className={styles.sort_buttons}>
        <button onClick={filterGenderAll}>
        All
        </button>
        <button onClick={filterGenderMale}>
        Male
        </button>
        <button onClick={filterGenderFemale}>
        Female
        </button>
        </div>
        Filter by age:
        <div className={styles.sort_buttons}>
            <input type="radio" id='all' value="all" name="ageSort" defaultChecked onClick={filterAgeAll}/>
            <label htmlFor="30+">All</label>
            <input type="radio" id='30+' value="30+" name="ageSort" onClick={filterAgeOlder}/>
            <label htmlFor="30+">30+</label>
            <input type="radio" id='30-' value="30-" name="ageSort" onClick={filterAgeYounger}/>
            <label htmlFor="30+">30-</label>
        </div>
        <button className={styles.default_btn} onClick={setDefault}>
            DEFAULT
        </button>
    </div>
  )
}

export default FilterUsers
