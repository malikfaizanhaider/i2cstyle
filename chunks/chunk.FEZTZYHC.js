import {
  T,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _ymr4azwye:D:\DSM-V2\src\components\spinner\spinner.scss
var spinner_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --track-color: #0d131e20;\n  --indicator-color: var(--i2c-color-primary-500);\n  --stroke-width: 2px;\n  display: inline-flex;\n}\n\n.spinner {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: solid var(--stroke-width) var(--track-color);\n  border-top-color: var(--indicator-color);\n  border-right-color: var(--indicator-color);\n  animation: 1s linear infinite spin;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}";

// src/components/spinner/spinner.ts
var i2cSpinner = class extends h {
  render() {
    return T` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `;
  }
};
i2cSpinner.styles = r(spinner_default);
i2cSpinner = __decorateClass([
  n("i2c-spinner")
], i2cSpinner);
var spinner_default2 = i2cSpinner;

export {
  spinner_default2 as spinner_default
};
