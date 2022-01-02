import { MouseEvent } from "react";
import { saveDataInHistory } from "../../../store/actionCreators/drawingActionCreators";
import store from "../../../store/store";

//TODO: Разобраться с типами
function saveContextInHistory (event: MouseEvent<HTMLCanvasElement>) {
	const target: EventTarget = event.currentTarget;
	const dataUrl: string = event.currentTarget?.toDataURL();
	store.dispatch(saveDataInHistory(dataUrl));
	// store.dispatch({ type: 'HISTORY_ADD', payload: {data: dataUrl} });
	console.log('saveContext', event)
}

class Tool {
	public canvas: HTMLCanvasElement;
	protected context: CanvasRenderingContext2D | null;
	private scale: number;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
		this.scale = 1;
        this.handleDefaultEvents();
		this.destroyEvents();
		this.setDefaultSettings();
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

    private handleDefaultEvents () {
		// this.canvas.addEventListener('mouseup', saveContextInHistory)
    }
    
	protected destroyEvents() {
        this.canvas.onmousedown = null;
		this.canvas.onmouseup = null;
		this.canvas.onmousemove = null;
		this.canvas.onmouseleave = null;
		this.canvas.onmouseenter = null;
	}
    
	// private saveContextInHistory () {
    //     const dataUrl = this.canvas.toDataURL();
    //     store.dispatch(saveDataInHistory(dataUrl));
    // }

	setDataToContext (dataUrl: string| undefined) {
		if (dataUrl) {
			const image = new Image;
			image.src = dataUrl;
			image.onload = () => {
				console.log('draw')
				this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.context?.drawImage(image, 0, 0);
			}
		}
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
