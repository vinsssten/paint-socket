interface DrawingState {
    brush: Brush
    size: number;
    color: string;
    history: string[];
}

export default DrawingState