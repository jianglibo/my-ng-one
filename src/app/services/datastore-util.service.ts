import { Injectable } from '@angular/core';
import { JsonapiObjectType, SortPhrase, FilterPhrase } from './data-store';
import 'reflect-metadata';
import { DtoDescriptionKey } from '../dto/dto-description';
import { assertNever } from '../util/util';
import { AttributesBase, JsonapiObject, AttributeType } from '../dto/jsonapi-object';

export interface PageNumberSize {number: number; size: number; }
export interface PageOffsetLimit {offset: number; limit: number; }
export interface PageCursor {cursor: number; }

export function isPageNumberSize(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageNumberSize {
  return (<PageNumberSize>pg).number !== undefined;
}
export function isPageOffsetLimit(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageOffsetLimit {
  return (<PageOffsetLimit>pg).offset !== undefined;
}

export function isPageCursor(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageCursor {
  return (<PageCursor>pg).cursor !== undefined;
}

// export type Pager = PageNumberSize | PageOffsetLimit | PageCursor;

export function isOneObject<T>(oneOrMany: T[] | T): oneOrMany is T {
  return !(<T>oneOrMany instanceof Array);
}

export function isModelInstance<E extends AttributesBase, T extends JsonapiObject<E>>(model: JsonapiObjectType<E, T> | T): model is T {
  return (<T>model).type !== undefined;
}

function getPagerParams(page: PageCursor | PageNumberSize | PageOffsetLimit): string {
    // let tpage: Pager;
    let pagestr = '';
    if (page) {
      if (isPageNumberSize(page)) {
        pagestr = `page[number]=${page.number}&page[size]=${page.size}`;
      } else if (isPageOffsetLimit(page)) {
        pagestr = `page[offset]=${page.offset}&page[limit]=${page.limit}`;
      } else if (isPageCursor(page)) {
        pagestr = `page[cursor]=${page.cursor}`;
      } else {
        throw new Error('Unexpected page format.');
        // silent.
      }
    }
    return pagestr;
}

function getFilterParams(filter: FilterPhrase | FilterPhrase[]): string {
    let filterstr = '';
    if (filter) {
      if (isOneObject<FilterPhrase>(filter)) {
        filter = [filter];
      }
      filterstr = filter.map((v, i, a) => {
        return `filter[${v.fname}]=${v.value}`;
      }).join('&');
    }
    return filterstr;
}

function getSortParams(sort: SortPhrase[] | SortPhrase): string {
  let sortstr = '';
  if (sort) {
    if (isOneObject(sort)) {
      sort = [sort];
    }
    sortstr = sort.map((v, i, a) => {
      switch (v.direction) {
        case 'asc':
          return v.fname;
        case 'desc':
          return '-' + v.fname;
        default:
          return null;
      }
    }).filter(itm => itm != null).join(',');
  }
  return sortstr;
}

@Injectable()
export class DatastoreUtilService {

  constructor() { }

  getListUrl<E extends AttributesBase, T extends JsonapiObject<E>>(jsonapiObjectTypeOrString: JsonapiObjectType<E, T> | string,
     page: PageNumberSize | PageCursor | PageOffsetLimit,
     sort: SortPhrase[] | SortPhrase,
     filter: FilterPhrase[] | FilterPhrase,
     baseUrl = '/'): string {
       let nameInUrl: string;
       if (typeof jsonapiObjectTypeOrString === 'string') {
         nameInUrl = jsonapiObjectTypeOrString;
       } else {
         nameInUrl = Reflect.getMetadata(DtoDescriptionKey, jsonapiObjectTypeOrString).nameInUrl;
       }
       if (!baseUrl.endsWith('/')) {
        baseUrl = baseUrl + '/';
      }
      let result = baseUrl + nameInUrl;

      let tobeappend = getPagerParams(page);
      let filterstr = getFilterParams(filter);
      let sortstr = getSortParams(sort);

      if (sortstr) {
        sortstr = 'sort=' + sortstr;
        tobeappend = tobeappend ? tobeappend + '&' + sortstr : sortstr;
      }
      if (filterstr) {
        tobeappend = tobeappend ? tobeappend + '&' + filterstr : filterstr;
      }
      result = tobeappend ? result + '?' + tobeappend : result;
      return result;
  }

  getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>> (
      jsonapiObjectType: JsonapiObjectType<E, T>, id: number | string, baseUrl: string): string;
  getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>> (model: T, baseUrl: string): string;
  getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>> (
      jsonapiObjectType: JsonapiObjectType<E, T> | T, id: number | string, baseUrl = '/'): string {
        if (isModelInstance(jsonapiObjectType)) {
          return this.getListUrl(jsonapiObjectType.type, undefined, [], [], id as string) + '/' + jsonapiObjectType.id;
        } else {
          return this.getListUrl(jsonapiObjectType, undefined, [], [], baseUrl) + '/' + id;
        }
  }
}
