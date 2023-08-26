export declare function createImageBlot(InlineBlot: any): {
    new (): {
        [x: string]: any;
        deleteAt(index: number, length: number): void;
    };
    [x: string]: any;
    blotName: string;
    className: string;
    tagName: string;
    create(src: string): any;
    value(domNode: HTMLElement): {
        src: string;
        custom: string;
    };
};
//# sourceMappingURL=ImageBlot.d.ts.map