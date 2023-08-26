import React from 'react';
import { MantineSize } from '@mantine/core';
interface AmPmSelectProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'size'> {
    /** Called with onChange event */
    onChange(value: string, triggerShift: boolean): void;
    /** Colon text size */
    size?: MantineSize;
}
export declare const AmPmInput: React.ForwardRefExoticComponent<AmPmSelectProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=AmPmInput.d.ts.map