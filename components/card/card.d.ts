import { LitElement } from 'lit';
export default class i2cCard extends LitElement {
    static styles: import("lit").CSSResult;
    private hasFooter;
    private hasImage;
    private hasHeader;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-card': i2cCard;
    }
}
