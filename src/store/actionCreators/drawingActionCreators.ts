export const sizeChange = (size: number) => {
	return { type: 'CHANGE_SIZE', payload: { size: size } };
};

export const switchBrushTool = (toolName: BrushTool) => {
	return { type: "SWITCH_BRUSH", payload: { brush: toolName } };
};

export const changeColor = (color: string) => {
    return { type: 'CHANGE_COLOR', payload: {color: color} }
}

export const setCurCanvas = (canvas: HTMLCanvasElement | null) => {
	return { type: 'SET_CANVAS', payload: {canvas: canvas} }
}
