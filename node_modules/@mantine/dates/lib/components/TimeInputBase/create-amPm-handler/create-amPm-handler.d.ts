/// <reference types="react" />
interface CreateAmPmHandler {
    onChange(value: string): void;
    nextRef?: React.RefObject<HTMLInputElement>;
}
export declare function createAmPmHandler({ onChange, nextRef }: CreateAmPmHandler): (value: string, triggerShift: boolean) => void;
export {};
//# sourceMappingURL=create-amPm-handler.d.ts.map