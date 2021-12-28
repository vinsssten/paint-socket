export const sizeChange = (size: number) => {
	return { type: 'CHANGE_SIZE', payload: { size: size } };
};

export const switchBrushTool = (toolName: BrushTool) => {
	return { type: 'SWITCH_BRUSH', payload: { brush: toolName } };
};

export const changeColor = (color: string) => {
	return { type: 'CHANGE_COLOR', payload: { color: color } };
};

export const setCurCanvas = (canvas: HTMLCanvasElement | null) => {
	return { type: 'SET_CANVAS', payload: { canvas: canvas } };
};

export const saveDataInHistory = (data: string) => {
	return { type: 'HISTORY_ADD', payload: { data: data } }
}

export const undoHistoryAction = () => {
	return {type: 'HISTORY_UNDO'}
}

export const redoHistoryAction = () => {
	return {type: 'HISTORY_REDO'}
}
