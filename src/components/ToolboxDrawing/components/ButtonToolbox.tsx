import cln from 'classnames';
import React, { FC, MouseEventHandler } from 'react';
import stl from '../ToolboxDrawing.scss';

interface Props {
    image: string;
    toolName?: BrushTool | string;
    currentBrush?: BrushTool;
    action: MouseEventHandler<HTMLDivElement>;
}

const ButtonToolbox: FC<Props> = ({ image, toolName, currentBrush, action }) => {
    return (
        <div
            className={cln(stl.button, currentBrush === toolName ? stl.active : null)}
            onClick={action}
        >
            <img className={stl.image} src={image} width={35} height={35} />
        </div>
    );
};

export default ButtonToolbox;
