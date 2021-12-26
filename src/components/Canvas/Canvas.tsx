import React from 'react'
import stl from './Canvas.scss'
import DrawingField from './DrawingField'

const Canvas = () => {
    return (
        <div className={stl.mainCont}>
            <div className={stl.cont}>
                <DrawingField />
            </div>
        </div>
    )
}

export default Canvas
