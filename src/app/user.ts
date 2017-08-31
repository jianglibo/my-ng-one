import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { DtoBase } from './dto-base';

@JsonApiModelConfig({
   type: 'users'
})
export class User extends DtoBase {

   @Attribute()
   title: string;

   @Attribute()
   content: string;

   @Attribute()
   created_at: Date;

   @HasMany()
   comments: Comment[];
}
