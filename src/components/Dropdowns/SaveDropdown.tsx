import React, { FC, useState } from 'react';
import ButtonToolbox from '../ToolboxDrawing/components/ButtonToolbox';

import Tool from '../../lib/modules/Tools/Tool';
import { useAppSelector } from '../..';
import Dropdown, { MenuButton } from './Dropdown';

import localSVG from '../../../public/icons/Tools/edit-save_local.svg';
import cloudSVG from '../../../public/icons/Tools/edit-save_cloud.svg';
import saveSVG from '../../../public/icons/Tools/edit_save.svg';
import Canvas from '../../lib/modules/Canvas/Canvas';

interface Props {}

const SaveDropdown: FC<Props> = ({}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { canvas: canvasElem } = useAppSelector(store => store.drawing);

	const menuButtons: MenuButton[] = [
		{
			action: localSaveContent,
			text: 'Local',
			image: localSVG,
		},
		{
			action: saveToCloud,
			text: 'Cloud',
			image: cloudSVG,
		},
	];

	function handleClick() {
		setIsVisible(!isVisible);
	}

	function localSaveContent() {
		if (canvasElem) {
			const canvas = new Canvas(canvasElem);
			canvas.downloadImage();
		}
	}

	function saveToCloud() {}

	return (
		<Dropdown menuButtons={menuButtons} isVisible={isVisible} setIsVisible={setIsVisible}>
			<ButtonToolbox action={handleClick} image={saveSVG} toolName="save" />
		</Dropdown>
	);
};

export default SaveDropdown;
