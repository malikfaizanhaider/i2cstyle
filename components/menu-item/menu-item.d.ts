import { LitElement } from 'lit';
export default class i2cMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    menuItem: HTMLElement;
    private hasFocus;
    checked: boolean;
    value: string;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleBlur(): void;
    handleFocus(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu-item': i2cMenuItem;
    }
}
