import { LitElement } from 'lit';
export default class i2cImageComparer extends LitElement {
    static styles: import("lit").CSSResult;
    base: HTMLElement;
    handle: HTMLElement;
    position: number;
    handleDrag(event: any): void;
    handleKeyDown(event: KeyboardEvent): void;
    handlePositionChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-image-comparer': i2cImageComparer;
    }
}
