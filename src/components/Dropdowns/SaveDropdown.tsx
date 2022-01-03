import React, { FC, MutableRefObject, useRef, useState } from 'react';
import ButtonToolbox from '../ToolboxDrawing/components/ButtonToolbox';
import cln from 'classnames';
import stl from './Dropdowns.scss';
import MenuButton from './MenuButton';

import localSVG from '../../../public/icons/Tools/edit-save_local.svg';
import cloudSVG from '../../../public/icons/Tools/edit-save_cloud.svg';
import useOutsideClick from '../../lib/hooks/useOutsideClick';
import Tool from '../../lib/modules/drawingTools/Tool';
import { useAppSelector } from '../..';

interface Props {
	image: string;
}

const SaveDropdown: FC<Props> = ({ image }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const menuRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const canvas: HTMLCanvasElement | undefined | null = useAppSelector(store => store.drawing.canvas);
	useOutsideClick(menuRef, closeMenu);

	function closeMenu() {
		setIsVisible(false);
	}

	function handleClick(event: any) {
		const target = event.target;
		setIsVisible(!isVisible);
	}

    function localSaveContent () {
        if (canvas) {
            Tool.downloadImage(canvas);
        }
    }

    function saveToCloud () {

    }

	return (
		<div className={stl.cont} id="saveDropdown" ref={menuRef}>
			<ButtonToolbox action={handleClick} image={image} toolName="save" />
			<div className={cln(stl.menu, isVisible ? stl.visible : stl.hidden)}>
				<MenuButton image={localSVG} text="Local" action={localSaveContent} />
				<MenuButton image={cloudSVG} text="Cloud" action={saveToCloud} />
			</div>
		</div>
	);
};

export default SaveDropdown;
