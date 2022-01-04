import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../..';
import { useDispatch } from 'react-redux';

import CanvasHistory from '../../../lib/modules/Canvas/CanvasHistory';

import ButtonToolbox from './ButtonToolbox';
import ToolContainer from '../ToolContainer';

import clearSVG from '../../../../public/icons/Tools/edit_clear.svg';
import undoSVG from '../../../../public/icons/Tools/edit_undo.svg';
import redoSVG from '../../../../public/icons/Tools/edit_redo.svg';
import SaveDropdown from '../../Dropdowns/SaveDropdown';

const EditCard = () => {
	const { canvas, curHistoryIndex, history } = useAppSelector(store => store.drawing);
	const [canvasHistory, setCanvasHistory] = useState<CanvasHistory | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (canvas) {
			setCanvasHistory(new CanvasHistory(canvas))
		}
	}, [canvas])

	function canvasClear() {
		canvasHistory?.canvasClear()
	}

	function undoHistory() {
		canvasHistory?.undoHistory();
	}

	function redoHistory() {
		canvasHistory?.redoHistory();
	}

	return (
		<ToolContainer title="Edit">
			<>
				<ButtonToolbox action={canvasClear} image={clearSVG} toolName="clear" />
				<ButtonToolbox action={undoHistory} image={undoSVG} toolName="undo" />
				<ButtonToolbox action={redoHistory} image={redoSVG} toolName="redo" />
				<SaveDropdown />
			</>
		</ToolContainer>
	);
};

export default EditCard;
