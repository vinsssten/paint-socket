const switchBrushTool = (toolName: Brush) => {
	return { type: "SWITCH_BRUSH", payload: { brush: toolName } };
};

export default switchBrushTool;
