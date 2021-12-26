import BrushesCard from './BrushesCard';
import ColorPicker from './ColorPicker';
import SizeSelector from './SizeSelector';
import stl from './ToolboxDrawing.scss';

function ToolboxDrawing() {
	return (
		<div className={stl.maincont}>
			<div className={stl.cont}>
				<BrushesCard />
				<SizeSelector />
				<ColorPicker />
			</div>
		</div>
	);
}

export default ToolboxDrawing;
