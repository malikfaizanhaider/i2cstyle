import { LitElement } from 'lit';
export default class i2cIconButton extends LitElement {
    static styles: import("lit").CSSResult;
    button: HTMLButtonElement;
    name: string;
    library: string;
    src: string;
    label: string;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-icon-button': i2cIconButton;
    }
}
