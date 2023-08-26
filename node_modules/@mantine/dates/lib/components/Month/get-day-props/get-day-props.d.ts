import { DayModifiers } from '../types';
interface GetDayProps {
    /** Date associated with Day component */
    date: Date;
    /** Month that is currently displayed */
    month: Date;
    /** Does month have value prop? */
    hasValue: boolean;
    /** Min and max possible dates */
    maxDate: Date;
    minDate: Date;
    /** Currently selected date */
    value: Date;
    /** Function to determine if date should be excluded */
    excludeDate(date: Date): boolean;
    /** Should outside events be disabled */
    disableOutsideEvents: boolean;
    /** Selected date range */
    range: [Date, Date];
}
export declare function getDayProps({ date, month, hasValue, minDate, maxDate, value, excludeDate, disableOutsideEvents, range, }: GetDayProps): DayModifiers;
export {};
//# sourceMappingURL=get-day-props.d.ts.map