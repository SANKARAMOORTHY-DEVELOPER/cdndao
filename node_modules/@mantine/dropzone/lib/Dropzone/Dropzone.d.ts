import React from 'react';
import { FileRejection } from 'react-dropzone';
import { DefaultProps, ClassNames, MantineNumberSize } from '@mantine/core';
import useStyles from './Dropzone.styles';
export declare type DropzoneStylesNames = ClassNames<typeof useStyles>;
export interface DropzoneStatus {
    accepted: boolean;
    rejected: boolean;
}
export interface DropzoneProps extends DefaultProps<DropzoneStylesNames> {
    /** Padding from theme.spacing, or number to set padding in px */
    padding?: MantineNumberSize;
    /** Border radius from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Render children based on dragging state */
    children(status: DropzoneStatus): React.ReactNode;
    /** Disable files capturing */
    disabled?: boolean;
    /** Called when files are dropped into dropzone */
    onDrop(files: File[]): void;
    /** Called when selected files don't meet file restrictions */
    onReject?(fileRejections: FileRejection[]): void;
    /** Display loading overlay over dropzone */
    loading?: boolean;
    /** File types to accept  */
    accept?: string[];
    /** Get open function as ref */
    openRef?: React.ForwardedRef<() => void | undefined>;
    /** Allow selection of multiple files */
    multiple?: boolean;
    /** Set maximum file size in bytes */
    maxSize?: number;
}
export declare const Dropzone: React.ForwardRefExoticComponent<DropzoneProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Dropzone.d.ts.map