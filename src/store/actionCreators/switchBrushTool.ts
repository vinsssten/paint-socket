const switchBrushTool = (toolName: Brush) => {
	return { payload: { brush: toolName }, type: '' };
};

export default switchBrushTool;
