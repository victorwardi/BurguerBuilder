import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

DrawerToggle.propTypes = {
 clicked : PropTypes.func
};

export default DrawerToggle;
