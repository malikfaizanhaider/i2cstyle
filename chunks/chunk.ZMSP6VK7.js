import {
  clamp
} from "./chunk.T56CG5BM.js";
import {
  i
} from "./chunk.DA3UDEH5.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
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

// _ymr4azwye:D:\DSM-V2\src\components\image-comparer\image-comparer.scss
var image_comparer_default = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n:host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --divider-width: 2px;\n  --handle-size: 2.5rem;\n  display: inline-block;\n  position: relative;\n}\n\n.image-comparer {\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.image-comparer__before,\n.image-comparer__after {\n  pointer-events: none;\n}\n.image-comparer__before ::slotted(img),\n.image-comparer__before ::slotted(svg),\n.image-comparer__after ::slotted(img),\n.image-comparer__after ::slotted(svg) {\n  display: block;\n  max-width: 100% !important;\n  height: auto;\n}\n\n.image-comparer__after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.image-comparer__divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: var(--divider-width);\n  height: 100%;\n  background-color: var(--i2c-color-white);\n  transform: translateX(calc(var(--divider-width) / -2));\n  cursor: ew-resize;\n}\n\n.image-comparer__handle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: calc(50% - (var(--handle-size) / 2));\n  width: var(--handle-size);\n  height: var(--handle-size);\n  background-color: var(--i2c-color-white);\n  border-radius: var(--i2c-border-radius-circle);\n  font-size: calc(var(--handle-size) * 0.5);\n  color: var(--i2c-color-gray-500);\n  cursor: inherit;\n  z-index: 10;\n}\n.image-comparer__handle:focus {\n  outline: none;\n  box-shadow: 0 0 0 1px var(--i2c-color-primary-500), 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}";

// src/components/image-comparer/image-comparer.ts
var i2cImageComparer = class extends h {
  constructor() {
    super(...arguments);
    this.position = 50;
  }
  handleDrag(event) {
    const { width } = this.base.getBoundingClientRect();
    function drag(event2, container, onMove) {
      const move = (event3) => {
        const dims = container.getBoundingClientRect();
        const defaultView = container.ownerDocument.defaultView;
        const offsetX = dims.left + defaultView.pageXOffset;
        const offsetY = dims.top + defaultView.pageYOffset;
        const x = (event3.changedTouches ? event3.changedTouches[0].pageX : event3.pageX) - offsetX;
        const y = (event3.changedTouches ? event3.changedTouches[0].pageY : event3.pageY) - offsetY;
        onMove(x, y);
      };
      move(event2);
      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("mouseup", stop);
        document.removeEventListener("touchend", stop);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", move);
      document.addEventListener("mouseup", stop);
      document.addEventListener("touchend", stop);
    }
    this.handle.focus();
    event.preventDefault();
    drag(event, this.base, (x) => {
      this.position = Number(clamp(x / width * 100, 0, 100).toFixed(2));
    });
  }
  handleKeyDown(event) {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;
      event.preventDefault();
      if (event.key === "ArrowLeft")
        newPosition = newPosition - incr;
      if (event.key === "ArrowRight")
        newPosition = newPosition + incr;
      if (event.key === "Home")
        newPosition = 0;
      if (event.key === "End")
        newPosition = 100;
      newPosition = clamp(newPosition, 0, 100);
      this.position = newPosition;
    }
  }
  handlePositionChange() {
    emit(this, "i2c-change");
  }
  render() {
    return T`
      <div part="base" class="image-comparer" @keydown=${this.handleKeyDown}>
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${i({ clipPath: `inset(0 ${100 - this.position}% 0 0)` })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${i({ left: this.position + "%" })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            tabindex="0"
          >
            <slot name="handle-icon">
              <i2c-icon class="image-comparer__handle-icon" name="grip-vertical" library="system"></i2c-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
};
i2cImageComparer.styles = r(image_comparer_default);
__decorateClass([
  o(".image-comparer")
], i2cImageComparer.prototype, "base", 2);
__decorateClass([
  o(".image-comparer__handle")
], i2cImageComparer.prototype, "handle", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], i2cImageComparer.prototype, "position", 2);
__decorateClass([
  watch("position", { waitUntilFirstUpdate: true })
], i2cImageComparer.prototype, "handlePositionChange", 1);
i2cImageComparer = __decorateClass([
  n("i2c-image-comparer")
], i2cImageComparer);
var image_comparer_default2 = i2cImageComparer;

export {
  image_comparer_default2 as image_comparer_default
};
