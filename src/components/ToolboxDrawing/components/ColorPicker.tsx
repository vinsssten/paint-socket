import React from 'react'
import ToolContainer from '../ToolContainer';
import stl from '../ToolboxDrawing.scss'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../..';
import { changeColor } from '../../../store/actionCreators/drawingActionCreators';

const ColorPicker = () => {
    const color = useAppSelector(store => store.drawing.color)
    const dispatch = useDispatch();

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        dispatch(changeColor(target.value))
    }

    return (
        <ToolContainer title='Color'>
            <input 
                className={stl.colorPicker}
                type="color"
                onChange={handleChange}
                value={color}
            />
        </ToolContainer>
    )
}

export default ColorPicker
