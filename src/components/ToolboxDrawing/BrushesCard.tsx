import stl from './ToolboxDrawing.scss';
import React, { MouseEvent, useState } from 'react';
import ToolContainer from './ToolContainer';
import ButtonTool from './ButtonTool';

import brushSVG from '../../../public/icons/tool_brush.svg';
import squareSVG from '../../../public/icons/tool_square.svg';
import circleSVG from '../../../public/icons/tool_circle.svg';

export enum Brushes {
	brush = '/public/icons/tool_brush-icon.svg',
}

const BrushesCard = () => {
	const toolsArray: string[] = [brushSVG, squareSVG, circleSVG];
	const [choosenIndex, setChoosenIndex] = useState<number>(0);

	return (
		<ToolContainer title="Brushes">
			<div className={stl.brushesCont}>
				{toolsArray.map((value, index) => (
					<ButtonTool
						image={value}
						isChoosen={choosenIndex === index}
						setChoosenIndex={setChoosenIndex}
						index={index}
						key={index}
					/>
				))}
			</div>
		</ToolContainer>
	);
};

export default BrushesCard;
