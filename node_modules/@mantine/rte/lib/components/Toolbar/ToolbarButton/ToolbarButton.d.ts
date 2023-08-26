import React from 'react';
import { ActionIconProps } from '@mantine/core';
interface ToolbarButtonProps extends ActionIconProps<'button'> {
    /** Control icon */
    children: React.ReactNode;
    /** Quill specific control */
    controls: string;
    /** Value for quill control */
    value?: string;
    /** Disable active styles */
    noActive?: boolean;
}
export declare function ToolbarButton({ className, children, controls, value, noActive, ...others }: ToolbarButtonProps): JSX.Element;
export declare namespace ToolbarButton {
    var displayName: string;
}
export {};
//# sourceMappingURL=ToolbarButton.d.ts.map