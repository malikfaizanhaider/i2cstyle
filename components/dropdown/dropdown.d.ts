import { LitElement } from 'lit';
import type i2cMenu from '../menu/menu';
export default class i2cDropdown extends LitElement {
    static styles: import("lit").CSSResult;
    trigger: HTMLElement;
    panel: HTMLElement;
    positioner: HTMLElement;
    private componentId;
    private popover;
    open: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    stayOpenOnSelect: boolean;
    containingElement: HTMLElement;
    distance: number;
    skidding: number;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    focusOnTrigger(): void;
    getMenu(): i2cMenu;
    handleDocumentKeyDown(event: KeyboardEvent): void;
    handleDocumentMouseDown(event: MouseEvent): void;
    handleMenuItemActivate(event: CustomEvent): void;
    handlePanelSelect(event: CustomEvent): void;
    handlePopoverOptionsChange(): void;
    handleTriggerClick(): void;
    handleTriggerKeyDown(event: KeyboardEvent): void;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    handleTriggerSlotChange(): void;
    updateAccessibleTrigger(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    reposition(): void;
    handleOpenChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-dropdown': i2cDropdown;
    }
}
