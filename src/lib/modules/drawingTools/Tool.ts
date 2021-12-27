import { saveDataInHistory } from "../../../store/actionCreators/drawingActionCreators";
import store from "../../../store/store";

class Tool {
	public canvas: HTMLCanvasElement;
	protected context: CanvasRenderingContext2D | null;
	private scale: number;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
		this.scale = 1;
        this.handleDefaultEvents();
		this.setDefaultSettings();
		this.destroyEvents();
	}

	set setSize(size: number) {
		if (size) {
			if (size > 72) {
				this.context!.lineWidth = 72;
			} else {
				this.context!.lineWidth = size;
			}
		}
	}

	set setColor(brushColor: string) {
		if (brushColor) {
			this.context!.strokeStyle = brushColor;
		}
	}
    
    setDefaultSettings() {
        this.context!.lineCap = 'round';
        this.context!.lineJoin = 'round';
    }

    handleDefaultEvents () {
		this.canvas.addEventListener('mouseup', this.saveContextInHistory.bind(this))
    }
    
	protected destroyEvents() {
        this.canvas.onmousedown = null;
		this.canvas.onmouseup = null;
		this.canvas.onmousemove = null;
		this.canvas.onmouseleave = null;
		this.canvas.onmouseenter = null;
	}
    
	saveContextInHistory () {
        const dataUrl = this.canvas.toDataURL();
		console.log('save context')
        store.dispatch(saveDataInHistory(dataUrl));
    }

	protected getCurCoord(event: MouseEvent): { x: number; y: number } {
		const canvasRect: DOMRect = this.canvas.getBoundingClientRect();
		return {
			x: (event.pageX - canvasRect.x) * this.scale,
			y: (event.pageY - canvasRect.y) * this.scale,
		};
	}

	static clearCanvas() {}
}

export default Tool;
