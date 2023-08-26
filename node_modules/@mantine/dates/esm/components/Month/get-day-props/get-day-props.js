import 'dayjs';
import { isSameDate } from '../../../utils/is-same-date/is-same-date.js';
import { isWeekend } from './is-weekend/is-weekend.js';
import { isOutside } from './is-outside/is-outside.js';
import { isDisabled } from './is-disabled/is-disabled.js';
import { getRangeProps } from './get-range-props/get-range-props.js';

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
  const outside = isOutside(date, month);
  const selected = hasValue && isSameDate(date, value);
  const { inRange, lastInRange, firstInRange, selectedInRange } = getRangeProps(date, range);
  return {
    disabled: isDisabled({ minDate, maxDate, excludeDate, disableOutsideEvents, date, outside }),
    weekend: isWeekend(date),
    selectedInRange,
    selected,
    inRange,
    firstInRange,
    lastInRange,
    outside
  };
}

export { getDayProps };
//# sourceMappingURL=get-day-props.js.map
