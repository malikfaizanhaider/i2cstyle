import { LitElement, TemplateResult } from 'lit';
import type i2cDropdown from '../dropdown/dropdown';
import type i2cMenu from '../menu/menu';
import type i2cMenuItem from '../menu-item/menu-item';
export default class i2cSelect extends LitElement {
    static styles: import("lit").CSSResult;
    dropdown: i2cDropdown;
    box: i2cDropdown;
    input: HTMLInputElement;
    menu: i2cMenu;
    private inputId;
    private helpTextId;
    private labelId;
    private resizeObserver;
    private hasFocus;
    private hasHelpTextSlot;
    private hasLabelSlot;
    private isOpen;
    private displayLabel;
    private displayTags;
    multiple: boolean;
    maxTagsVisible: number;
    disabled: boolean;
    name: string;
    placeholder: string;
    size: 'small' | 'medium' | 'large';
    hoist: boolean;
    value: string | Array<string>;
    pill: boolean;
    label: string;
    helpText: string;
    required: boolean;
    clearable: boolean;
    invalid: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    getItemLabel(item: i2cMenuItem): string;
    getItems(): i2cMenuItem[];
    getValueAsArray(): string[];
    handleBlur(): void;
    handleClearClick(event: MouseEvent): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleLabelClick(): void;
    handleMenuSelect(event: CustomEvent): void;
    handleMenuShow(): void;
    handleMenuHide(): void;
    handleMultipleChange(): void;
    handleSlotChange(): Promise<void>;
    handleTagInteraction(event: KeyboardEvent | MouseEvent): void;
    handleValueChange(): Promise<void>;
    resizeMenu(): void;
    syncItemsFromValue(): void;
    syncValueFromItems(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-select': i2cSelect;
    }
}
