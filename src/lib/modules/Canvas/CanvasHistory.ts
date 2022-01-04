import { saveDataInHistory } from "../../../store/actionCreators/drawingActionCreators";
import store from "../../../store/store";

class CanvasHistory {
    private canvas: ICanvas

    constructor (canvas: ICanvas) {
        this.canvas = canvas;
        this.handleDefaultEvents(this.canvas);
    }

	private handleDefaultEvents(canvas: ICanvas) {
		canvas.addEventListener('mouseup', CanvasHistory.saveContextInHistory);
	}

    //TODO: Разобраться с типами
    private static saveContextInHistory(event: any) {
        const dataUrl: string = event.currentTarget?.toDataURL();
        store.dispatch(saveDataInHistory(dataUrl));
        // store.dispatch({ type: 'HISTORY_ADD', payload: { data: dataUrl } });
    }
}

export default CanvasHistory