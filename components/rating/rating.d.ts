import { LitElement } from 'lit';
export default class i2cRating extends LitElement {
    static styles: import("lit").CSSResult;
    rating: HTMLElement;
    private hoverValue;
    private isHovering;
    value: number;
    max: number;
    precision: number;
    readonly: boolean;
    disabled: boolean;
    getSymbol: (value: number) => string;
    focus(options?: FocusOptions): void;
    blur(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getValueFromMousePosition(event: MouseEvent): number;
    getValueFromTouchPosition(event: TouchEvent): number;
    getValueFromXCoordinate(coordinate: number): number;
    handleClick(event: MouseEvent): void;
    setValue(newValue: number): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseEnter(): void;
    handleMouseMove(event: MouseEvent): void;
    handleMouseLeave(): void;
    handleTouchStart(event: TouchEvent): void;
    handleTouchMove(event: TouchEvent): void;
    handleTouchEnd(event: TouchEvent): void;
    handleValueChange(): void;
    roundToPrecision(numberToRound: number, precision?: number): number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-rating': i2cRating;
    }
}
