import React, {  useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../..";
import { setCurCanvas } from "../../store/actionCreators/drawingActionCreators";
import Brush from "../modules/drawingTools/Brush";
import Circle from "../modules/drawingTools/Circle";
import Eraser from "../modules/drawingTools/Eraser";
import Square from "../modules/drawingTools/Square";
import Tool from "../modules/drawingTools/Tool";

//TODO: Изменить способ установки дефолтных настроек кисти

const useDrawing = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
    const [tool, setTool] = useState<Tool | null>(null);
    const {brush, color, size} = useAppSelector(store => store.drawing);
    const dispatch = useDispatch();

    useEffect(() => {
        if (brush && canvasRef) {
            toolSetter(brush);
            dispatch(setCurCanvas(canvasRef.current))
        }
    }, [brush, canvasRef]);

    useEffect(() => {
        if (tool) {
            tool.setColor = color;
            tool.setSize = size; 
        }
    }, [tool, color, size])

    useEffect(() => {
        if (brush && tool) {
            tool!.setDefaultSettings()
        }
    }, [brush, tool])
    
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
                case 'eraser':
                    setTool(new Eraser(canvasRef.current));
            }
        } else return
    }
}

export default useDrawing