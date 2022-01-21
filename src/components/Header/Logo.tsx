import React, { FC } from 'react';
import stl from './Header.scss';

const Logo: FC = ({}) => {
    return (
        <div className={stl.logo}>
            <h1 className={stl.logoText}>Paint socket</h1>
        </div>
    );
};

export default Logo;
