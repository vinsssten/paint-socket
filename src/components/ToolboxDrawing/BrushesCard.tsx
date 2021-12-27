import stl from './ToolboxDrawing.scss';
import React, { MouseEvent, useState } from 'react';
import ToolContainer from './ToolContainer';
import ButtonTool from './ButtonTool';

import brushSVG from '../../../public/icons/Tools/tool_brush.svg';
import squareSVG from '../../../public/icons/Tools/tool_square.svg';
import circleSVG from '../../../public/icons/Tools/tool_circle.svg';
import eraserSVG from '../../../public/icons/Tools/tool_eraser.svg';

interface BrushToolImage {
	image: string;
	brushType: BrushTool;
}

const toolsArray: BrushToolImage[] = [
	{
		image: brushSVG,
		brushType: 'brush',
	},
	{
		image: squareSVG,
		brushType: 'square',
	},
	{
		image: circleSVG,
		brushType: 'circle',
	},
	{
		image: eraserSVG,
		brushType: 'eraser',
	},
];

const BrushesCard = () => {

	return (
		<ToolContainer title="Brushes">
			<>
				{toolsArray.map((value, index) => (
					<ButtonTool image={value.image} toolName={value.brushType} key={index} />
				))}
			</>
		</ToolContainer>
	);
};

export default BrushesCard;
