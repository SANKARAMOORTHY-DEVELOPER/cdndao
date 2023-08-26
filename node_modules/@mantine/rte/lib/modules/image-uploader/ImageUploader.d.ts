interface Options {
    upload(file: File): Promise<string>;
}
export declare class ImageUploader {
    quill: any;
    options: Options;
    range: any;
    fileHolder: HTMLInputElement;
    constructor(quill: any, options: Options);
    selectLocalImage(): void;
    handleDrop(event: any): void;
    handlePaste(event: any): void;
    readAndUploadFile(file: File): void;
    fileChanged(): void;
    insertBase64Image(url: string): void;
    insertToEditor(url: string): void;
    removeBase64Image(): void;
}
export {};
//# sourceMappingURL=ImageUploader.d.ts.map