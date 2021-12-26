import { PayloadAction } from "@reduxjs/toolkit"
import DrawingState from "../../lib/models/reducerStates/DrawingState"

const switchBrushTool = (toolName: Brush) => {
    return {type: "SWITCH_BRUSH", payload: toolName}
}

export default switchBrushTool