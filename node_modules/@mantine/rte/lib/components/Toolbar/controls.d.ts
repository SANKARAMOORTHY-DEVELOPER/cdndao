import { OrderedList, H1, H2, H3, H4, H5, H6, Sub, Sup } from './icons';
export declare const CONTROLS: {
    readonly code: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "code";
    };
    readonly codeBlock: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "code-block";
    };
    readonly bold: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "bold";
    };
    readonly italic: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "italic";
    };
    readonly underline: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "underline";
    };
    readonly strike: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "strike";
    };
    readonly unorderedList: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "list";
        readonly value: "bullet";
    };
    readonly orderedList: {
        readonly icon: typeof OrderedList;
        readonly controls: "list";
        readonly value: "ordered";
    };
    readonly link: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "link";
    };
    readonly image: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "image";
    };
    readonly clean: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "clean";
    };
    readonly alignCenter: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "align";
        readonly value: "center";
        readonly noActive: true;
    };
    readonly alignLeft: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "align";
        readonly value: "";
        readonly noActive: true;
    };
    readonly alignRight: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "align";
        readonly value: "right";
        readonly noActive: true;
    };
    readonly video: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "video";
    };
    readonly h1: {
        readonly icon: typeof H1;
        readonly controls: "header";
        readonly value: "1";
    };
    readonly h2: {
        readonly icon: typeof H2;
        readonly controls: "header";
        readonly value: "2";
    };
    readonly h3: {
        readonly icon: typeof H3;
        readonly controls: "header";
        readonly value: "3";
    };
    readonly h4: {
        readonly icon: typeof H4;
        readonly controls: "header";
        readonly value: "4";
    };
    readonly h5: {
        readonly icon: typeof H5;
        readonly controls: "header";
        readonly value: "5";
    };
    readonly h6: {
        readonly icon: typeof H6;
        readonly controls: "header";
        readonly value: "6";
    };
    readonly sup: {
        readonly icon: typeof Sup;
        readonly controls: "script";
        readonly value: "super";
    };
    readonly sub: {
        readonly icon: typeof Sub;
        readonly controls: "script";
        readonly value: "sub";
    };
    readonly blockquote: {
        readonly icon: ({ color, ...props }: import("@modulz/radix-icons/dist/types").IconProps) => JSX.Element;
        readonly controls: "blockquote";
    };
};
export declare type ToolbarControl = keyof typeof CONTROLS;
//# sourceMappingURL=controls.d.ts.map