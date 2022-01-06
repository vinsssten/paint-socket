import React from 'react';
import BrushesCard from './components/BrushesCard';
import ColorPicker from './components/ColorPicker';
import EditCard from './components/EditCard';
import SizeSelector from './components/SizeSelector';
import stl from './ToolboxDrawing.scss';

function ToolboxDrawing() {
    return (
        <div className={stl.maincont}>
            <div className={stl.cont}>
                <BrushesCard />
                <SizeSelector />
                <ColorPicker />
                <EditCard />
            </div>
        </div>
    );
}

export default ToolboxDrawing;
