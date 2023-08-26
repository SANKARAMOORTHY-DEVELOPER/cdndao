import React from 'react';
import Editor from 'react-quill';
import 'quill-mention';
import { DefaultProps, ClassNames, MantineNumberSize } from '@mantine/core';
import { ToolbarStylesNames } from '../Toolbar/Toolbar';
import { DEFAULT_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { ToolbarControl } from '../Toolbar/controls';
export declare type RichTextEditorStylesNames = ToolbarStylesNames | ClassNames<typeof useStyles>;
export type { RichTextEditorLabels };
export { DEFAULT_LABELS, DEFAULT_CONTROLS };
export interface RichTextEditorProps extends DefaultProps<RichTextEditorStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    /** HTML content, value not forced as quill works in uncontrolled mode */
    value: string;
    /** Called each time value changes */
    onChange(value: string): void;
    /** Called when image image is inserted in editor */
    onImageUpload?(image: File): Promise<string>;
    /** Labels used in toolbar button titles and assets insertion popovers */
    labels?: RichTextEditorLabels;
    /** Toolbar controls divided into groups */
    controls?: ToolbarControl[][];
    /** Make toolbar sticky */
    sticky?: boolean;
    /** Quill mentions plugin setting */
    mentions?: Record<string, any>;
    /** Top toolbar position in any valid css value */
    stickyOffset?: number | string;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Make quill editor read only */
    readOnly?: boolean;
    /** Extra modules for react-quill */
    modules?: Record<string, any>;
}
export declare const RichTextEditor: React.ForwardRefExoticComponent<RichTextEditorProps & React.RefAttributes<Editor>>;
//# sourceMappingURL=RichTextEditor.d.ts.map