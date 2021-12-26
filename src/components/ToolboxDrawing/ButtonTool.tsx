import React, { Dispatch, FC, SetStateAction } from 'react';
import stl from './ToolboxDrawing.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../..';
import { switchBrushTool } from '../../store/actionCreators/drawingActionCreators';

interface Props {
	image: string;
	toolName: BrushTool;
}

const ButtonTool: FC<Props> = ({ image, toolName }) => {
	const currentBrush = useAppSelector(state => state.drawing.brush);
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(switchBrushTool(toolName));
	}

	return (
		<div
			className={classNames(stl.button, currentBrush === toolName ? stl.active : null)}
			onClick={handleClick}
		>
			<img className={stl.image} src={image} width={35} height={35} />
		</div>
	);
};

export default ButtonTool;
