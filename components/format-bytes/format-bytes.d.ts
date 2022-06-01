import { LitElement } from 'lit';
export default class i2cFormatBytes extends LitElement {
    value: number;
    unit: 'bytes' | 'bits';
    locale: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-format-bytes': i2cFormatBytes;
    }
}
