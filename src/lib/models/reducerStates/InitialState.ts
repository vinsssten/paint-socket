import AppState from './AppState';
import DrawingState from './DrawingState';

export interface InitialState {
	app: AppState;
	drawing: DrawingState;
}
