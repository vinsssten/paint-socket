import BrushesCard from './BrushesCard';
import stl from './ToolboxDrawing.scss';

function ToolboxDrawing() {
	return (
		<div className={stl.maincont}>
			<div className={stl.cont}>
				<BrushesCard />
			</div>
		</div>
	);
}

export default ToolboxDrawing;
