import {
  e,
  h,
  n
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/format-number/format-number.ts
var i2cFormatNumber = class extends h {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return new Intl.NumberFormat(this.locale, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    }).format(this.value);
  }
};
__decorateClass([
  e({ type: Number })
], i2cFormatNumber.prototype, "value", 2);
__decorateClass([
  e()
], i2cFormatNumber.prototype, "locale", 2);
__decorateClass([
  e()
], i2cFormatNumber.prototype, "type", 2);
__decorateClass([
  e({ attribute: "no-grouping", type: Boolean })
], i2cFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  e()
], i2cFormatNumber.prototype, "currency", 2);
__decorateClass([
  e({ attribute: "currency-display" })
], i2cFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  e({ attribute: "minimum-integer-digits", type: Number })
], i2cFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  e({ attribute: "minimum-fraction-digits", type: Number })
], i2cFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  e({ attribute: "maximum-fraction-digits", type: Number })
], i2cFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  e({ attribute: "minimum-significant-digits", type: Number })
], i2cFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  e({ attribute: "maximum-significant-digits", type: Number })
], i2cFormatNumber.prototype, "maximumSignificantDigits", 2);
i2cFormatNumber = __decorateClass([
  n("i2c-format-number")
], i2cFormatNumber);
var format_number_default = i2cFormatNumber;

export {
  format_number_default
};
