import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface DrawingState {
	canvas?: HTMLCanvasElement | null;
	data?: string | null;
	brush: BrushTool;
	size: number;
	color: string;
	history: string[];
	curHistoryIndex: number;
}

const emptyImage: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=="

const initialState: DrawingState = {
	brush: 'brush',
	color: '#000000',
	size: 5,
	history: [emptyImage],
	curHistoryIndex: 0,
};

const drawing: Reducer<DrawingState, PayloadAction<DrawingState>> = (
	state = initialState,
	action,
) => {
	// const {brush, size, color} = action.payload
	switch (action.type) {
		case 'SWITCH_BRUSH':
			return { ...state, brush: action.payload.brush };
		case 'CHANGE_SIZE':
			return { ...state, size: action.payload.size };
		case 'CHANGE_COLOR':
			return { ...state, color: action.payload.color };
		case 'SET_CANVAS':
			return { ...state, canvas: action.payload.canvas };
		case 'CLEAR_CANVAS':
			return {...state, history: [emptyImage], curHistoryIndex: 0}
		//Элемент просто добавляется, если индекс текущего элемента равен длине
		//массива, если элемент добавляется, когда было сделано несколько шагов
		//назад, то все последущие элементы будут перезаписаны 
		case 'HISTORY_ADD':
			console.log('history add')
			if (state.curHistoryIndex === state.history.length - 1) {
				return {...state, history: [...state.history, action.payload.data], curHistoryIndex: state.history.length};
			} else {
				return {...state, history: [...state.history.slice(0, state.curHistoryIndex + 1), action.payload.data],
						curHistoryIndex: state.curHistoryIndex + 1}
			}
		case 'HISTORY_UNDO':
			console.log('history undo')
			return {...state, curHistoryIndex: state.curHistoryIndex - 1}
		case 'HISTORY_REDO':
			return {...state, curHistoryIndex: state.curHistoryIndex + 1}
		default:
			return state;
	}
};

export default drawing;
