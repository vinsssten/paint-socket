import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface DrawingState {
	brush: Brush;
	size: number;
	color: string;
	history: string[];
}

const initialState: DrawingState = {
	brush: 'brush',
	color: '#000000',
	size: 5,
	history: [],
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
		case 'HISTORY_ADD':
			return { ...state };
		default:
			return state;
	}
};

export default drawing;
