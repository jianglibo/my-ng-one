import { BaseDto } from './base-dto';
import { DtoDescription } from './dto-description';

@DtoDescription({
    nameInUrl: 'users',
})
export class User extends BaseDto {

   title: string;

   content: string;

   created_at: Date;

   comments: Comment[];
}
