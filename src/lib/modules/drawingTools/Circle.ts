import Tool from './Tool';

class Square extends Tool {
    private isMouseDown: boolean;
    private startX?: number;
    private startY?: number;
    private savedData?: string;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.handleEvents();
        this.isMouseDown = false;
    }

    set setColor(brushColor: string) {
        this.context!.fillStyle = brushColor;
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
        const curCoord = this.getCurCoord(event);
        this.startX = curCoord.x;
        this.startY = curCoord.y;
        this.context?.moveTo(curCoord.x, curCoord.y);
        this.savedData = this.canvas.toDataURL();
    }

    onMouseUp() {
        this.isMouseDown = false;
    }

    onMouseMove(event: MouseEvent) {
        if (this.isMouseDown) {
            const curCoord = this.getCurCoord(event);
            if (this.startX && this.startY) {
                const width = curCoord.x - this.startX;
                const height = curCoord.y - this.startY;
                this.draw(this.startX, this.startY, width, height);
            }
        }
    }

    onMouseLeave() {
        // this.isMouseDown = false;
    }

    onMouseEnter(event: MouseEvent) {
        if (event.buttons === 1) {
            this.isMouseDown = true;
            const curCoord = this.getCurCoord(event);
            this.context?.moveTo(curCoord.x, curCoord.y);
        }
    }

    draw(startX: number, startY: number, width: number, height: number) {
        if (this.savedData) {
            const image = new Image();
            image.src = this.savedData;
            image.onload = () => {
                this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context?.drawImage(
                    image,
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height,
                );
                this.context?.beginPath();
                this.context?.arc(startX, startY, Math.abs(width), 0, 2 * Math.PI);
                this.context?.fill();
                // this.context?.stroke();
            };
        }
    }
}

export default Square;
