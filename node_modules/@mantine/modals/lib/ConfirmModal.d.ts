import React from 'react';
import { ButtonProps, GroupProps } from '@mantine/core';
import { ConfirmLabels } from './context';
export interface ConfirmModalProps {
    id?: string;
    children?: React.ReactNode;
    onCancel?(): void;
    onConfirm?(): void;
    closeOnConfirm?: boolean;
    closeOnCancel?: boolean;
    cancelProps?: ButtonProps<'button'>;
    confirmProps?: ButtonProps<'button'>;
    groupProps?: GroupProps;
    labels?: ConfirmLabels;
}
export declare function ConfirmModal({ id, cancelProps, confirmProps, labels, closeOnConfirm, closeOnCancel, groupProps, onCancel, onConfirm, children, }: ConfirmModalProps): JSX.Element;
//# sourceMappingURL=ConfirmModal.d.ts.map