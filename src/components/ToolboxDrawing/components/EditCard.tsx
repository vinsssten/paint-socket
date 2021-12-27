import React from 'react'
import stl from '../ToolboxDrawing.scss'

import clearSVG from '../../../../public/icons/Tools/edit_clear.svg'
import ToolContainer from '../ToolContainer'

const EditCard = () => {
    return (
        <ToolContainer title='Edit'>
            <div className={stl.button}>
                <img className={stl.image} src={clearSVG} width={35} height={35} />
            </div>
        </ToolContainer>
    )
}

export default EditCard
