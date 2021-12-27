import React from 'react'
import stl from '../ToolboxDrawing.scss'

import ToolContainer from '../ToolContainer'
import Tool from '../../../lib/modules/drawingTools/Tool'
import { useAppSelector } from '../../..'

import clearSVG from '../../../../public/icons/Tools/edit_clear.svg'

const EditCard = () => {
    const canvas = useAppSelector(store => store.drawing.canvas);

    function canvasClear () {
        const msg = 'Are you sure you want to clear the canvas, all changes will be lost?'
        if (canvas) {
            if (confirm(msg)) {
                const context = canvas.getContext('2d')?.clearRect(0, 0,
                    canvas.width, canvas.height)    
            }
        }
    }

    return (
        <ToolContainer title='Edit'>
            <div 
                className={stl.button}
                onClick={canvasClear}
                >
                <img className={stl.image} src={clearSVG} width={35} height={35} />
            </div>
        </ToolContainer>
    )
}

export default EditCard
