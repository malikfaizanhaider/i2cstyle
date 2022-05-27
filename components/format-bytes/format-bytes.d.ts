import { LitElement } from 'lit';
export default class SlFormatBytes extends LitElement {
    value: number;
    unit: 'bytes' | 'bits';
    locale: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-format-bytes': SlFormatBytes;
    }
}
