import { LitElement } from 'lit';
export default class i2cSkeleton extends LitElement {
    static styles: import("lit").CSSResult;
    effect: 'pulse' | 'sheen' | 'none';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-skeleton': i2cSkeleton;
    }
}
