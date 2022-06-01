import {
  T,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _ymr4azwye:D:\DSM-V2\src\components\menu-label\menu-label.scss
var menu_label_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.menu-label {\n  font-family: var(--i2c-font-sans);\n  font-size: var(--i2c-font-size-small);\n  font-weight: var(--i2c-font-weight-normal);\n  line-height: var(--i2c-line-height-normal);\n  letter-spacing: var(--i2c-letter-spacing-normal);\n  color: var(--i2c-color-gray-400);\n  padding: var(--i2c-spacing-xx-small) var(--i2c-spacing-x-large);\n  user-select: none;\n}";

// src/components/menu-label/menu-label.ts
var i2cMenuLabel = class extends h {
  render() {
    return T`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
};
i2cMenuLabel.styles = r(menu_label_default);
i2cMenuLabel = __decorateClass([
  n("i2c-menu-label")
], i2cMenuLabel);
var menu_label_default2 = i2cMenuLabel;

export {
  menu_label_default2 as menu_label_default
};
