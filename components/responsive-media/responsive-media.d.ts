import { LitElement } from 'lit';
export default class i2cResponsiveMedia extends LitElement {
    static styles: import("lit").CSSResult;
    aspectRatio: string;
    fit: 'cover' | 'contain';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-responsive-media': i2cResponsiveMedia;
    }
}
