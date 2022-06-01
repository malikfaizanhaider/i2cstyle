import { LitElement } from 'lit';
export default class i2cMenuDivider extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu-divider': i2cMenuDivider;
    }
}
