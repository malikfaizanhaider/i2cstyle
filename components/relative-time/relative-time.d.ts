import { LitElement } from 'lit';
export default class i2cRelativeTime extends LitElement {
    private updateTimeout;
    private isoTime;
    private relativeTime;
    private titleTime;
    date: Date | string;
    locale: string;
    format: 'long' | 'short' | 'narrow';
    numeric: 'always' | 'auto';
    sync: boolean;
    disconnectedCallback(): void;
    updateTime(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-relative-time': i2cRelativeTime;
    }
}
