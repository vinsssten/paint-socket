import React from 'react';
import stl from '../ToolboxDrawing.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../..';
import { sizeChange } from '../../../lib/store/actionCreators/drawingActionCreators';
import ToolContainer from '../ToolContainer';

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
