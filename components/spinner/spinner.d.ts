import { LitElement } from 'lit';
export default class SlSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-spinner': SlSpinner;
    }
}
