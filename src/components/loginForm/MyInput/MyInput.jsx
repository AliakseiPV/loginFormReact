import React from 'react';
import classes from "./MyInput.module.css";

function MyInput({onChangeHandler, typeInput, nameInput, valueInput}) {
    return (
        <input
            value={valueInput}
            className={classes.login__input}
            onChange={onChangeHandler}
            type={typeInput}
            name={nameInput}
            required={true}
        />
    );
}

export default MyInput;