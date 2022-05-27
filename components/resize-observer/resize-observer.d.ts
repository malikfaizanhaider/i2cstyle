import { LitElement } from 'lit';
export default class SlResizeObserver extends LitElement {
    static styles: import("lit").CSSResult;
    private resizeObserver;
    private observedElements;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-resize-observer': SlResizeObserver;
    }
}