import { LitElement } from 'lit';
export default class i2cBadge extends LitElement {
    static styles: import("lit").CSSResult;
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-badge': i2cBadge;
    }
}
