import { LitElement } from 'lit';
export default class i2cTab extends LitElement {
    static styles: import("lit").CSSResult;
    tab: HTMLElement;
    private componentId;
    panel: string;
    active: boolean;
    closable: boolean;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleCloseClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tab': i2cTab;
    }
}
