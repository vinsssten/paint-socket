import React from 'react';
import { useAppSelector } from '../../..';
import { useDispatch } from 'react-redux';
import { clearCanvas, redoHistoryAction, undoHistoryAction } from '../../../store/actionCreators/drawingActionCreators';

import ButtonToolbox from './ButtonToolbox';
import ToolContainer from '../ToolContainer';

import clearSVG from '../../../../public/icons/Tools/edit_clear.svg';
import undoSVG from '../../../../public/icons/Tools/edit_undo.svg';
import redoSVG from '../../../../public/icons/Tools/edit_redo.svg';
import saveSVG from '../../../../public/icons/Tools/edit_save.svg';

const EditCard = () => {
	const {canvas, curHistoryIndex, history} = useAppSelector(store => store.drawing);
	const dispatch = useDispatch();

	function canvasClear() {
		const msg = 'Are you sure you want to clear the canvas, all changes will be lost?';
		if (canvas) {
			if (confirm(msg)) {
				dispatch(clearCanvas());
			}
		}
	}

	function undoHistory() {
		if (curHistoryIndex > 0) {
			dispatch(undoHistoryAction());
		}
	}

	function redoHistory() {
		if (curHistoryIndex < history.length - 1) {
			dispatch(redoHistoryAction());
		}
	}

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
