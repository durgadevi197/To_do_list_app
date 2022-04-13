import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [isValid, setIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length >0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* In-line CSS */}
      {/* <div className="form-control"> */}
        {/* style={{color : isValid ? 'Black': 'Red'}}
        style={{borderColor : isValid ? 'Gray': 'Red', 
        background: isValid? 'transparent' :  'yellow'}} */}
        <div className={`form-control ${!isValid? 'invalid' : ''}`}>
        <label >Today's To-Do List!!</label>
        <input 
        type="text" 
        value={enteredValue} 
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
