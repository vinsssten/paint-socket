import { PayloadAction } from '@reduxjs/toolkit';
import DrawingState from '../../lib/models/reducerStates/DrawingState';

const initialState: DrawingState = {
    brush: 'brush',
    color: '#ffffff',
    size: 5,
    history: [],
}

const drawing = (state: DrawingState = initialState, action: PayloadAction<DrawingState>) => {
    switch (action.type) {
        case "SWITCH_BRUSH": return {...state, brush: action.payload}
        case "CHANGE_SIZE": return {...state, size: action.payload}
        case "CHANGE_COLOR": return {...state, color: action.payload}
        case "HISTORY_ADD": return {...state, history: [...state.history, action.payload]}
        default: return state
    }
}

export default drawing