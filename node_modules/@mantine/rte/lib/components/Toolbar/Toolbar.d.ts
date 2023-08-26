/// <reference types="react" />
import { DefaultProps, ClassNames } from '@mantine/core';
import type { RichTextEditorLabels } from '../RichTextEditor/default-labels';
import { ToolbarControl } from './controls';
import useStyles from './Toolbar.styles';
export declare type ToolbarStylesNames = ClassNames<typeof useStyles>;
export interface ToolbarProps extends DefaultProps<ToolbarStylesNames> {
    /** Toolbar controls divided into groups */
    controls: ToolbarControl[][];
    /** Labels used for all toolbar controls */
    labels: RichTextEditorLabels;
    /** Make toolbar sticky */
    sticky?: boolean;
    /** Top toolbar position in any valid css value */
    stickyOffset?: number | string;
    /** Id that is used to connect toolbar to editor */
    id?: string;
}
export declare function Toolbar({ controls, labels, stickyOffset, sticky, className, classNames, styles, id, ...others }: ToolbarProps): JSX.Element;
export declare namespace Toolbar {
    var displayName: string;
}
//# sourceMappingURL=Toolbar.d.ts.map