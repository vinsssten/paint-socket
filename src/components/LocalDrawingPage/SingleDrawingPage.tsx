import stl from './SingleDrawingPage.scss';
import { useSelector } from 'react-redux';
import ToolboxDrawing from '../ToolboxDrawing/ToolboxDrawing';
import Canvas from '../Canvas/Canvas';

function SingleDrawingPage() {
    return (
        <div className={stl.page}>
            <ToolboxDrawing />
            <Canvas />
        </div>
    );
}

export default SingleDrawingPage;
