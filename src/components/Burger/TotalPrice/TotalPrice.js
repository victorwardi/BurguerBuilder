import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = props => {
    return (
        <div>
            <h1>Current Price: <b>${props.total.toFixed(2)}</b></h1>
        </div>
    );
};

TotalPrice.propTypes = {
    total: PropTypes.number
};

export default TotalPrice;
