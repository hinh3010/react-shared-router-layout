import PropTypes from 'prop-types';
import React from 'react';
//
import './GlobalStyles.scss'

function GlobalStyles({ children }) {
    // return children
    return React.Children.only(children) // chỉ nhận 1 children
}

// prototype
GlobalStyles.prototype = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;