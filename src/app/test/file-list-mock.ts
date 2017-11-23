export class FileListMock implements FileList {
    [index: number]: File;

    files: File[] = [];
    constructor(...files: File[]) {
        this.files = files;
    }

    get length(): number {
        return this.files.length;
    }

    item(index: number): File {
        return this.files[index];
    }
}
