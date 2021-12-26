import BrushesCard from './BrushesCard';
import SizeSelector from './SizeSelector';
import stl from './ToolboxDrawing.scss';

function ToolboxDrawing() {
	return (
		<div className={stl.maincont}>
			<div className={stl.cont}>
				<BrushesCard />
				<SizeSelector />
			</div>
		</div>
	);
}

export default ToolboxDrawing;
