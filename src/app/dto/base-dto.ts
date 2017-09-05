
export abstract class BaseDto {
    id: number;
    createdAt: Date;
    dtoApplyTo: string;
    dtoAction: string;
    public getNameInUrl(): string {
        return this.constructor.name.toLowerCase();
    }
}
