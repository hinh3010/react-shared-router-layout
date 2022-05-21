import React, { useState } from 'react';
import { forwardRef } from 'react';

import images from '~/assets/images'
import styles from './Image.module.scss';
import classNames from 'classnames';

// dùng forwardRef và param ref giúp cho thư viện tippy hiểu đc thẻ img qua cpn Image
const Image = ({
    src, alt, className,
    fallback: customFallback = images.avatar,
    // đổi tên fallback thành customFallback và giá trị mặc định = images.avatar
    ...props
}, ref
) => {

    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        <img
            className={classNames(styles.warpper, className)}
            ref={ref} src={fallback || src}
            alt={alt}{...props}
            onError={handleError}
        />
    );

}

export default forwardRef(Image);