import React, { FC } from 'react';
import stl from './Header.scss';
import Logo from './Logo';

const Header: FC = ({}) => {
    return (
        <header className={stl.headerContainer}>
            <Logo />
        </header>
    );
};

export default Header;
