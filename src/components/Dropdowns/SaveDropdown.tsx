import React, { FC, useState } from 'react';
import ButtonToolbox from '../ToolboxDrawing/components/ButtonToolbox';

import Tool from '../../lib/modules/drawingTools/Tool';
import { useAppSelector } from '../..';
import Dropdown, { MenuButton } from './Dropdown';

import localSVG from '../../../public/icons/Tools/edit-save_local.svg';
import cloudSVG from '../../../public/icons/Tools/edit-save_cloud.svg';
import saveSVG from '../../../public/icons/Tools/edit_save.svg'

interface Props {
	
}

const SaveDropdown: FC<Props> = ({ }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const canvas: HTMLCanvasElement | undefined | null = useAppSelector(
		store => store.drawing.canvas,
	);

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
		if (canvas) {
			Tool.downloadImage(canvas);
			setIsVisible(false);
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
