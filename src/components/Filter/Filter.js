import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/toolkit/actions/contactsActions";
import styles from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  
  const inputHandler = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};


export default Filter;
