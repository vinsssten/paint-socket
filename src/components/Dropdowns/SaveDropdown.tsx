import React, { FC, MutableRefObject, useRef, useState } from 'react';
import ButtonToolbox from '../ToolboxDrawing/components/ButtonToolbox';
import cln from 'classnames';
import stl from './Dropdowns.scss';

import localSVG from '../../../public/icons/Tools/edit-save_local.svg';
import cloudSVG from '../../../public/icons/Tools/edit-save_cloud.svg';
import useOutsideClick from '../../lib/hooks/useOutsideClick';
import Tool from '../../lib/modules/drawingTools/Tool';
import { useAppSelector } from '../..';
import Dropdown, { MenuButton } from './Dropdown';

interface Props {
	image: string;
}

const SaveDropdown: FC<Props> = ({ image }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
    const canvas: HTMLCanvasElement | undefined | null = useAppSelector(store => store.drawing.canvas);

    const menuButtons: MenuButton[] = [{
        action: localSaveContent,
        text: "Local",
        image: localSVG
    }, {
        action: saveToCloud,
        text: "Cloud",
        image: cloudSVG
    }]

	function handleClick() {
		setIsVisible(!isVisible);
	}

    function localSaveContent () {
        if (canvas) {
            Tool.downloadImage(canvas);
            setIsVisible(false);
        }
    }

    function saveToCloud () {

    }

	return (
        <Dropdown menuButtons={menuButtons} isVisible={isVisible} setIsVisible={setIsVisible}>
            <ButtonToolbox action={handleClick} image={image} toolName="save" />
        </Dropdown>
	);
};

export default SaveDropdown;
