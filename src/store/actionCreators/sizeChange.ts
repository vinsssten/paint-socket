import { AppDispatch } from '../store';

const sizeChange = (size: number) => {
	return { type: 'CHANGE_SIZE', payload: { size: size } };
};

export default sizeChange;
