import React from 'react';
import classes from "./InputLabel.module.css";

function InputLabel({htmlForName, labelText}) {
    return (
        <label
            className={classes.login__lable}
            htmlFor={htmlForName}>{labelText}
        </label>
    );
}

export default InputLabel;