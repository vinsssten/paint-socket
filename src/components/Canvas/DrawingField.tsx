import React, { useEffect, useRef, useState } from 'react'
import useDrawing from '../../lib/hooks/useDrawing';
import stl from './Canvas.scss'

const DrawingField = () => {
    const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
    useDrawing(canvasRef);
    
    return (
        <canvas 
            className={stl.canvas} 
            ref={canvasRef}
        />
    )
}

export default DrawingField
