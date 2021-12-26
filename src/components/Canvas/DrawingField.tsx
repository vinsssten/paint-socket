import React, { useEffect, useRef, useState } from 'react'
import Brush from '../../lib/modules/drawingTools/Brush';
import Tool from '../../lib/modules/drawingTools/Tool';
import stl from './Canvas.scss'

const DrawingField = () => {
    const canvasRef = useRef(null);
    const [tool, setTool] = useState<Tool | null>(null);

    return (
        <canvas 
            className={stl.canvas} 
            ref={canvasRef}/>
    )
}

export default DrawingField
