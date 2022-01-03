import React, { FC, useState } from 'react'
import ButtonToolbox from '../ToolboxDrawing/components/ButtonToolbox'
import cln from 'classnames'
import stl from './Dropdowns.scss'
import MenuButton from './MenuButton'

import localSVG from '../../../public/icons/Tools/edit-save_local.svg'
import cloudSVG from '../../../public/icons/Tools/edit-save_cloud.svg'

interface Props {
    image: string
}

const SaveDropdown: FC<Props> = ({image}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function handleClick () {
        setIsVisible(!isVisible)
    }

    return (
        <div className={stl.cont}
            onClick={handleClick}>
            <ButtonToolbox action={() => {}} image={image} toolName='save'/>
            <div 
                className={cln(stl.menu, isVisible ? stl.visible : stl.hidden)}
                >
                <MenuButton image={localSVG} text="Local" action={() => {}} />
                <MenuButton image={cloudSVG} text="Cloud" action={() => {}} />
            </div>
        </div>
    )
}

export default SaveDropdown
