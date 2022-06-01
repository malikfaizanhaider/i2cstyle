import {
  e,
  h,
  n
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/format-date/format-date.ts
var i2cFormatDate = class extends h {
  constructor() {
    super(...arguments);
    this.date = new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return;
    }
    return new Intl.DateTimeFormat(this.locale, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    }).format(date);
  }
};
__decorateClass([
  e()
], i2cFormatDate.prototype, "date", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "locale", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "weekday", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "era", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "year", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "month", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "day", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "hour", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "minute", 2);
__decorateClass([
  e()
], i2cFormatDate.prototype, "second", 2);
__decorateClass([
  e({ attribute: "time-zone-name" })
], i2cFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e({ attribute: "time-zone" })
], i2cFormatDate.prototype, "timeZone", 2);
__decorateClass([
  e({ attribute: "hour-format" })
], i2cFormatDate.prototype, "hourFormat", 2);
i2cFormatDate = __decorateClass([
  n("i2c-format-date")
], i2cFormatDate);
var format_date_default = i2cFormatDate;

export {
  format_date_default
};
