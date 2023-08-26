import React from 'react';
import { InnerSpotlightProps } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
export interface SpotlightProviderProps extends InnerSpotlightProps {
    /** Actions list */
    actions: SpotlightAction[] | ((query: string) => SpotlightAction[]);
    /** Your application */
    children?: React.ReactNode;
    /** Called when spotlight opens */
    onSpotlightOpen?(): void;
    /** Called when spotlight closes */
    onSpotlightClose?(): void;
    /** Called when user enters text in search input */
    onQueryChange?(query: string): void;
    /** Keyboard shortcut or list of shortcuts to trigger spotlight */
    shortcut?: string | string[] | null;
    /** Should search be cleared when spotlight closes */
    cleanQueryOnClose?: boolean;
}
export declare function SpotlightProvider({ actions: initialActions, children, shortcut, onSpotlightClose, onSpotlightOpen, onQueryChange, cleanQueryOnClose, transitionDuration, ...others }: SpotlightProviderProps): JSX.Element;
export declare namespace SpotlightProvider {
    var displayName: string;
}
//# sourceMappingURL=SpotlightProvider.d.ts.map