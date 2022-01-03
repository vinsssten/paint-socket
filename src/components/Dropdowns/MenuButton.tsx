import React, { FC, MouseEventHandler } from 'react'
import stl from './Dropdowns.scss'

interface Props {
    image: string
    action: MouseEventHandler<HTMLDivElement>
    text: string
}

const MenuButton: FC<Props> = ({image, text, action}) => {

    return (
        <div className={stl.menuBtn} onClick={action}>
            <img src={image}></img>
            <p>{text}</p>
        </div>
    )
}

export default MenuButton
