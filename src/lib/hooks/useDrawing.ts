import React, {  useEffect, useState } from "react"
import { useAppSelector } from "../..";
import Brush from "../modules/drawingTools/Brush";
import Circle from "../modules/drawingTools/Circle";
import Square from "../modules/drawingTools/Square";
import Tool from "../modules/drawingTools/Tool";

const useDrawing = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
    const [tool, setTool] = useState<Tool | null>(null);
    const {brush, color, size} = useAppSelector(store => store.drawing)

    useEffect(() => {
        if (brush && canvasRef) {
            toolSetter(brush)
        }
    }, [brush, canvasRef]);
    
    function toolSetter (brush: BrushTool) {
        if (canvasRef.current) {
            switch (brush) {
                case 'brush': 
                    setTool(new Brush(canvasRef.current));
                    break;
                case 'square':
                    setTool(new Square(canvasRef.current));
                    break;
                case 'circle':
                    setTool(new Circle(canvasRef.current));
                    break;
            }
        } else return
    }
}

export default useDrawing