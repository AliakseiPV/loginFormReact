import React from 'react';
import classes from "./ErrorMessage.module.css";

function Errormessage({errorMessage}) {
    return (
        <div>
            <p className={classes.error}>
                {errorMessage}
            </p>
        </div>
    );
}

export default Errormessage;