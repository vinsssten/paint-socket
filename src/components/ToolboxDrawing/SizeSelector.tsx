import React from 'react';
import ToolContainer from './ToolContainer';
import stl from './ToolboxDrawing.scss';
import { useDispatch } from 'react-redux';
import sizeChange from '../../store/actionCreators/sizeChange';
import { useAppSelector } from '../..';

const SizeSelector = () => {
	const size: number = useAppSelector(store => store.drawing.size);
	const dispatch = useDispatch();

	function onSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
		const target = event.target;
		dispatch(sizeChange(Number(target.value)));
	}

	return (
		<ToolContainer title="Size">
			<div className={stl.sizeselectorContainer}>
				<input
					className={stl.slider}
					type="range"
					value={size}
					min={1}
					max={72}
					onChange={onSizeChange}
				/>
				<h2 className={stl.toolcontText}>{size}</h2>
			</div>
		</ToolContainer>
	);
};

export default SizeSelector;
