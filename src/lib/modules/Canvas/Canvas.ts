import { MouseEvent } from "react";
import CanvasHistory from "../Canvas/CanvasHistory";

class Canvas {
    public canvas: ICanvas;
    protected context: CanvasRenderingContext2D | null;
    private canvasHistory: CanvasHistory
	private hotkeyHandle: (event: any) => void

    constructor (canvas: ICanvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')
        this.canvasHistory = new CanvasHistory(this.canvas);
        this.destroyEvents();

		this.hotkeyHandle = this.hotkeyEventCheck.bind(this);
		
		this.handleDefaultEvents();
		
    }

    get getContext () {
        return this.context;
    }

	private handleDefaultEvents () {
		document.addEventListener('keyup', this.hotkeyHandle)
	}

	private hotkeyEventCheck (event: KeyboardEvent) {
		if (event.key === 'z' && event.ctrlKey) {
			this.canvasHistory.undoHistory();
		} else if (event.key === 'y' && event.ctrlKey) {
			this.canvasHistory.redoHistory();
		}
	}

	protected destroyEvents() {
		this.canvas.onmousedown = null;
		this.canvas.onmouseup = null;
		this.canvas.onmousemove = null;
		this.canvas.onmouseleave = null;
		this.canvas.onmouseenter = null;
	}

    downloadImage() {
		const dataUrl = this.canvas.toDataURL();
		const anchor = document.createElement('a');
		anchor.href = dataUrl;
		anchor.download = 'picture';
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	}

	setDataToContext(dataUrl: string | undefined) {
		if (dataUrl) {
			const image = new Image();
			image.src = dataUrl;
			image.onload = () => {
				this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.context?.drawImage(image, 0, 0);
			};
		}
	}
}

export default Canvas