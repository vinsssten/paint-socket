import BrushesCard from './BrushesCard';
import ColorPicker from './ColorPicker';
import EditCard from './EditCard';
import SizeSelector from './SizeSelector';
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
