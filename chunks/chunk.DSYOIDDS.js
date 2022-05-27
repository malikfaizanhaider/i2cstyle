import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  e as e2
} from "./chunk.YXKHB4AC.js";
import {
  T,
  e,
  h,
  n,
  o,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _7bqypfkf4:D:\DSM-V2\src\components\tab\tab.scss
var tab_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --focus-ring: inset 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n  display: inline-block;\n}\n\n.tab {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--i2c-font-sans);\n  font-size: var(--i2c-font-size-small);\n  font-weight: var(--i2c-font-weight-semibold);\n  border-radius: 4px;\n  color: var(--i2c-color-gray-600);\n  padding: var(--i2c-spacing-medium) var(--i2c-spacing-large);\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  transition: var(--transition-speed) box-shadow, var(--transition-speed) color;\n}\n.tab:hover:not(.tab--disabled) {\n  color: var(--i2c-color-primary-500);\n}\n.tab:focus {\n  outline: none;\n}\n.tab:focus:not(.tab--disabled) {\n  color: var(--i2c-color-primary-500);\n  box-shadow: var(--focus-ring);\n}\n.tab.tab--active:not(.tab--disabled) {\n  color: var(--i2c-color-primary-500);\n}\n.tab.tab--closable {\n  padding-right: var(--i2c-spacing-small);\n}\n.tab.tab--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.tab__close-button {\n  font-size: var(--i2c-font-size-large);\n  margin-left: var(--i2c-spacing-xx-small);\n}\n.tab__close-button::part(base) {\n  padding: var(--i2c-spacing-xxx-small);\n}";

// src/components/tab/tab.ts
var id = 0;
var SlTab = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `tab-${++id}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "i2c-close");
  }
  render() {
    this.id = this.id || this.componentId;
    return T`
      <div
        part="base"
        class=${e2({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? T`
              <i2c-icon-button
                name="x"
                library="system"
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
                aria-hidden="true"
              ></i2c-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = r(tab_default);
__decorateClass([
  o(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  e()
], SlTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], SlTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
SlTab = __decorateClass([
  n("i2c-tab")
], SlTab);
var tab_default2 = SlTab;

export {
  tab_default2 as tab_default
};
