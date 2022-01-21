import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../..';
import { switchBrushTool } from '../../../lib/store/actionCreators/drawingActionCreators';
import ButtonToolbox from './ButtonToolbox';

interface Props {
    image: string;
    toolName: BrushTool;
}

const ButtonTool: FC<Props> = props => {
    const currentBrush = useAppSelector(state => state.drawing.brush);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(switchBrushTool(props.toolName));
    }

    return <ButtonToolbox {...props} currentBrush={currentBrush} action={handleClick} />;
};

export default ButtonTool;
