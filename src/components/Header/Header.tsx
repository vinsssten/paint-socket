import React, { FC } from 'react';
import stl from './Header.scss';
import Logo from './Logo';

const Header: FC = ({}) => {
    return (
        <div className={stl.headerContainer}>
            <Logo />
        </div>
    );
};

export default Header;
