import { LitElement } from 'lit';
export default class i2cTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    private componentId;
    name: string;
    active: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tab-panel': i2cTabPanel;
    }
}
