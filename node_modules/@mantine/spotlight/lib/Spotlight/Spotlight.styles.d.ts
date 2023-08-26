import { MantineNumberSize } from '@mantine/core';
export interface SpotlightStylesParams {
    centered: boolean;
    maxWidth: number;
    topOffset: number;
    radius: MantineNumberSize;
}
declare const _default: (params: SpotlightStylesParams, options?: import("@mantine/core").UseStylesOptions<"root" | "spotlight" | "overlay" | "inner" | "searchInput">) => {
    classes: Record<"root" | "spotlight" | "overlay" | "inner" | "searchInput", string>;
    cx: (...args: any) => string;
    theme: import("@mantine/core").MantineTheme;
};
export default _default;
//# sourceMappingURL=Spotlight.styles.d.ts.map