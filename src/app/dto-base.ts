import { JsonApiModel, Attribute } from 'angular2-jsonapi';

export abstract class DtoBase extends JsonApiModel {
    @Attribute()
    createdAt: Date;

    @Attribute()
    dtoApplyTo: string;

    @Attribute()
    dtoAction: string;
}
