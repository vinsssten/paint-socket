import {
	clearCanvas,
	redoHistoryAction,
	saveDataInHistory,
	undoHistoryAction,
} from '../../../store/actionCreators/drawingActionCreators';
import store from '../../../store/store';

//TODO: Разобраться с типами
class CanvasHistory {
	private canvas: ICanvas;

	constructor(canvas: ICanvas) {
		this.canvas = canvas;
		this.handleDefaultEvents(this.canvas);
	}

	private handleDefaultEvents(canvas: ICanvas) {
		canvas.addEventListener('mouseup', CanvasHistory.saveContextInHistory);
	}

	private static saveContextInHistory(event: any) {
		const dataUrl: string = event.currentTarget?.toDataURL();
		store.dispatch(saveDataInHistory(dataUrl));
		// store.dispatch({ type: 'HISTORY_ADD', payload: { data: dataUrl } });
	}

	canvasClear() {
		const msg = 'Are you sure you want to clear the canvas, all changes will be lost?';
		if (this.canvas) {
			if (confirm(msg)) {
				store.dispatch(clearCanvas());
			}
		}
	}

	undoHistory() {
		const historyIndex = store.getState().drawing.curHistoryIndex;
		if (historyIndex > 0) {
			store.dispatch(undoHistoryAction());
		}
	}

	redoHistory() {
		const historyIndex = store.getState().drawing.curHistoryIndex;
		const historyLength = store.getState().drawing.history.length;
		if (historyIndex < historyLength - 1) {
			store.dispatch(redoHistoryAction());
		}
	}
}

export default CanvasHistory;
