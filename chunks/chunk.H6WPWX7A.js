import {
  createPopper
} from "./chunk.GADG7AUG.js";
import {
  getNearestTabbableElement
} from "./chunk.47KECY7E.js";
import {
  scrollIntoView
} from "./chunk.MMQCDOAH.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.NVGT36PI.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.EVK2ASE6.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit,
  waitForEvent
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

// _ymr4azwye:D:\DSM-V2\src\components\dropdown\dropdown.scss
var dropdown_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown__trigger {\n  display: block;\n}\n\n.dropdown__positioner {\n  position: absolute;\n  z-index: var(--i2c-z-index-dropdown);\n}\n\n.dropdown__panel {\n  max-height: 75vh;\n  font-family: var(--i2c-font-sans);\n  font-size: var(--i2c-font-size-medium);\n  font-weight: var(--i2c-font-weight-normal);\n  color: var(--color);\n  background-color: var(--i2c-panel-background-color);\n  border: solid 1px var(--i2c-panel-border-color);\n  border-radius: var(--i2c-border-radius-medium);\n  box-shadow: var(--i2c-shadow-large);\n  overflow: auto;\n  overscroll-behavior: none;\n  pointer-events: none;\n}\n\n.dropdown--open .dropdown__panel {\n  pointer-events: all;\n}\n\n.dropdown__positioner[data-popper-placement^=top] .dropdown__panel {\n  transform-origin: bottom;\n}\n.dropdown__positioner[data-popper-placement^=bottom] .dropdown__panel {\n  transform-origin: top;\n}\n.dropdown__positioner[data-popper-placement^=left] .dropdown__panel {\n  transform-origin: right;\n}\n.dropdown__positioner[data-popper-placement^=right] .dropdown__panel {\n  transform-origin: left;\n}";

// src/components/dropdown/dropdown.ts
var id = 0;
var i2cDropdown = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `dropdown-${++id}`;
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 2;
    this.skidding = 0;
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
    this.updateComplete.then(() => {
      this.popover = createPopper(this.trigger, this.positioner, {
        placement: this.placement,
        strategy: this.hoist ? "fixed" : "absolute",
        modifiers: [
          {
            name: "flip",
            options: {
              boundary: "viewport"
            }
          },
          {
            name: "offset",
            options: {
              offset: [this.skidding, this.distance]
            }
          }
        ]
      });
    });
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.hide();
    this.popover.destroy();
  }
  focusOnTrigger() {
    const slot = this.trigger.querySelector("slot");
    const trigger = slot.assignedElements({ flatten: true })[0];
    if (trigger && typeof trigger.focus === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    const slot = this.panel.querySelector("slot");
    return slot.assignedElements({ flatten: true }).filter((el) => el.tagName.toLowerCase() === "i2c-menu")[0];
  }
  handleDocumentKeyDown(event) {
    var _a;
    if (event.key === "Escape") {
      this.hide();
      this.focusOnTrigger();
      return;
    }
    if (event.key === "Tab") {
      if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "i2c-menu-item") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }
      setTimeout(() => {
        var _a2, _b;
        const activeElement = this.containingElement.getRootNode() instanceof ShadowRoot ? (_b = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b.activeElement : document.activeElement;
        if ((activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
          this.hide();
          return;
        }
      });
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (!path.includes(this.containingElement)) {
      this.hide();
      return;
    }
  }
  handleMenuItemActivate(event) {
    const item = event.target;
    scrollIntoView(item, this.panel);
  }
  handlePanelSelect(event) {
    const target = event.target;
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "i2c-menu") {
      this.hide();
      this.focusOnTrigger();
    }
  }
  handlePopoverOptionsChange() {
    if (this.popover) {
      this.popover.setOptions({
        placement: this.placement,
        strategy: this.hoist ? "fixed" : "absolute",
        modifiers: [
          {
            name: "flip",
            options: {
              boundary: "viewport"
            }
          },
          {
            name: "offset",
            options: {
              offset: [this.skidding, this.distance]
            }
          }
        ]
      });
    }
  }
  handleTriggerClick() {
    this.open ? this.hide() : this.show();
  }
  handleTriggerKeyDown(event) {
    const menu = this.getMenu();
    const menuItems = menu ? [...menu.querySelectorAll("i2c-menu-item")] : [];
    const firstMenuItem = menuItems[0];
    const lastMenuItem = menuItems[menuItems.length - 1];
    if (event.key === "Escape") {
      this.focusOnTrigger();
      this.hide();
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.open ? this.hide() : this.show();
      return;
    }
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      if (!this.open) {
        this.show();
      }
      if (event.key === "ArrowDown" && firstMenuItem) {
        firstMenuItem.focus();
        return;
      }
      if (event.key === "ArrowUp" && lastMenuItem) {
        lastMenuItem.focus();
        return;
      }
    }
    const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
    if (this.open && menu && !ignoredKeys.includes(event.key)) {
      menu.typeToSelect(event.key);
      return;
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  updateAccessibleTrigger() {
    if (this.trigger) {
      const slot = this.trigger.querySelector("slot");
      const assignedElements = slot.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.map(getNearestTabbableElement)[0];
      if (accessibleTrigger) {
        accessibleTrigger.setAttribute("aria-haspopup", "true");
        accessibleTrigger.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
    return waitForEvent(this, "i2c-after-show");
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
    return waitForEvent(this, "i2c-after-hide");
  }
  reposition() {
    if (!this.open) {
      return;
    }
    this.popover.update();
  }
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      emit(this, "i2c-show");
      this.panel.addEventListener("i2c-activate", this.handleMenuItemActivate);
      this.panel.addEventListener("i2c-select", this.handlePanelSelect);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      await stopAnimations(this);
      this.popover.update();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, "dropdown.show");
      await animateTo(this.panel, keyframes, options);
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      this.panel.removeEventListener("i2c-activate", this.handleMenuItemActivate);
      this.panel.removeEventListener("i2c-select", this.handlePanelSelect);
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide");
      await animateTo(this.panel, keyframes, options);
      this.panel.hidden = true;
      emit(this, "i2c-after-hide");
    }
  }
  render() {
    return T`
      <div
        part="base"
        id=${this.componentId}
        class=${e2({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            role="menu"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby=${this.componentId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
i2cDropdown.styles = r(dropdown_default);
__decorateClass([
  o(".dropdown__trigger")
], i2cDropdown.prototype, "trigger", 2);
__decorateClass([
  o(".dropdown__panel")
], i2cDropdown.prototype, "panel", 2);
__decorateClass([
  o(".dropdown__positioner")
], i2cDropdown.prototype, "positioner", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cDropdown.prototype, "open", 2);
__decorateClass([
  e()
], i2cDropdown.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean })
], i2cDropdown.prototype, "disabled", 2);
__decorateClass([
  e({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], i2cDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  e({ attribute: false })
], i2cDropdown.prototype, "containingElement", 2);
__decorateClass([
  e({ type: Number })
], i2cDropdown.prototype, "distance", 2);
__decorateClass([
  e({ type: Number })
], i2cDropdown.prototype, "skidding", 2);
__decorateClass([
  e({ type: Boolean })
], i2cDropdown.prototype, "hoist", 2);
__decorateClass([
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], i2cDropdown.prototype, "handlePopoverOptionsChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], i2cDropdown.prototype, "handleOpenChange", 1);
i2cDropdown = __decorateClass([
  n("i2c-dropdown")
], i2cDropdown);
var dropdown_default2 = i2cDropdown;
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  dropdown_default2 as dropdown_default
};
