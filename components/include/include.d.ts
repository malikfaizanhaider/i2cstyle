import { LitElement } from 'lit';
export default class i2cInclude extends LitElement {
    static styles: import("lit").CSSResult;
    src: string;
    mode: 'cors' | 'no-cors' | 'same-origin';
    allowScripts: boolean;
    executeScript(script: HTMLScriptElement): void;
    handleSrcChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-include': i2cInclude;
    }
}
