import { LitElement } from 'lit';
import type i2cMenuItem from '../menu-item/menu-item';
export default class i2cMenu extends LitElement {
    static styles: import("lit").CSSResult;
    menu: HTMLElement;
    defaultSlot: HTMLSlotElement;
    private items;
    private typeToSelectString;
    private typeToSelectTimeout;
    typeToSelect(key: string): void;
    syncItems(): void;
    getActiveItem(): i2cMenuItem;
    setActiveItem(item: i2cMenuItem): void;
    handleClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu': i2cMenu;
    }
}
