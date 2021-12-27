import React from 'react';
import { useAppSelector } from '../../..';

import ButtonToolbox from './ButtonToolbox';
import ToolContainer from '../ToolContainer';

import clearSVG from '../../../../public/icons/Tools/edit_clear.svg';
import undoSVG from '../../../../public/icons/Tools/edit_undo.svg';
import redoSVG from '../../../../public/icons/Tools/edit_redo.svg';
import saveSVG from '../../../../public/icons/Tools/edit_save.svg';

const EditCard = () => {
	const canvas = useAppSelector(store => store.drawing.canvas);

	function canvasClear() {
		const msg = 'Are you sure you want to clear the canvas, all changes will be lost?';
		if (canvas) {
			if (confirm(msg)) {
				const context = canvas
					.getContext('2d')
					?.clearRect(0, 0, canvas.width, canvas.height);
			}
		}
	}

	function undoHistory() {}

	function redoHistory() {}

	return (
		<ToolContainer title="Edit">
			<>
				<ButtonToolbox action={canvasClear} image={clearSVG} toolName="clear" />
				<ButtonToolbox action={undoHistory} image={undoSVG} toolName="undo" />
				<ButtonToolbox action={redoHistory} image={redoSVG} toolName="redo" />
				<ButtonToolbox action={redoHistory} image={saveSVG} toolName="redo" />
			</>
		</ToolContainer>
	);
};

export default EditCard;
