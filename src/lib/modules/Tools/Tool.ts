import { MouseEvent } from 'react';
import Canvas from '../Canvas/Canvas';

class Tool extends Canvas {
    scale: number;

    constructor(canvas: ICanvas) {
        super(canvas);
        this.scale = 1;
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

    protected getCurCoord(event: MouseEventCanvas): { x: number; y: number } {
        const canvasRect: DOMRect = this.canvas.getBoundingClientRect();
        return {
            x: (event.pageX - canvasRect.x) * this.scale,
            y: (event.pageY - canvasRect.y) * this.scale,
        };
    }
}

export default Tool;
