import React, { useEffect, useRef, useState } from 'react'
import useDrawing from '../../lib/hooks/useDrawing';
import stl from './Canvas.scss'

const DrawingField = () => {
    const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
    useDrawing(canvasRef);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.width = canvasRef.current.clientWidth;
            canvasRef.current.height = canvasRef.current.clientHeight;
        }
    }, [canvasRef])
    
    return (
        <canvas 
            id='canvas'
            className={stl.canvas} 
            ref={canvasRef}
        />
    )
}

export default DrawingField
