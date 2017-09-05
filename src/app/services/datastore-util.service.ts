import { Injectable } from '@angular/core';
import { DtoType } from './data-store';
import { BaseDto } from '../dto/base-dto';
import 'reflect-metadata';
import { DtoDescriptionKey } from '../dto/dto-description';

@Injectable()
export class DatastoreUtilService {

  constructor() { }

  buildUrl<T extends BaseDto> (dtoType: DtoType<T>, baseUrl = '/'): string {
    if (!baseUrl.endsWith('/')) {
      baseUrl = baseUrl + '/';
    }
    return baseUrl + Reflect.getMetadata(DtoDescriptionKey, dtoType);
  }
}
