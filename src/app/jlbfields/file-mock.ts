export class FileMock implements File {
    lastModifiedDate: any;
    name: string;
    webkitRelativePath: string;
    size: number;
    type: string;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
    msClose(): void {
        throw new Error("Method not implemented.");
    }
    msDetachStream() {
        throw new Error("Method not implemented.");
    }
    slice(start?: number, end?: number, contentType?: string): Blob {
        throw new Error("Method not implemented.");
    }
}
