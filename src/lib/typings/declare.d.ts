declare module '*.scss' {
	const classNames: Record<string, string>;
	export default classNames;
}

declare module '*.svg' {
	const content: any;
	export default content;
}


declare type ICanvas = HTMLCanvasElement;
declare type MouseEventCanvas = globalThis.MouseEvent
