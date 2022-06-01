import {
  n as n2
} from "./chunk.EPTJRW4G.js";
import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.4JLHW6VH.js";
import {
  requestIcon
} from "./chunk.ARRH633M.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  i
} from "./chunk.VIWFLAGR.js";
import {
  T,
  e,
  h,
  n,
  r,
  r2
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// node_modules/lit-html/directives/unsafe-svg.js
var t = class extends n2 {
};
t.directiveName = "unsafeSVG", t.resultType = 2;
var o = i(t);

// _ymr4azwye:D:\DSM-V2\src\components\icon\icon.scss
var icon_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  contain: strict;\n  box-sizing: content-box !important;\n}\n\n.icon,\nsvg {\n  display: block;\n  height: 100%;\n  width: 100%;\n}";

// src/components/icon/icon.ts
var parser = new DOMParser();
var i2cIcon = class extends h {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.library = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getLabel() {
    let label = "";
    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, " ");
    } else if (this.src) {
      label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
    }
    return label;
  }
  getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    } else {
      return this.src;
    }
  }
  redraw() {
    this.setIcon();
  }
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl) {
            if (library && library.mutator) {
              library.mutator(svgEl);
            }
            this.svg = svgEl.outerHTML;
            emit(this, "i2c-load");
          } else {
            this.svg = "";
            emit(this, "i2c-error", { detail: { status: file.status } });
          }
        } else {
          this.svg = "";
          emit(this, "i2c-error", { detail: { status: file.status } });
        }
      } catch (e2) {
        emit(this, "i2c-error", { detail: { status: -1 } });
      }
    } else if (this.svg) {
      this.svg = "";
    }
  }
  handleChange() {
    this.setIcon();
  }
  render() {
    return T` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o(this.svg)}</div>`;
  }
};
i2cIcon.styles = r(icon_default);
__decorateClass([
  r2()
], i2cIcon.prototype, "svg", 2);
__decorateClass([
  e()
], i2cIcon.prototype, "name", 2);
__decorateClass([
  e()
], i2cIcon.prototype, "src", 2);
__decorateClass([
  e()
], i2cIcon.prototype, "label", 2);
__decorateClass([
  e()
], i2cIcon.prototype, "library", 2);
__decorateClass([
  watch("name"),
  watch("src"),
  watch("library")
], i2cIcon.prototype, "setIcon", 1);
i2cIcon = __decorateClass([
  n("i2c-icon")
], i2cIcon);
var icon_default2 = i2cIcon;

export {
  icon_default2 as icon_default
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
