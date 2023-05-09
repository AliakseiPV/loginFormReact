import React from 'react';
import classes from "./MyButton.module.css";

function MyButton({buttonText}) {
    return (
        <div>
            <button className={classes.login__button}>
                {buttonText}
            </button>
        </div>
    );
}

export default MyButton;