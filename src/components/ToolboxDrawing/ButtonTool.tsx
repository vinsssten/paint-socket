import React, { Dispatch, FC, SetStateAction } from 'react';
import stl from './ToolboxDrawing.scss';
import classNames from 'classnames';

interface Props {
	image: string;
	isChoosen: boolean;
	index: number;
	setChoosenIndex: Dispatch<SetStateAction<number>>;
}

const ButtonTool: FC<Props> = ({ image, isChoosen, index, setChoosenIndex }) => {
	function handleClick() {
		setChoosenIndex(index);
	}

	return (
		<div
			className={classNames(stl.button, isChoosen ? stl.active : null)}
			onClick={handleClick}
		>
			<img className={stl.image} src={image} width={35} height={35} />
		</div>
	);
};

export default ButtonTool;
