import {
  T,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _ymr4azwye:D:\DSM-V2\src\components\menu-divider\menu-divider.scss
var menu_divider_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.menu-divider {\n  border-top: solid 1px var(--i2c-panel-border-color);\n  margin: var(--i2c-spacing-x-small) 0;\n}";

// src/components/menu-divider/menu-divider.ts
var i2cMenuDivider = class extends h {
  render() {
    return T` <div part="base" class="menu-divider" role="separator" aria-hidden="true"></div> `;
  }
};
i2cMenuDivider.styles = r(menu_divider_default);
i2cMenuDivider = __decorateClass([
  n("i2c-menu-divider")
], i2cMenuDivider);
var menu_divider_default2 = i2cMenuDivider;

export {
  menu_divider_default2 as menu_divider_default
};
