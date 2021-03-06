import { LitElement } from 'lit';
export default class i2cQrCode extends LitElement {
    static styles: import("lit").CSSResult;
    canvas: HTMLElement;
    value: string;
    label: string;
    size: number;
    fill: string;
    background: string;
    radius: number;
    errorCorrection: 'L' | 'M' | 'Q' | 'H';
    firstUpdated(): void;
    generate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-qr-code': i2cQrCode;
    }
}
