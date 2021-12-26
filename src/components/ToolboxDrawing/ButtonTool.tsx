import React, { Dispatch, FC, SetStateAction } from 'react';
import stl from './ToolboxDrawing.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../lib/models/reducerStates/InitialState';
import switchBrushTool from '../../store/actionCreators/switchBrushTool';

interface Props {
	image: string;
	toolName: Brush
}

const ButtonTool: FC<Props> = ({ image, toolName }) => {
	const currentBrush = useSelector<InitialState>(state => state.drawing.brush);
	const dispatch = useDispatch()

	function handleClick () {
		dispatch(switchBrushTool(toolName))
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
