import {
  T,
  e,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _ymr4azwye:D:\DSM-V2\src\components\tab-panel\tab-panel.scss
var tab_panel_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.tab-panel {\n  border: solid 1px transparent;\n  padding: 20px 20px;\n}";

// src/components/tab-panel/tab-panel.ts
var id = 0;
var i2cTabPanel = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `tab-panel-${++id}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id || this.componentId;
  }
  render() {
    this.style.display = this.active ? "block" : "none";
    return T`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? "true" : "false"}
        aria-hidden=${this.active ? "false" : "true"}
      >
        <slot></slot>
      </div>
    `;
  }
};
i2cTabPanel.styles = r(tab_panel_default);
__decorateClass([
  e()
], i2cTabPanel.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cTabPanel.prototype, "active", 2);
i2cTabPanel = __decorateClass([
  n("i2c-tab-panel")
], i2cTabPanel);
var tab_panel_default2 = i2cTabPanel;

export {
  tab_panel_default2 as tab_panel_default
};
