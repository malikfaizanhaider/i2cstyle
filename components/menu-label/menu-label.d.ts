import { LitElement } from 'lit';
export default class i2cMenuLabel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu-label': i2cMenuLabel;
    }
}
