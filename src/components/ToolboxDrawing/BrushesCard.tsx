import stl from './ToolboxDrawing.scss';
import React, { MouseEvent, useState } from 'react';
import ToolContainer from './ToolContainer';
import ButtonTool from './ButtonTool';

import brushSVG from '../../../public/icons/tool_brush.svg';
import squareSVG from '../../../public/icons/tool_square.svg';
import circleSVG from '../../../public/icons/tool_circle.svg';
import eraserSVG from '../../../public/icons/tool_eraser.svg';

interface BrushTool {
	image: string;
	brushType: Brush;
}

const toolsArray: BrushTool[] = [
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
	const [choosenIndex, setChoosenIndex] = useState<number>(0);

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
