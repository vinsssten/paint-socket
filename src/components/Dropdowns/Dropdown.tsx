import React, { FC, MouseEventHandler, MutableRefObject, useRef, useState } from 'react'
import cln from 'classnames';
import stl from './Dropdowns.scss';

import MenuButton from './MenuButton';
import useOutsideClick from '../../lib/hooks/useOutsideClick';

interface Props {
    menuButtons: MenuButton[],
    isVisible: boolean,
    setIsVisible: Function
}

export interface MenuButton {
    action: MouseEventHandler<HTMLDivElement>;
    text: string
    image: string
}

const Dropdown: FC<Props> = ({children, menuButtons, isVisible, setIsVisible}) => {
	const menuRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	useOutsideClick(menuRef, closeMenu);

    function closeMenu () {
        setIsVisible(false)
    }

    return (
        <div className={stl.cont} ref={menuRef}>
            {children}
            <div className={cln(stl.menu, isVisible ? stl.visible : stl.hidden)}>
                {menuButtons.map((value, index) => 
                    <MenuButton key={index} action={value.action} image={value.image} text={value.text}/>)}
            </div>
        </div>
    )
}

export default Dropdown
