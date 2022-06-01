import { LitElement } from 'lit';
export default class i2cProgressRing extends LitElement {
    static styles: import("lit").CSSResult;
    indicator: SVGCircleElement;
    size: number;
    strokeWidth: number;
    percentage: number;
    firstUpdated(): void;
    updateProgress(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-progress-ring': i2cProgressRing;
    }
}
