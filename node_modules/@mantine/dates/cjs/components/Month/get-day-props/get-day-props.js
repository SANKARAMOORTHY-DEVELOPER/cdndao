'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('dayjs');
var isSameDate = require('../../../utils/is-same-date/is-same-date.js');
var isWeekend = require('./is-weekend/is-weekend.js');
var isOutside = require('./is-outside/is-outside.js');
var isDisabled = require('./is-disabled/is-disabled.js');
var getRangeProps = require('./get-range-props/get-range-props.js');

function getDayProps({
  date,
  month,
  hasValue,
  minDate,
  maxDate,
  value,
  excludeDate,
  disableOutsideEvents,
  range
}) {
  const outside = isOutside.isOutside(date, month);
  const selected = hasValue && isSameDate.isSameDate(date, value);
  const { inRange, lastInRange, firstInRange, selectedInRange } = getRangeProps.getRangeProps(date, range);
  return {
    disabled: isDisabled.isDisabled({ minDate, maxDate, excludeDate, disableOutsideEvents, date, outside }),
    weekend: isWeekend.isWeekend(date),
    selectedInRange,
    selected,
    inRange,
    firstInRange,
    lastInRange,
    outside
  };
}

exports.getDayProps = getDayProps;
//# sourceMappingURL=get-day-props.js.map
