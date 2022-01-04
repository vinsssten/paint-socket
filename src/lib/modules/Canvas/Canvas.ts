import { MouseEvent } from "react";
import CanvasHistory from "./CanvasHistory";
import Tool from "../Tools/Tool";

class Canvas {
    public canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D | null;
    private canvasHistory: CanvasHistory

    constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')
        this.destroyEvents();
        this.canvasHistory = new CanvasHistory(this.canvas)
    }

    get getContext () {
        return this.context;
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