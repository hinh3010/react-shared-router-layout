import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// file
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);


function Wrapper({ children, className }) {
    return (
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    );
}


// propTypes
Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Wrapper;