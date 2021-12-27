import { randomInt } from 'crypto';
import Tool from './Tool';

class Brush extends Tool {
	isMouseDown: boolean;

	constructor(canvas: HTMLCanvasElement) {
		super(canvas);
		this.handleEvents();
		this.isMouseDown = false;
	}

	handleEvents() {
		this.canvas.onmousedown = this.onMouseDown.bind(this);
		this.canvas.onmouseup = this.onMouseUp.bind(this);
		this.canvas.onmousemove = this.onMouseMove.bind(this);
		this.canvas.onmouseleave = this.onMouseLeave.bind(this);
		this.canvas.onmouseenter = this.onMouseEnter.bind(this);
	}

	onMouseDown(event: MouseEvent) {
		this.isMouseDown = true;
		this.context?.beginPath();
		const curCoord = this.getCurCoord(event);
		this.context?.moveTo(curCoord.x, curCoord.y);
	}

	onMouseUp() {
		this.isMouseDown = false;
	}

	onMouseMove(event: MouseEvent) {
		if (this.isMouseDown) {
			const curCoord = this.getCurCoord(event);
			this.draw(curCoord);
		}
	}

	onMouseLeave() {
		this.isMouseDown = false;
	}

	onMouseEnter(event: MouseEvent) {
		if (event.buttons === 1) {
			this.isMouseDown = true;
			const curCoord = this.getCurCoord(event);
			this.context?.moveTo(curCoord.x, curCoord.y);
		}
	}

	draw(coord: { x: number; y: number }) {
		this.context?.lineTo(coord.x, coord.y);
		this.context?.stroke();
	}
}

export default Brush;
