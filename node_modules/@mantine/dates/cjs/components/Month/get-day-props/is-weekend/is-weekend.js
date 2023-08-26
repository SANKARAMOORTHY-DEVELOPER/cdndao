'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isWeekend(date) {
  const weekday = date.getDay();
  return weekday === 6 || weekday === 0;
}

exports.isWeekend = isWeekend;
//# sourceMappingURL=is-weekend.js.map
