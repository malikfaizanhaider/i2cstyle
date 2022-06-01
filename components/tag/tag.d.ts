import { LitElement } from 'lit';
export default class i2cTag extends LitElement {
    static styles: import("lit").CSSResult;
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    clearable: boolean;
    handleClearClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tag': i2cTag;
    }
}
